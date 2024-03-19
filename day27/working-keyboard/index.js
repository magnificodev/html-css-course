const inputKeys = document.querySelectorAll("input");
const screen = document.querySelector(".screen");


inputKeys.forEach(key => key.addEventListener("click", (e) => {
  let value = e.currentTarget.value === "SPACE" ? " " : e.currentTarget.value;
  let html = screen.innerHTML;
  screen.innerHTML = `${html}${String(value).toLowerCase()}`
}))