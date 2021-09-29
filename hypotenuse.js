const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

const calculateHypotenuse = () => {
  const a = Number(side1.value);

  const b = Number(side2.value);
  const aSquare = a * a;
  const bSquare = b * b;
  const lengthOfHypotenuse = Math.sqrt(aSquare + bSquare);
  output.innerText = "The length of Hypotenuse is : " + lengthOfHypotenuse;
};

btn.addEventListener("click", calculateHypotenuse);
