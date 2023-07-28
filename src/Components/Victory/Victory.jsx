import "./Victory.css";
import React, { useState, useEffect } from "react";

const OtherUserProfile = ({ userId }) => {
  const [user, setUser] = useState(false);
  // État local pour stocker le nombre de ressources du joueur
  const [ressources, setRessources] = useState({});

  // État local pour indiquer si le joueur a gagné ou non
  const [victoire, setVictoire] = useState(false);

  // Pourcentage des ressources à récupérer en cas de victoire
  const pourcentageRecupere = 0.1;

  useEffect(() => {
    // récupérer les informations de l'utilisateur spécifié par l'ID
    const fetchUser = async () => {
      try {
        // Appel à l'API pour récupérer les informations de l'utilisateur avec l'ID spécifié
        const response = await fetch(``, {
          // token d'authentification dans les headers pour autoriser l'accès à l'API
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${localStorage.getItem("token")}`,
          },
        });
        useEffect(() => {
          console.log("test", ressources);
        }, [ressources]);

        if (!response.ok) {
          // Handle the error if the response is not ok
          throw new Error("Network response was not ok");
        }

        // Mettre à jour l'état de l'utilisateur avec les données récupérées de l'API
        const userData = await response.json();
        setUser(userData.data);
      } catch (error) {
        // affichez l'erreur dans la console
        // console.error(
        //   "Erreur lors de la récupération des informations de l'utilisateur",
        //   error
        // );
      }
    };

    // récupérer les informations de l'utilisateur
    fetchUser();
  }, [userId]); // userId il sera déclenché à chaque fois que userId change

  // If the user is being retrieved, display a loading message
  if (!user) {
    return (
      <div className="defaite">
        <img src="src/Components/img/downloadfile.png" className="defaitee" />
      </div>
    );
  }
  useEffect(() => {
    console.log("test", ressources);
  }, [ressources]);

  const displayOres = () => {
    if (ressources) {
      return Object.keys(ressources).map((e, key) => {
        return (
          <div key={key}>
            <p className="ore">{ressources[key].ore}</p>
          </div>
        );
      });
    }
    return <p>Loading...</p>;
  };

  const displayFuel = () => {
    if (ressources) {
      return Object.keys(ressources).map((e, key) => {
        return (
          <div key={key}>
            <p className="fuel">{ressources[key].fuel}</p>
          </div>
        );
      });
    }
    return <p>Loading...</p>;
  };

  const displayEnergy = () => {
    if (ressources) {
      return Object.keys(ressources).map((e, key) => {
        return (
          <div key={key}>
            <p className="energy">{ressources[key].energy}</p>
          </div>
        );
      });
    }
    return <p>Loading...</p>;
  };

  //   Recupère l'ID de l'autre planète
  // const [id, setId] = useState();

  const getResources = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch("http://127.0.0.1:8000/api/resource", options);
    const donnees = await response.json();
    console.log("Reponse de l'API (Resources) : ", donnees.resource);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setRessources(donnees.resource);
    }
  };

  //  clic sur le bouton "Victoire !"
  const handleVictoire = () => {
    setVictoire(true); // Définit l'état de victoire à true
  };

  // Fonction pour récupérer les ressources en cas de victoire
  // const recupererRessources = () => {
  //   if (victoire) {
  //     // Si le joueur a gagné, on calcule le nombre de ressources à récupérer
  //     const ressourcesRecuperees = ressources.map((item) => {
  //       const { ore, fuel, energy } = item;
  //       return {
  //         ore: Math.floor(ore * pourcentageRecupere),
  //         fuel: Math.floor(fuel * pourcentageRecupere),
  //         energy: Math.floor(energy * pourcentageRecupere),
  //       };
  //     });
  //   }
  // };
  useEffect(() => {
    getResources();
  }, []);

  return (
    <div className="victory">
      <div className="coupe">
        <img src="src/Components/img/2553310_13474.png" className="coupee" />
        <h1 className="tt">VICTOIRE</h1>
        <img src="src/Components/img/2553310_13474.png" className="coupee" />
        <br />
      </div>
      <h3 className="tt">Ressources actuelles :</h3>
      <ul>
        <li>
          <p className="tt">ore : {displayOres()}</p>
        </li>
        <li>
          <p className="tt">fuel : {displayFuel()}</p>
        </li>
        <li>
          <p className="tt">energy : {displayEnergy()}</p>
        </li>
      </ul>
      <h3 className="tt">Ressources récupérées :</h3>
      <ul>
        <li>
          <p className="tt">ore : </p>
        </li>
        <li>
          <p className="tt">fuel : </p>
        </li>
        <li>
          <p className="tt">energy : </p>
        </li>
      </ul>
    </div>
  );
};
export default OtherUserProfile;
