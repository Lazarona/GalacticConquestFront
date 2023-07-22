// import "./AttackGrid.css";
// import React from "react";
// import { MDBBtn } from "mdb-react-ui-kit";

// function AttackGrid() {
//   return (
//     // <div className="attack">
//     //   <div className="parent">
//     //     <div className="grid">
//     //       <div className="one">1</div>
//     //       <div className="two">2</div>
//     //       <div className="three">3</div>
//     //       <div className="four">4</div>
//     //     </div>
//     //   </div>
//     // </div>

//     // <table>
//     //   <tr>
//     //     <th scope="row">
//     //       <td>
//     //         <div class="parent">
//     //           <div class="div1"> </div>
//     //         </div>
//     //       </td>
//     //     </th>
//     //   </tr>
//     // </table>
//     <div class="fondattack">
//       <div class="grid">
//         <div className="card">1</div>
//         <div className="card">2</div>
//         <div className="card">3</div>
//         <div className="card">4</div>
//         <div className="card">5</div>
//         <div className="card">6</div>
//         <div className="card">7</div>
//         <div className="card">8</div>
//         <div className="card">9</div>
//         <div className="card">10</div>
//         <div className="card">11</div>
//         <div className="card">12</div>
//         <div className="card">13</div>
//         <div className="card">14</div>
//         <div className="card">15</div>
//         <div className="card">16</div>
//         <div className="card">17</div>
//         <div className="card">18</div>
//         <div className="card">19</div>
//         <div className="card">20</div>
//         <div className="card">21</div>
//         <div className="card">22</div>
//         <div className="card">23</div>
//         <div className="card">24</div>
//         <div className="card">25</div>
//         <div className="card">26</div>
//         <div className="card">27</div>
//         <div className="card">28</div>
//         <div className="card">29</div>
//         <div className="card">30</div>
//         <div className="card">31</div>
//         <div className="card">32</div>
//         <div className="card">33</div>
//         <div className="card">34</div>
//         <div className="card">35</div>
//         <div className="card">36</div>
//         <div className="card">37</div>
//         <div className="card">38</div>
//         <div className="card">39</div>
//         <div className="card">40</div>
//         <div className="card">41</div>
//         <div className="card">42</div>
//         <div className="card">43</div>
//         <div className="card">44</div>
//         <div className="card">45</div>
//         <div className="card">46</div>
//         <div className="card">47</div>
//         <div className="card">48</div>
//         <div className="card">49</div>
//         <div className="card">50</div>
//         <div className="card">51</div>
//         <div className="card">52</div>
//         <div className="card">53</div>
//         <div className="card">54</div>
//         <div className="card">55</div>
//         <div className="card">56</div>
//         <div className="card">57</div>
//         <div className="card">58</div>
//         <div className="card">59</div>
//         <div className="card">60</div>
//         <div className="card">61</div>
//         <div className="card">62</div>
//         <div className="card">63</div>
//         <div className="card">64</div>
//         <div className="card">65</div>
//         <div className="card">66</div>
//         <div className="card">67</div>
//         <div className="card">68</div>
//         <div className="card">69</div>
//         <div className="card">70</div>
//         <div className="card">71</div>
//         <div className="card">72</div>
//         <div className="card">73</div>
//         <div className="card">74</div>
//         <div className="card">75</div>
//         <div className="card">76</div>
//         <div className="card">77</div>
//         <div className="card">78</div>
//         <div className="card">79</div>
//         <div className="card">80</div>
//         <div className="card">81</div>
//         <div className="card">82</div>
//         <div className="card">83</div>
//         <div className="card">84</div>
//         <div className="card">85</div>
//         <div className="card">86</div>
//         <div className="card">87</div>
//         <div className="card">88</div>
//         <div className="card">89</div>
//         <div className="card">90</div>
//         <div className="card">91</div>
//         <div className="card">92</div>
//         <div className="card">93</div>
//         <div className="card">94</div>
//         <div className="card">95</div>
//         <div className="card">96</div>
//         <div className="card">97</div>
//         <div className="card">98</div>
//         <div className="card">99</div>
//         <div className="card">100</div>
//       </div>
//     </div>
//   );
// }
// export default AttackGrid;
import "./AttackGrid.css";
import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

class AttackGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 10, //nbr de case max a selectionner
      i: 0, //nbr de case selectionner
    };
    this.changeCouleur = this.changeCouleur.bind(this);
  }

<<<<<<< HEAD
  changeCouleur(event) {
    var x = event.target; //cible la case selectionnée
    if (this.state.i < this.state.max && x.className === "caseBataille") {
      x.className =
        x.className === "caseBataille" ? "caseBataille2" : "caseBataille"; //changement de couleur quand je suis blanc
      this.setState({ i: this.state.i + 1 });
    } else if (
      this.state.i <= this.state.max &&
      x.className === "caseBataille2"
    ) {
      x.className =
        x.className === "caseBataille2" ? "caseBataille" : "caseBataille2"; //changement de couleur quand je suis rouge
      this.setState({ i: this.state.i - 1 });
    } else if (this.state.i >= this.state.max && x.className === "caseBataille")
      alert("nbr max");
  }

  transformTab() {
    //a faire parser la grille en matrice
    var x = [];
    var y = [];
    //valeur d une case en fonction de la couleur
    var blanc = 0;
    var rouge = 1;
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        //var z = document.getElementById("plateau1").rows[i].cells[j]
        var z = document.getElementById("plateau1").rows[i].cells[j].className;
        if (z === "caseBataille2") {
          y.push(rouge);
        } else {
          y.push(blanc);
        }
      }
      x.push(y);
      y = []; //vide le tableau à chaque boucle
    }
    console.log(x);
  }
  render() {
    return (
      <div id="jeu">
        <table id="plateau1" border="1">
          <tr>
            <td></td>
            <td className="caseBataille">A</td>
            <td className="caseBataille">B</td>
            <td className="caseBataille">C</td>
            <td className="caseBataille">D</td>
            <td className="caseBataille">E</td>
            <td className="caseBataille">F</td>
            <td className="caseBataille">G</td>
            <td className="caseBataille">H</td>
            <td className="caseBataille">I</td>
            <td className="caseBataille">J</td>
          </tr>
          <tr>
            <td className="caseBataille">1</td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="A1"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="B1"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="C1"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="D1"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="E1"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="F1"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="G1"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="H1"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="I1"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="J1"
            ></td>
          </tr>
          <tr>
            <td className="caseBataille">2</td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="A2"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="B2"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="C2"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="D2"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="E2"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="F2"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="G2"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="H2"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="I2"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="J2"
            ></td>
          </tr>
          <tr>
            <td className="caseBataille">3</td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="A3"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="B3"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="C3"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="D3"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="E3"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="F3"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="G3"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="H3"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="I3"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="J3"
            ></td>
          </tr>
          <tr>
            <td className="caseBataille">4</td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="A4"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="B4"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="C4"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="D4"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="E4"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="F4"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="G4"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="H4"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="I4"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="J4"
            ></td>
          </tr>
          <tr>
            <td className="caseBataille">5</td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="A5"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="B5"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="C5"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="D5"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="E5"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="F5"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="G5"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="H5"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="I5"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="J5"
            ></td>
          </tr>
          <tr>
            <td className="caseBataille">6</td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="A6"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="B6"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="C6"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="D6"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="E6"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="F6"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="G6"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="H6"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="I6"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="J6"
            ></td>
          </tr>
          <tr>
            <td className="caseBataille">7</td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="A7"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="B7"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="C7"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="D7"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="E7"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="F7"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="G7"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="H7"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="I7"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="J7"
            ></td>
          </tr>
          <tr>
            <td className="caseBataille">8</td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="A8"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="B8"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="C8"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="D8"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="E8"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="F8"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="G8"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="H8"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="I8"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="J8"
            ></td>
          </tr>
          <tr>
            <td className="caseBataille">9</td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="A9"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="B9"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="C9"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="D9"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="E9"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="F9"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="G9"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="H9"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="I9"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="J9"
            ></td>
          </tr>
          <tr>
            <td className="caseBataille">10</td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="A10"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="B10"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="C10"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="D10"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="E10"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="F10"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="G10"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="H10"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="I10"
            ></td>
            <td
              className="caseBataille"
              onClick={(e) => this.changeCouleur(e)}
              id="J10"
            ></td>
          </tr>
        </table>
        <table id="plateau2" border="1">
          <tr>
            <td></td>
            <td className="caseBataille">A</td>
            <td className="caseBataille">B</td>
            <td className="caseBataille">C</td>
            <td className="caseBataille">D</td>
            <td className="caseBataille">E</td>
            <td className="caseBataille">F</td>
            <td className="caseBataille">G</td>
            <td className="caseBataille">H</td>
            <td className="caseBataille">I</td>
            <td className="caseBataille">J</td>
          </tr>
          <tr>
            <td className="caseBataille">1</td>
            <td className="caseBataille" id="A1"></td>
            <td className="caseBataille" id="B1"></td>
            <td className="caseBataille" id="C1"></td>
            <td className="caseBataille" id="D1"></td>
            <td className="caseBataille" id="E1"></td>
            <td className="caseBataille" id="F1"></td>
            <td className="caseBataille" id="G1"></td>
            <td className="caseBataille" id="H1"></td>
            <td className="caseBataille" id="I1"></td>
            <td className="caseBataille" id="J1"></td>
          </tr>
          <tr>
            <td className="caseBataille">2</td>
            <td className="caseBataille" id="A2"></td>
            <td className="caseBataille" id="B2"></td>
            <td className="caseBataille" id="C2"></td>
            <td className="caseBataille" id="D2"></td>
            <td className="caseBataille" id="E2"></td>
            <td className="caseBataille" id="F2"></td>
            <td className="caseBataille" id="G2"></td>
            <td className="caseBataille" id="H2"></td>
            <td className="caseBataille" id="I2"></td>
            <td className="caseBataille" id="J2"></td>
          </tr>
          <tr>
            <td className="caseBataille">3</td>
            <td className="caseBataille" id="A3"></td>
            <td className="caseBataille" id="B3"></td>
            <td className="caseBataille" id="C3"></td>
            <td className="caseBataille" id="D3"></td>
            <td className="caseBataille" id="E3"></td>
            <td className="caseBataille" id="F3"></td>
            <td className="caseBataille" id="G3"></td>
            <td className="caseBataille" id="H3"></td>
            <td className="caseBataille" id="I3"></td>
            <td className="caseBataille" id="J3"></td>
          </tr>
          <tr>
            <td className="caseBataille">4</td>
            <td className="caseBataille" id="A4"></td>
            <td className="caseBataille" id="B4"></td>
            <td className="caseBataille" id="C4"></td>
            <td className="caseBataille" id="D4"></td>
            <td className="caseBataille" id="E4"></td>
            <td className="caseBataille" id="F4"></td>
            <td className="caseBataille" id="G4"></td>
            <td className="caseBataille" id="H4"></td>
            <td className="caseBataille" id="I4"></td>
            <td className="caseBataille" id="J4"></td>
          </tr>
          <tr>
            <td className="caseBataille">5</td>
            <td className="caseBataille" id="A5"></td>
            <td className="caseBataille" id="B5"></td>
            <td className="caseBataille" id="C5"></td>
            <td className="caseBataille" id="D5"></td>
            <td className="caseBataille" id="E5"></td>
            <td className="caseBataille" id="F5"></td>
            <td className="caseBataille" id="G5"></td>
            <td className="caseBataille" id="H5"></td>
            <td className="caseBataille" id="I5"></td>
            <td className="caseBataille" id="J5"></td>
          </tr>
          <tr>
            <td className="caseBataille">6</td>
            <td className="caseBataille" id="A6"></td>
            <td className="caseBataille" id="B6"></td>
            <td className="caseBataille" id="C6"></td>
            <td className="caseBataille" id="D6"></td>
            <td className="caseBataille" id="E6"></td>
            <td className="caseBataille" id="F6"></td>
            <td className="caseBataille" id="G6"></td>
            <td className="caseBataille" id="H6"></td>
            <td className="caseBataille" id="I6"></td>
            <td className="caseBataille" id="J6"></td>
          </tr>
          <tr>
            <td className="caseBataille">7</td>
            <td className="caseBataille" id="A7"></td>
            <td className="caseBataille" id="B7"></td>
            <td className="caseBataille" id="C7"></td>
            <td className="caseBataille" id="D7"></td>
            <td className="caseBataille" id="E7"></td>
            <td className="caseBataille" id="F7"></td>
            <td className="caseBataille" id="G7"></td>
            <td className="caseBataille" id="H7"></td>
            <td className="caseBataille" id="I7"></td>
            <td className="caseBataille" id="J7"></td>
          </tr>
          <tr>
            <td className="caseBataille">8</td>
            <td className="caseBataille" id="A8"></td>
            <td className="caseBataille" id="B8"></td>
            <td className="caseBataille" id="C8"></td>
            <td className="caseBataille" id="D8"></td>
            <td className="caseBataille" id="E8"></td>
            <td className="caseBataille" id="F8"></td>
            <td className="caseBataille" id="G8"></td>
            <td className="caseBataille" id="H8"></td>
            <td className="caseBataille" id="I8"></td>
            <td className="caseBataille" id="J8"></td>
          </tr>
          <tr>
            <td className="caseBataille">9</td>
            <td className="caseBataille" id="A9"></td>
            <td className="caseBataille" id="B9"></td>
            <td className="caseBataille" id="C9"></td>
            <td className="caseBataille" id="D9"></td>
            <td className="caseBataille" id="E9"></td>
            <td className="caseBataille" id="F9"></td>
            <td className="caseBataille" id="G9"></td>
            <td className="caseBataille" id="H9"></td>
            <td className="caseBataille" id="I9"></td>
            <td className="caseBataille" id="J9"></td>
          </tr>
          <tr>
            <td className="caseBataille">10</td>
            <td className="caseBataille" id="A10"></td>
            <td className="caseBataille" id="B10"></td>
            <td className="caseBataille" id="C10"></td>
            <td className="caseBataille" id="D10"></td>
            <td className="caseBataille" id="E10"></td>
            <td className="caseBataille" id="F10"></td>
            <td className="caseBataille" id="G10"></td>
            <td className="caseBataille" id="H10"></td>
            <td className="caseBataille" id="I10"></td>
            <td className="caseBataille" id="J10"></td>
          </tr>
        </table>
        <br />
        <input type="text" id="coup" />
        <input
          type="button"
          id="jouer"
          value="Valider"
          onClick={this.transformTab}
        />
=======
    // <table>
    //   <tr>
    //     <th scope="row">
    //       <td>
    //         <div class="parent">
    //           <div class="div1"> </div>
    //         </div>
    //       </td>
    //     </th>
    //   </tr>
    // </table>

    <div id="attackgrid-container">
      <div class="fondattack">
        <div class="grid">
          <div className="card">1</div>
          <div className="card">2</div>
          <div className="card">3</div>
          <div className="card">4</div>
          <div className="card">5</div>
          <div className="card">6</div>
          <div className="card">7</div>
          <div className="card">8</div>
          <div className="card">9</div>
          <div className="card">10</div>
          <div className="card">11</div>
          <div className="card">12</div>
          <div className="card">13</div>
          <div className="card">14</div>
          <div className="card">15</div>
          <div className="card">16</div>
          <div className="card">17</div>
          <div className="card">18</div>
          <div className="card">19</div>
          <div className="card">20</div>
          <div className="card">21</div>
          <div className="card">22</div>
          <div className="card">23</div>
          <div className="card">24</div>
          <div className="card">25</div>
          <div className="card">26</div>
          <div className="card">27</div>
          <div className="card">28</div>
          <div className="card">29</div>
          <div className="card">30</div>
          <div className="card">31</div>
          <div className="card">32</div>
          <div className="card">33</div>
          <div className="card">34</div>
          <div className="card">35</div>
          <div className="card">36</div>
          <div className="card">37</div>
          <div className="card">38</div>
          <div className="card">39</div>
          <div className="card">40</div>
          <div className="card">41</div>
          <div className="card">42</div>
          <div className="card">43</div>
          <div className="card">44</div>
          <div className="card">45</div>
          <div className="card">46</div>
          <div className="card">47</div>
          <div className="card">48</div>
          <div className="card">49</div>
          <div className="card">50</div>
          <div className="card">51</div>
          <div className="card">52</div>
          <div className="card">53</div>
          <div className="card">54</div>
          <div className="card">55</div>
          <div className="card">56</div>
          <div className="card">57</div>
          <div className="card">58</div>
          <div className="card">59</div>
          <div className="card">60</div>
          <div className="card">61</div>
          <div className="card">62</div>
          <div className="card">63</div>
          <div className="card">64</div>
          <div className="card">65</div>
          <div className="card">66</div>
          <div className="card">67</div>
          <div className="card">68</div>
          <div className="card">69</div>
          <div className="card">70</div>
          <div className="card">71</div>
          <div className="card">72</div>
          <div className="card">73</div>
          <div className="card">74</div>
          <div className="card">75</div>
          <div className="card">76</div>
          <div className="card">77</div>
          <div className="card">78</div>
          <div className="card">79</div>
          <div className="card">80</div>
          <div className="card">81</div>
          <div className="card">82</div>
          <div className="card">83</div>
          <div className="card">84</div>
          <div className="card">85</div>
          <div className="card">86</div>
          <div className="card">87</div>
          <div className="card">88</div>
          <div className="card">89</div>
          <div className="card">90</div>
          <div className="card">91</div>
          <div className="card">92</div>
          <div className="card">93</div>
          <div className="card">94</div>
          <div className="card">95</div>
          <div className="card">96</div>
          <div className="card">97</div>
          <div className="card">98</div>
          <div className="card">99</div>
          <div className="card">100</div>
          <div className="card">101</div>
          <div className="card">102</div>
          <div className="card">103</div>
          <div className="card">104</div>
          <div className="card">105</div>
          <div className="card">106</div>
          <div className="card">107</div>
          <div className="card">108</div>
          <div className="card">109</div>
          <div className="card">110</div>
          <div className="card">111</div>
          <div className="card">112</div>
          <div className="card">113</div>
          <div className="card">114</div>
          <div className="card">115</div>
          <div className="card">116</div>
          <div className="card">117</div>
          <div className="card">118</div>
          <div className="card">119</div>
          <div className="card">120</div>
          <div className="card">121</div>
          <div className="card">122</div>
          <div className="card">123</div>
          <div className="card">124</div>
          <div className="card">125</div>
          <div className="card">126</div>
          <div className="card">127</div>
          <div className="card">128</div>
          <div className="card">129</div>
          <div className="card">130</div>
          <div className="card">131</div>
          <div className="card">132</div>
          <div className="card">133</div>
          <div className="card">134</div>
          <div className="card">135</div>
          <div className="card">136</div>
          <div className="card">137</div>
          <div className="card">138</div>
          <div className="card">139</div>
          <div className="card">140</div>
          <div className="card">141</div>
          <div className="card">142</div>
          <div className="card">143</div>
          <div className="card">144</div>
          <div className="card">145</div>
          <div className="card">146</div>
          <div className="card">147</div>
          <div className="card">148</div>
          <div className="card">149</div>
          <div className="card">150</div>
          <div className="card">151</div>
          <div className="card">152</div>
          <div className="card">153</div>
          <div className="card">154</div>
          <div className="card">155</div>
          <div className="card">156</div>
          <div className="card">157</div>
          <div className="card">158</div>
          <div className="card">159</div>
          <div className="card">160</div>
          <div className="card">161</div>
          <div className="card">162</div>
          <div className="card">163</div>
          <div className="card">164</div>
          <div className="card">165</div>
          <div className="card">166</div>
          <div className="card">167</div>
          <div className="card">168</div>
          <div className="card">169</div>
          <div className="card">170</div>
          <div className="card">171</div>
          <div className="card">172</div>
          <div className="card">173</div>
          <div className="card">174</div>
          <div className="card">175</div>
          <div className="card">176</div>
          <div className="card">177</div>
          <div className="card">178</div>
          <div className="card">179</div>
          <div className="card">180</div>
          <div className="card">181</div>
          <div className="card">182</div>
          <div className="card">183</div>
          <div className="card">184</div>
          <div className="card">185</div>
          <div className="card">186</div>
          <div className="card">187</div>
          <div className="card">188</div>
          <div className="card">189</div>
          <div className="card">190</div>
          <div className="card">191</div>
          <div className="card">192</div>
          <div className="card">193</div>
          <div className="card">194</div>
          <div className="card">195</div>
          <div className="card">196</div>
          <div className="card">197</div>
          <div className="card">198</div>
          <div className="card">199</div>
          <div className="card">200</div>
          <div className="card">201</div>
          <div className="card">202</div>
          <div className="card">203</div>
          <div className="card">204</div>
          <div className="card">205</div>
          <div className="card">206</div>
          <div className="card">207</div>
          <div className="card">208</div>
          <div className="card">209</div>
          <div className="card">210</div>
          <div className="card">211</div>
          <div className="card">212</div>
          <div className="card">213</div>
          <div className="card">214</div>
          <div className="card">215</div>
          <div className="card">216</div>
          <div className="card">217</div>
          <div className="card">218</div>
          <div className="card">219</div>
          <div className="card">220</div>
          <div className="card">221</div>
          <div className="card">222</div>
          <div className="card">223</div>
          <div className="card">224</div>
          <div className="card">225</div>
          <div className="card">226</div>
          <div className="card">227</div>
          <div className="card">228</div>
          <div className="card">229</div>
          <div className="card">230</div>
          <div className="card">231</div>
          <div className="card">232</div>
          <div className="card">233</div>
          <div className="card">234</div>
          <div className="card">235</div>
          <div className="card">236</div>
          <div className="card">237</div>
          <div className="card">238</div>
          <div className="card">239</div>
          <div className="card">240</div>
          <div className="card">241</div>
          <div className="card">242</div>
          <div className="card">243</div>
          <div className="card">244</div>
          <div className="card">245</div>
          <div className="card">246</div>
          <div className="card">247</div>
          <div className="card">248</div>
          <div className="card">249</div>
          <div className="card">250</div>
          <div className="card">251</div>
          <div className="card">252</div>
          <div className="card">253</div>
          <div className="card">254</div>
          <div className="card">255</div>
          <div className="card">256</div>
          <div className="card">257</div>
          <div className="card">258</div>
          <div className="card">259</div>
          <div className="card">260</div>
          <div className="card">261</div>
          <div className="card">262</div>
          <div className="card">263</div>
          <div className="card">264</div>
          <div className="card">265</div>
          <div className="card">266</div>
          <div className="card">267</div>
          <div className="card">268</div>
          <div className="card">269</div>
          <div className="card">270</div>
          <div className="card">271</div>
          <div className="card">272</div>
          <div className="card">273</div>
          <div className="card">274</div>
          <div className="card">275</div>
          <div className="card">276</div>
          <div className="card">277</div>
          <div className="card">278</div>
          <div className="card">279</div>
          <div className="card">280</div>
          <div className="card">281</div>
          <div className="card">282</div>
          <div className="card">283</div>
          <div className="card">284</div>
          <div className="card">285</div>
          <div className="card">286</div>
          <div className="card">287</div>
          <div className="card">288</div>
          <div className="card">289</div>
          <div className="card">290</div>
          <div className="card">291</div>
          <div className="card">292</div>
          <div className="card">293</div>
          <div className="card">294</div>
          <div className="card">295</div>
          <div className="card">296</div>
          <div className="card">297</div>
          <div className="card">298</div>
          <div className="card">299</div>
          <div className="card">300</div>
          <div className="card">301</div>
          <div className="card">302</div>
          <div className="card">303</div>
          <div className="card">304</div>
          <div className="card">305</div>
          <div className="card">306</div>
          <div className="card">307</div>
          <div className="card">308</div>
          <div className="card">309</div>
          <div className="card">310</div>
          <div className="card">311</div>
          <div className="card">312</div>
          <div className="card">313</div>
          <div className="card">314</div>
          <div className="card">315</div>
          <div className="card">316</div>
          <div className="card">317</div>
          <div className="card">318</div>
          <div className="card">319</div>
          <div className="card">320</div>
          <div className="card">321</div>
          <div className="card">322</div>
          <div className="card">323</div>
          <div className="card">324</div>
          <div className="card">325</div>
          <div className="card">326</div>
          <div className="card">327</div>
          <div className="card">328</div>
          <div className="card">329</div>
          <div className="card">330</div>
          <div className="card">331</div>
          <div className="card">332</div>
          <div className="card">333</div>
          <div className="card">334</div>
          <div className="card">335</div>
          <div className="card">336</div>
          <div className="card">337</div>
          <div className="card">338</div>
          <div className="card">339</div>
          <div className="card">340</div>
          <div className="card">341</div>
          <div className="card">342</div>
          <div className="card">343</div>
          <div className="card">344</div>
          <div className="card">345</div>
          <div className="card">346</div>
          <div className="card">347</div>
          <div className="card">348</div>
          <div className="card">349</div>
          <div className="card">350</div>
          <div className="card">351</div>
          <div className="card">352</div>
          <div className="card">353</div>
          <div className="card">354</div>
          <div className="card">355</div>
          <div className="card">356</div>
          <div className="card">357</div>
          <div className="card">358</div>
          <div className="card">359</div>
          <div className="card">360</div>
          <div className="card">361</div>
          <div className="card">362</div>
          <div className="card">363</div>
          <div className="card">364</div>
          <div className="card">365</div>
          <div className="card">366</div>
          <div className="card">367</div>
          <div className="card">368</div>
          <div className="card">369</div>
          <div className="card">370</div>
          <div className="card">371</div>
          <div className="card">372</div>
          <div className="card">373</div>
          <div className="card">374</div>
          <div className="card">375</div>
          <div className="card">376</div>
          <div className="card">377</div>
          <div className="card">378</div>
          <div className="card">379</div>
          <div className="card">380</div>
          <div className="card">381</div>
          <div className="card">382</div>
          <div className="card">383</div>
          <div className="card">384</div>
          <div className="card">385</div>
          <div className="card">386</div>
          <div className="card">387</div>
          <div className="card">388</div>
          <div className="card">389</div>
          <div className="card">390</div>
          <div className="card">391</div>
          <div className="card">392</div>
          <div className="card">393</div>
          <div className="card">394</div>
          <div className="card">395</div>
          <div className="card">396</div>
          <div className="card">397</div>
          <div className="card">398</div>
          <div className="card">399</div>
          <div className="card">400</div>
          <div className="card">401</div>
          <div className="card">402</div>
          <div className="card">403</div>
          <div className="card">404</div>
          <div className="card">405</div>
          <div className="card">406</div>
          <div className="card">407</div>
          <div className="card">408</div>
          <div className="card">409</div>
          <div className="card">410</div>
          <div className="card">411</div>
          <div className="card">412</div>
          <div className="card">413</div>
          <div className="card">414</div>
          <div className="card">415</div>
          <div className="card">416</div>
          <div className="card">417</div>
          <div className="card">418</div>
          <div className="card">419</div>
          <div className="card">420</div>
          <div className="card">421</div>
          <div className="card">422</div>
          <div className="card">423</div>
          <div className="card">424</div>
          <div className="card">425</div>
          <div className="card">426</div>
          <div className="card">427</div>
          <div className="card">428</div>
          <div className="card">429</div>
          <div className="card">430</div>
          <div className="card">431</div>
          <div className="card">432</div>
          <div className="card">433</div>
          <div className="card">434</div>
          <div className="card">435</div>
          <div className="card">436</div>
          <div className="card">437</div>
          <div className="card">438</div>
          <div className="card">439</div>
          <div className="card">440</div>
          <div className="card">441</div>
          <div className="card">442</div>
          <div className="card">443</div>
          <div className="card">444</div>
          <div className="card">445</div>
          <div className="card">446</div>
          <div className="card">447</div>
          <div className="card">448</div>
          <div className="card">449</div>
          <div className="card">450</div>
          <div className="card">451</div>
          <div className="card">452</div>
          <div className="card">453</div>
          <div className="card">454</div>
          <div className="card">455</div>
          <div className="card">456</div>
          <div className="card">457</div>
          <div className="card">458</div>
          <div className="card">459</div>
          <div className="card">460</div>
          <div className="card">461</div>
          <div className="card">462</div>
          <div className="card">463</div>
          <div className="card">464</div>
          <div className="card">465</div>
          <div className="card">466</div>
          <div className="card">467</div>
          <div className="card">468</div>
          <div className="card">469</div>
          <div className="card">470</div>
          <div className="card">471</div>
          <div className="card">472</div>
          <div className="card">473</div>
          <div className="card">474</div>
          <div className="card">475</div>
          <div className="card">476</div>
          <div className="card">477</div>
          <div className="card">478</div>
          <div className="card">479</div>
          <div className="card">480</div>
          <div className="card">481</div>
          <div className="card">482</div>
          <div className="card">483</div>
          <div className="card">484</div>
          <div className="card">485</div>
          <div className="card">486</div>
          <div className="card">487</div>
          <div className="card">488</div>
          <div className="card">489</div>
          <div className="card">490</div>
          <div className="card">491</div>
          <div className="card">492</div>
          <div className="card">493</div>
          <div className="card">494</div>
          <div className="card">495</div>
          <div className="card">496</div>
          <div className="card">497</div>
          <div className="card">498</div>
          <div className="card">499</div>
          <div className="card">500</div>
          <div className="card">501</div>
          <div className="card">502</div>
          <div className="card">503</div>
          <div className="card">504</div>
          <div className="card">505</div>
          <div className="card">506</div>
          <div className="card">507</div>
          <div className="card">508</div>
          <div className="card">509</div>
          <div className="card">510</div>
          <div className="card">511</div>
          <div className="card">512</div>
          <div className="card">513</div>
          <div className="card">514</div>
          <div className="card">515</div>
          <div className="card">516</div>
          <div className="card">517</div>
          <div className="card">518</div>
          <div className="card">519</div>
          <div className="card">520</div>
          <div className="card">521</div>
          <div className="card">522</div>
          <div className="card">523</div>
          <div className="card">524</div>
          <div className="card">525</div>
          <div className="card">526</div>
          <div className="card">527</div>
          <div className="card">528</div>
          <div className="card">529</div>
          <div className="card">530</div>
          <div className="card">531</div>
          <div className="card">532</div>
          <div className="card">533</div>
          <div className="card">534</div>
          <div className="card">535</div>
          <div className="card">536</div>
          <div className="card">537</div>
          <div className="card">538</div>
          <div className="card">539</div>
          <div className="card">540</div>
          <div className="card">541</div>
          <div className="card">542</div>
          <div className="card">543</div>
          <div className="card">544</div>
          <div className="card">545</div>
          <div className="card">546</div>
          <div className="card">547</div>
          <div className="card">548</div>
          <div className="card">549</div>
          <div className="card">550</div>
          <div className="card">551</div>
          <div className="card">552</div>
          <div className="card">553</div>
          <div className="card">554</div>
          <div className="card">555</div>
          <div className="card">556</div>
          <div className="card">557</div>
          <div className="card">558</div>
          <div className="card">559</div>
          <div className="card">560</div>
          <div className="card">561</div>
          <div className="card">562</div>
          <div className="card">563</div>
          <div className="card">564</div>
          <div className="card">565</div>
          <div className="card">566</div>
          <div className="card">567</div>
          <div className="card">568</div>
          <div className="card">569</div>
          <div className="card">570</div>
          <div className="card">571</div>
          <div className="card">572</div>
          <div className="card">573</div>
          <div className="card">574</div>
          <div className="card">575</div>
          <div className="card">576</div>
          <div className="card">577</div>
          <div className="card">578</div>
          <div className="card">579</div>
          <div className="card">580</div>
          <div className="card">581</div>
          <div className="card">582</div>
          <div className="card">583</div>
          <div className="card">584</div>
          <div className="card">585</div>
          <div className="card">586</div>
          <div className="card">587</div>
          <div className="card">588</div>
          <div className="card">589</div>
          <div className="card">590</div>
          <div className="card">591</div>
          <div className="card">592</div>
          <div className="card">593</div>
          <div className="card">594</div>
          <div className="card">595</div>
          <div className="card">596</div>
          <div className="card">597</div>
          <div className="card">598</div>
          <div className="card">599</div>
          <div className="card">600</div>
          <div className="card">601</div>
          <div className="card">602</div>
          <div className="card">603</div>
          <div className="card">604</div>
          <div className="card">605</div>
          <div className="card">606</div>
          <div className="card">607</div>
          <div className="card">608</div>
          <div className="card">609</div>
          <div className="card">610</div>
          <div className="card">611</div>
          <div className="card">612</div>
          <div className="card">613</div>
          <div className="card">614</div>
          <div className="card">615</div>
          <div className="card">616</div>
          <div className="card">617</div>
          <div className="card">618</div>
          <div className="card">619</div>
          <div className="card">620</div>
          <div className="card">621</div>
          <div className="card">622</div>
          <div className="card">623</div>
          <div className="card">624</div>
          <div className="card">625</div>
          <div className="card">626</div>
          <div className="card">627</div>
          <div className="card">628</div>
          <div className="card">629</div>
          <div className="card">630</div>
          <div className="card">631</div>
          <div className="card">632</div>
          <div className="card">633</div>
          <div className="card">634</div>
          <div className="card">635</div>
          <div className="card">636</div>
          <div className="card">637</div>
          <div className="card">638</div>
          <div className="card">639</div>
          <div className="card">640</div>
          <div className="card">641</div>
          <div className="card">642</div>
          <div className="card">643</div>
          <div className="card">644</div>
          <div className="card">645</div>
          <div className="card">646</div>
          <div className="card">647</div>
          <div className="card">648</div>
          <div className="card">649</div>
          <div className="card">650</div>
          <div className="card">651</div>
          <div className="card">652</div>
          <div className="card">653</div>
          <div className="card">654</div>
          <div className="card">655</div>
          <div className="card">656</div>
          <div className="card">657</div>
          <div className="card">658</div>
          <div className="card">659</div>
          <div className="card">660</div>
          <div className="card">661</div>
          <div className="card">662</div>
          <div className="card">663</div>
          <div className="card">664</div>
          <div className="card">665</div>
          <div className="card">666</div>
          <div className="card">667</div>
          <div className="card">668</div>
          <div className="card">669</div>
          <div className="card">670</div>
          <div className="card">671</div>
          <div className="card">672</div>
          <div className="card">673</div>
          <div className="card">674</div>
          <div className="card">675</div>
          <div className="card">676</div>
          <div className="card">677</div>
          <div className="card">678</div>
          <div className="card">679</div>
          <div className="card">680</div>
          <div className="card">681</div>
          <div className="card">682</div>
          <div className="card">683</div>
          <div className="card">684</div>
          <div className="card">685</div>
          <div className="card">686</div>
          <div className="card">687</div>
          <div className="card">688</div>
          <div className="card">689</div>
          <div className="card">690</div>
          <div className="card">691</div>
          <div className="card">692</div>
          <div className="card">693</div>
          <div className="card">694</div>
          <div className="card">695</div>
          <div className="card">696</div>
          <div className="card">697</div>
          <div className="card">698</div>
          <div className="card">699</div>
          <div className="card">700</div>
          <div className="card">701</div>
          <div className="card">702</div>
          <div className="card">703</div>
          <div className="card">704</div>
          <div className="card">705</div>
          <div className="card">706</div>
          <div className="card">707</div>
          <div className="card">708</div>
          <div className="card">709</div>
          <div className="card">710</div>
          <div className="card">711</div>
          <div className="card">712</div>
          <div className="card">713</div>
          <div className="card">714</div>
          <div className="card">715</div>
          <div className="card">716</div>
          <div className="card">717</div>
          <div className="card">718</div>
          <div className="card">719</div>
          <div className="card">720</div>
          <div className="card">721</div>
          <div className="card">722</div>
          <div className="card">723</div>
          <div className="card">724</div>
          <div className="card">725</div>
          <div className="card">726</div>
          <div className="card">727</div>
          <div className="card">728</div>
          <div className="card">729</div>
          <div className="card">730</div>
          <div className="card">731</div>
          <div className="card">732</div>
          <div className="card">733</div>
          <div className="card">734</div>
          <div className="card">735</div>
          <div className="card">736</div>
          <div className="card">737</div>
          <div className="card">738</div>
          <div className="card">739</div>
          <div className="card">740</div>
          <div className="card">741</div>
          <div className="card">742</div>
          <div className="card">743</div>
          <div className="card">744</div>
          <div className="card">745</div>
          <div className="card">746</div>
          <div className="card">747</div>
          <div className="card">748</div>
          <div className="card">749</div>
          <div className="card">750</div>
          <div className="card">751</div>
          <div className="card">752</div>
          <div className="card">753</div>
          <div className="card">754</div>
          <div className="card">755</div>
          <div className="card">756</div>
          <div className="card">757</div>
          <div className="card">758</div>
          <div className="card">759</div>
          <div className="card">760</div>
          <div className="card">761</div>
          <div className="card">762</div>
          <div className="card">763</div>
          <div className="card">764</div>
          <div className="card">765</div>
          <div className="card">766</div>
          <div className="card">767</div>
          <div className="card">768</div>
          <div className="card">769</div>
          <div className="card">770</div>
          <div className="card">771</div>
          <div className="card">772</div>
          <div className="card">773</div>
          <div className="card">774</div>
          <div className="card">775</div>
          <div className="card">776</div>
          <div className="card">777</div>
          <div className="card">778</div>
          <div className="card">779</div>
          <div className="card">780</div>
          <div className="card">781</div>
          <div className="card">782</div>
          <div className="card">783</div>
          <div className="card">784</div>
          <div className="card">785</div>
          <div className="card">786</div>
          <div className="card">787</div>
          <div className="card">788</div>
          <div className="card">789</div>
          <div className="card">790</div>
          <div className="card">791</div>
          <div className="card">792</div>
          <div className="card">793</div>
          <div className="card">794</div>
          <div className="card">795</div>
          <div className="card">796</div>
          <div className="card">797</div>
          <div className="card">798</div>
          <div className="card">799</div>
          <div className="card">800</div>
          <div className="card">801</div>
          <div className="card">802</div>
          <div className="card">803</div>
          <div className="card">804</div>
          <div className="card">805</div>
          <div className="card">806</div>
          <div className="card">807</div>
          <div className="card">808</div>
          <div className="card">809</div>
          <div className="card">810</div>
          <div className="card">811</div>
          <div className="card">812</div>
          <div className="card">813</div>
          <div className="card">814</div>
          <div className="card">815</div>
          <div className="card">816</div>
          <div className="card">817</div>
          <div className="card">818</div>
          <div className="card">819</div>
          <div className="card">820</div>
          <div className="card">821</div>
          <div className="card">822</div>
          <div className="card">823</div>
          <div className="card">824</div>
          <div className="card">825</div>
          <div className="card">826</div>
          <div className="card">827</div>
          <div className="card">828</div>
          <div className="card">829</div>
          <div className="card">830</div>
          <div className="card">831</div>
          <div className="card">832</div>
          <div className="card">833</div>
          <div className="card">834</div>
          <div className="card">835</div>
          <div className="card">836</div>
          <div className="card">837</div>
          <div className="card">838</div>
          <div className="card">839</div>
          <div className="card">840</div>
          <div className="card">841</div>
          <div className="card">842</div>
          <div className="card">843</div>
          <div className="card">844</div>
          <div className="card">845</div>
          <div className="card">846</div>
          <div className="card">847</div>
          <div className="card">848</div>
          <div className="card">849</div>
          <div className="card">850</div>
          <div className="card">851</div>
          <div className="card">852</div>
          <div className="card">853</div>
          <div className="card">854</div>
          <div className="card">855</div>
          <div className="card">856</div>
          <div className="card">857</div>
          <div className="card">858</div>
          <div className="card">859</div>
          <div className="card">860</div>
          <div className="card">861</div>
          <div className="card">862</div>
          <div className="card">863</div>
          <div className="card">864</div>
          <div className="card">865</div>
          <div className="card">866</div>
          <div className="card">867</div>
          <div className="card">868</div>
          <div className="card">869</div>
          <div className="card">870</div>
          <div className="card">871</div>
          <div className="card">872</div>
          <div className="card">873</div>
          <div className="card">874</div>
          <div className="card">875</div>
          <div className="card">876</div>
          <div className="card">877</div>
          <div className="card">878</div>
          <div className="card">879</div>
          <div className="card">880</div>
          <div className="card">881</div>
          <div className="card">882</div>
          <div className="card">883</div>
          <div className="card">884</div>
          <div className="card">885</div>
          <div className="card">886</div>
          <div className="card">887</div>
          <div className="card">888</div>
          <div className="card">889</div>
          <div className="card">890</div>
          <div className="card">891</div>
          <div className="card">892</div>
          <div className="card">893</div>
          <div className="card">894</div>
          <div className="card">895</div>
          <div className="card">896</div>
          <div className="card">897</div>
          <div className="card">898</div>
          <div className="card">899</div>
          <div className="card">900</div>
          <div className="card">901</div>
          <div className="card">902</div>
          <div className="card">903</div>
          <div className="card">904</div>
          <div className="card">905</div>
          <div className="card">906</div>
          <div className="card">907</div>
          <div className="card">908</div>
          <div className="card">909</div>
          <div className="card">910</div>
          <div className="card">911</div>
          <div className="card">912</div>
          <div className="card">913</div>
          <div className="card">914</div>
          <div className="card">915</div>
          <div className="card">916</div>
          <div className="card">917</div>
          <div className="card">918</div>
          <div className="card">919</div>
          <div className="card">920</div>
          <div className="card">921</div>
          <div className="card">922</div>
          <div className="card">923</div>
          <div className="card">924</div>
          <div className="card">925</div>
          <div className="card">926</div>
          <div className="card">927</div>
          <div className="card">928</div>
          <div className="card">929</div>
          <div className="card">930</div>
          <div className="card">931</div>
          <div className="card">932</div>
          <div className="card">933</div>
          <div className="card">934</div>
          <div className="card">935</div>
          <div className="card">936</div>
          <div className="card">937</div>
          <div className="card">938</div>
          <div className="card">939</div>
          <div className="card">940</div>
          <div className="card">941</div>
          <div className="card">942</div>
          <div className="card">943</div>
          <div className="card">944</div>
          <div className="card">945</div>
          <div className="card">946</div>
          <div className="card">947</div>
          <div className="card">948</div>
          <div className="card">949</div>
          <div className="card">950</div>
          <div className="card">951</div>
          <div className="card">952</div>
          <div className="card">953</div>
          <div className="card">954</div>
          <div className="card">955</div>
          <div className="card">956</div>
          <div className="card">957</div>
          <div className="card">958</div>
          <div className="card">959</div>
          <div className="card">960</div>
          <div className="card">961</div>
          <div className="card">962</div>
          <div className="card">963</div>
          <div className="card">964</div>
          <div className="card">965</div>
          <div className="card">966</div>
          <div className="card">967</div>
          <div className="card">968</div>
          <div className="card">969</div>
          <div className="card">970</div>
          <div className="card">971</div>
          <div className="card">972</div>
          <div className="card">973</div>
          <div className="card">974</div>
          <div className="card">975</div>
          <div className="card">976</div>
          <div className="card">977</div>
          <div className="card">978</div>
          <div className="card">979</div>
          <div className="card">980</div>
          <div className="card">981</div>
          <div className="card">982</div>
          <div className="card">983</div>
          <div className="card">984</div>
          <div className="card">985</div>
          <div className="card">986</div>
          <div className="card">987</div>
          <div className="card">988</div>
          <div className="card">989</div>
          <div className="card">990</div>
          <div className="card">991</div>
          <div className="card">992</div>
          <div className="card">993</div>
          <div className="card">994</div>
          <div className="card">995</div>
          <div className="card">996</div>
          <div className="card">997</div>
          <div className="card">998</div>
          <div className="card">999</div>
          <div className="card">1000</div>
        </div>
>>>>>>> 3c2f5aca460a737effcd7d0409e084b64244a2ee
      </div>
    );
  }
}
export default AttackGrid;
