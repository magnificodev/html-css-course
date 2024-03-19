const toggleBtn = document.querySelector(".toggle")
const socialList = document.querySelector(".social-list")



// EVENT LISTENERS
toggleBtn.addEventListener("click", () => {
  if (toggleBtn.className.includes("closed")) {
    toggleBtn.classList.remove("closed");
    socialList.style.left = 0;
  }
  else {
    toggleBtn.classList.add("closed")
    socialList.style.left = "-200px";
  }
})