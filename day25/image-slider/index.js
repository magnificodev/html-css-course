var forwardBtn = document.querySelector("button#forward-btn");
var backwardBtn = document.querySelector("button#backward-btn");
var container = document.querySelector(".container");
var imageBox = document.querySelector(".image-box");
var images = document.querySelectorAll("img");

var imageIndex = 1,
  intervalId;

const autoSlide = () => {
  intervalId = setInterval(() => {
    imageIndex++;
    slideImage();
  }, 2000);
};
autoSlide();

const slideImage = () => {
  imageIndex =
    imageIndex === images.length
      ? 0
      : imageIndex < 0
      ? images.length - 1
      : imageIndex;
  imageBox.style.transform = `translateX(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
  console.log(e.target.id)
  clearInterval(intervalId);
  imageIndex += e.target.id == "forward-btn" ? 1 : -1;
  slideImage(imageIndex);
  autoSlide();
};

forwardBtn.addEventListener("click", updateClick)
backwardBtn.addEventListener("click", updateClick)

container.addEventListener("mouseover", () => clearInterval(intervalId));
container.addEventListener("mouseleave", autoSlide);
