// === Constants ===
const BASE = "https://fsa-puppy-bowl.herokuapp.com/api";
const COHORT = "/2505-ftb-et-web-ft-ASEEL";
const PLAYERS = "/Players";

const API = BASE + COHORT + PLAYERS;
let state = {
  puppies: [],
  puppiesDetails: {},
};
const $app = document.querySelector(`#app`);
const getpuppies = async () => {
  const response = await fetch(API);
  //   console.log(response);
  const responseJs = await response.json();
  //   console.log(responseJs);
  state.puppies = responseJs.data.players;

  renderpuppiesList();
};

getpuppies();

// ///section4
const getPuppiesDetails = async (puppy) => {
  //   const response = await fetch(puppy);
};

//   return $puppiesList;
// }
// add an event listener for when the user clicks on the li

// //section 3
const renderpuppiesList = () => {
  const $puppiesList = document.createElement("ul");
  state.puppies.forEach((puppy) => {
    // this line i can see everything i need
    console.log(puppy);
    const li = document.createElement(`li`);
    li.addEventListener(`click`, async () => {});
    li.innerText = puppy.name;
    // console.log(li);
    $puppiesList.appendChild(li);
  });
  console.log($puppiesList);

  $app.appendChild($puppiesList);
  //   return $puppiesList;
};
