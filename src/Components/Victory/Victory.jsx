import "./Victory.css";
import React, { useState, useEffect } from "react";

const OtherUserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //  récupérer les informations de l'utilisateur spécifié par l'ID
    const fetchUser = async () => {
      try {
        // Appel à l'API pour récupérer les informations de l'utilisateur avec l'ID spécifié
        const response = await get(
          `http://127.0.0.1:8000/api/Victory/planet${userId}`,
          {
            //  token d'authentification dans les headers pour autoriser l'accès à l'API
            headers: {
              "Content-Type": "application/json",
              Authorization: `bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // Mettre à jour l'état de l'utilisateur avec les données récupérées de l'API
        setUser(response.data);
      } catch (error) {
        //  affichez l'erreur dans la console
        console.error(
          "Erreur lors de la récupération des informations de l'utilisateur",
          error
        );
      }
    };

    //  récupérer les informations de l'utilisateur
    fetchUser();
  }, [userId]); //  userId il sera déclenché à chaque fois que userId change

  // Si l'utilisateur est en cours de récupération, affichez un message de chargement
  if (!user) {
    return <div>Chargement en cours...</div>;
  }

  const RessourcesManager = () => {
    // État local pour stocker le nombre de ressources du joueur
    const [ressources, setRessources] = useState(1000);

    // État local pour indiquer si le joueur a gagné ou non
    const [victoire, setVictoire] = useState(false);

    // Pourcentage des ressources à récupérer en cas de victoire
    const pourcentageRecupere = 0.1;

    //   Recupère l'ID de l'autre planète
    const [id, setId] = useState();

    //  clic sur le bouton "Victoire !"
    const handleVictoire = () => {
      setVictoire(true); // Définit l'état de victoire à true
    };

    // Fonction pour récupérer les ressources en cas de victoire
    const recupererRessources = () => {
      if (victoire) {
        // Si le joueur a gagné, on calcule le nombre de ressources à récupérer
        const ressourcesRecuperees = Math.floor(
          ressources * pourcentageRecupere
        );
        setRessources(ressources + ressourcesRecuperees); // Mise à jour des ressources avec celles récupérées
      }
    };

    return (
      <div>
        <p>Ressources actuelles: {ressources}</p>
        <button onClick={handleVictoire}>Victoire !</button>
        <button onClick={recupererRessources}>Récupérer les ressources</button>
      </div>
    );
  };
};
export default OtherUserProfile;
