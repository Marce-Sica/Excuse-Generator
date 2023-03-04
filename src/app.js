/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excusa = () => {
  let excuse = document.querySelector("#excuse");
  excuse.innerHTML = "This is an excuse";

  let who = ["The horse", "His rabbit", "My mother", "My parrot"];

  let randomWho = Math.floor(Math.random() * who.length);
  console.log("whose excuse", who[randomWho]);

  let what = ["broke", "eat", "took", "crushed"];

  let randomWhat = Math.floor(Math.random() * what.length);
  console.log("excuse that", what[randomWhat]);

  let when = [
    "during my dinner",
    "before the class",
    "right in time",
    "when I finished",
    "while I was praying"
  ];

  let randomWhen = Math.floor(Math.random() * when.length);
  console.log("excuse from where", when[randomWhen]);

  excuse.innerHTML = "<h1>" + who[randomWho] + "</h1>";
  excuse.innerHTML = "<h1>" + what[randomWhat] + "</h1>";
  excuse.innerHTML = "<h1>" + when[randomWhen] + "</h1>";
  excuse.innerHTML =
    "<h1>" +
    who[randomWho] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen] +
    "</h1>";
};

window.onload = function() {
  excusa();
};
