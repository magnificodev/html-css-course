const inputBtn = document.querySelectorAll("input[type='button']:not(.result)");
const calBtn = document.querySelector(".result");
const screen = document.querySelector(".screen");
var expression = "";


// EVENT LISTENERS
inputBtn.forEach(value => value.addEventListener("click", (e) => {
  expression += e.currentTarget.value;
  screen.innerHTML = `${expression}`
}))

calBtn.addEventListener("click", () => {
  screen.innerHTML = `${eval(expression)}`
  expression = "";
})