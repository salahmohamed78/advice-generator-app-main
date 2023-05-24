import { fetchData, getAdvice, render } from "./lib.js";

const btn = document.querySelector(".btn");

function generateAdvice() {
  getAdvice().then((dataObj) => {
    console.log(dataObj);
    render(".title", `ADVICE #${dataObj.id}`);
    render(".advice", dataObj.advice);
  });
}

generateAdvice();
btn.addEventListener("click", generateAdvice);
