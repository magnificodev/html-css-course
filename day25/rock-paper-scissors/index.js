var userSelectsEl = document.querySelectorAll(".option");
var resultImgs = document.querySelectorAll(".result img");
var messageEl = document.querySelector(".message");
var selectBox = document.querySelector(".selection");

const options = ["rock", "paper", "scissors"];
var user = "",
  computer = "";

function selectOption(e) {
  userSelectsEl.forEach((option) => option.classList.remove("checked"));
  userSelection = e.currentTarget.className.replace("option", "").trim();
  e.currentTarget.classList.add("checked");
  return userSelection;
}

function randomOption() {
  return options[Math.floor(Math.random() * options.length)];
}

function updateMessage(msg) {
  messageEl.innerHTML = msg;
}

function updateImage(userImg, comImg) {
  let userBox = document.querySelector(".result.user img");
  let comBox = document.querySelector(".result.computer img");
  if (userImg === "paper") {
    userBox.src = "./images/paper.png"
  }
  else if (userImg === "rock") {
    userBox.src = "./images/rock.png"
  }
  else {
    userBox.src = "./images/scissors.png"
  }

  if (comImg === "paper") {
    comBox.src = "./images/paper.png"
  }
  else if (comImg === "rock") {
    comBox.src = "./images/rock.png"
  }
  else {
    comBox.src = "./images/scissors.png"
  }
}

function wait(e) {
  updateMessage("Wait...");
  resultImgs.forEach((img) => {
    img.src = "./images/rock.png";
    selectBox.style.pointerEvents = "none";
    img.style.animation = "upDown 0.7s infinite";
  });
  return [selectOption(e), randomOption()];
}

function compare(userSel, comSel) {
  if (userSel === "rock") {
    if (comSel === "paper") return "Cpu Won!!";
    else if (comSel === "scissors") return "User Won!!";
    else return "Match Draw";
  } else if (userSel === "paper") {
    if (comSel === "scissors") return "Cpu Won!!";
    else if (comSel === "rock") return "User Won!!";
    else return "Match Draw";
  } else if (userSel === "scissors") {
    if (comSel === "rock") return "Cpu Won!!";
    else if (comSel === "paper") return "User Won!!";
    else return "Match Draw";
  }
}

userSelectsEl.forEach((option) =>
  option.addEventListener("click", (e) => {
    var [user, computer] = wait(e);
    console.log("User: ", user, ", Computer: ", computer);
    setTimeout(() => {
      resultImgs.forEach((img) => (img.style.animation = "none"));
      selectBox.style.pointerEvents = "unset";
      updateMessage(compare(user, computer));
      updateImage(user, computer);
    }, 2000);
  })
);
