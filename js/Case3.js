const boxes = document.querySelectorAll(".box");
const themeAudio = new Audio("/assets/audio/Knight-Rider-Theme-Song.mp3");
themeAudio.loop = true;
themeAudio.volume = 0.2;

let index = 0;
let forward = true;
let kittAnimation;

function resetClasses() {
  boxes.forEach((box) => {
    box.classList.remove(
      "active-light",
      "secondary-light",
      "tertiary-light",
      "faint-light",
      "faintest-light"
    );
  });
}

function applyForwardColors(index) {
  resetClasses();
  boxes[index].classList.add("active-light");
  if (boxes[index - 1]) boxes[index - 1].classList.add("secondary-light");
  if (boxes[index - 2]) boxes[index - 2].classList.add("tertiary-light");
  if (boxes[index - 3]) boxes[index - 3].classList.add("faint-light");
  if (boxes[index - 4]) boxes[index - 4].classList.add("faintest-light");
}

function applyBackwardColors(index) {
  resetClasses();
  boxes[index].classList.add("active-light");
  if (boxes[index + 1]) boxes[index + 1].classList.add("secondary-light");
  if (boxes[index + 2]) boxes[index + 2].classList.add("tertiary-light");
  if (boxes[index + 3]) boxes[index + 3].classList.add("faint-light");
  if (boxes[index + 4]) boxes[index + 4].classList.add("faintest-light");
}

function startAnimation() {
  themeAudio.play();
  if (!kittAnimation) {
    kittAnimation = setInterval(() => {
      if (forward) {
        applyForwardColors(index);
        index++;
        if (index >= boxes.length - 1) {
          forward = false;
        }
      } else {
        applyBackwardColors(index);
        index--;
        if (index <= 0) {
          forward = true;
        }
      }
    }, 64); 
  }
}

function stopAnimation() {
  themeAudio.pause();
  clearInterval(kittAnimation);
  kittAnimation = null;
}

document.getElementById("start").addEventListener("click", startAnimation);
document.getElementById("stop").addEventListener("click", stopAnimation);