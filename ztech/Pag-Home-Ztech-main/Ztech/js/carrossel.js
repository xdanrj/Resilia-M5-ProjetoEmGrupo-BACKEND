const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

function showCurrentItem() {
  items.forEach((item) => item.classList.remove("current-item"));

  items[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth",
      block: "nearest"
  });

  items[currentItem].classList.add("current-item");
}

function nextItem() {
  currentItem += 1;

  if (currentItem >= maxItems) {
      currentItem = 0;
  }

  showCurrentItem();
}

function prevItem() {
  currentItem -= 1;

  if (currentItem < 0) {
      currentItem = maxItems - 1;
  }

  showCurrentItem();
}

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      prevItem();
    } else {
      nextItem();
    }
  });
});

setInterval(() => {
  nextItem();
}, 3000); // Troca de imagem a cada 1 segundo (1000 milissegundos)