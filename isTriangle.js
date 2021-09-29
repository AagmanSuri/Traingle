angleInputs = document.querySelectorAll(".angle-input");
isTriangleBtn = document.querySelector("#isTriangleBtn");
Number(angleInputs[0].value), (output = document.querySelector("#output"));
const calculateSum = (a, b, c) => {
  var sum = a + b + c;
  return sum;
};
isTriangleBtn.addEventListener("click", () => {
  const sum = calculateSum(
    Number(angleInputs[0].value),
    Number(angleInputs[1].value),
    Number(angleInputs[2].value)
  );
  if (sum === 180) {
    output.innerText = "triangles can be formed";
  } else {
    output.innerText = "triangles can not be formed";
  }
});
