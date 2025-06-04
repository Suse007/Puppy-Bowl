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

// //section 3
const renderpuppiesList = () => {
  console.log(state.puppies);
  const $app = document.querySelector("#app");
  const $puppiesList = document.createElement("ul");
  state.puppies.forEach((puppy) => {
    // this line i can see everything i need
    // console.log(puppy);
    const li = document.createElement(`li`);
    li.addEventListener(`click`, async () => {
      //   li.innerText = puppy.name; this line everytime i click on a name of a puppy , the pic disapear
      console.log(puppy.name);
    });

    li.innerText = puppy.name;
    const img = document.createElement("img");
    img.classList.add("imgclass");
    img.src = puppy.imageUrl;
    li.appendChild(img);
    img.style.width = "10%";
    img.style.height = "auto";
    img.style.padding = "20px";
    li.style.border = "1px dashed black";
    li.style.listStyleType = "none";

    li.addEventListener(`click`, async () => {
      //   li.innerText = puppy.name; this line everytime i click on a name of a puppy , the pic disapear
      //   console.log(puppy.name);
    });
    // click on the name get me player details
    //     player details is :
    //     {
    //   "name": "Crumpet",
    //   "breed": "American Staffordshire Terrier",
    //   "status": "bench",
    //   "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Crumpet-PBXVI.jpg",
    //   "teamId": 456
    // }
    // console.log(li);
    $puppiesList.appendChild(li);
    $app.appendChild($puppiesList);
  });

  $app.appendChild($puppiesList);
  //   console.log($app);
  //   return $puppiesList;
};
