import "./styles.css";

// TODO: Bruk getElementById til å hente HTML-elementene med #id
let main = document.getElementById("main");
let desc = document.getElementById("desc");
let guess = document.getElementById("guess");
let numbers = document.getElementById("numbers");

// TODO: Bruk querySelector til å hente knappen
let button = document.querySelector("button");
// ^ denne kan også være main

// TODO: Lag en liste med tallene som skal sorteres
let numberToSort = [4, 10, 24, 5, 11, 9, 5, 6, 4];

// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
function writeNumbers() {
  numberToSort.forEach((element) => {
    numbers.innerHTML += `${element} `;
  });
}

// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
function makeInput() {
  let inputForUser = document.createElement("input");
  inputForUser.type = "text";
  inputForUser.id = "inputFromUser";
  main.appendChild(inputForUser);
}

// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
function meme() {
  let inputFromUser = document.getElementById("inputFromUser");
  inputFromUser.addEventListener("keyup", (event) => {
    console.log(event.target.value);
  });
}

// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
function checkNumberSeq() {
  let inputFromUser = document.getElementById("inputFromUser");

  let correctAnswer = numberToSort.sort(function (a, b) {
    return a - b;
  });

  if (correctAnswer.join(" ") === inputFromUser.value)
    console.log("Flink erru");
  else console.log("Feil sortering");
}

// TODO: Lag en funksjon som "lager UI" --Nødvendig?
function makeUI() {
  writeNumbers();
  makeInput();
}

makeUI();

// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk
button.addEventListener("click", checkNumberSeq);
