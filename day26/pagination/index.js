// VARIABLES
const pageList = document.querySelectorAll(".pages .pageNum");
const moveLeft = document.querySelector(".move-left");
const moveRight = document.querySelector(".move-right");
const startBtn = document.querySelector(".button.start-btn");
const endBtn = document.querySelector(".button.end-btn");
var currentPage = 1;

// FUNCTIONS
function uncheck() {
  pageList.forEach((pageNum) => pageNum.classList.remove("active"));
}

function check(index) {
  uncheck();
  console.log(index)
  pageList[index - 1].classList.add("active");
}

function updateButtons() {
  if (currentPage === 1) {
    moveLeft.disabled = true;
    startBtn.disabled = true;
    moveRight.disabled = false;
    endBtn.disabled = false;
  }
  else if (currentPage === 5) {
    moveLeft.disabled = false;
    startBtn.disabled = false;
    moveRight.disabled = true;
    endBtn.disabled = true;
  }
}
updateButtons();

// EVENT LISTENER
pageList.forEach((pageNum) =>
  pageNum.addEventListener("click", (e) => {
    currentPage = e.currentTarget.dataset.id;
    check(e.currentTarget.dataset.id);
    updateButtons();
  })
);

moveLeft.addEventListener("click", () => {
  if (currentPage > 1) check(--currentPage);
  updateButtons();
});

moveRight.addEventListener("click", () => {
  if (currentPage < 5) check(++currentPage);
  updateButtons();
});

startBtn.addEventListener("click", () => {
  check((currentPage = 1));
});

endBtn.addEventListener("click", () => {
  check((currentPage = 5));
});
