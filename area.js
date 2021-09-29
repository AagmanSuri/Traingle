const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

const calculateArea = () => {
  const a = Number(base.value);
  const b = Number(height.value);
  const area = 0.5 * (a * b);
  output.innerText = "Area is  : " + area;
  console.log("cl");
};

btn.addEventListener("click", calculateArea);
