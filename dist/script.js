const items = {
  titles: [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
  ],
  articles: [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  ],
  mobileImages: [
    "./images/mobile-image-hero-1.jpg",
    "./images/mobile-image-hero-2.jpg",
    "./images/mobile-image-hero-3.jpg"
  ],
  desktopImages: [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg"
  ]
};

let width = window.innerWidth;

window.addEventListener("resize", () => {
  width = this.innerWidth;
});

const leftTrigger = document.getElementById("leftArrow");
const rightTrigger = document.getElementById("rightArrow");
const header = document.getElementById("header");

let index = 0;

let interval = setInterval(() => {
  nextItem();
}, 5000);

const nextItem = () => {
  index = index < items.titles.length - 1 ? index + 1 : 0;
  document.getElementById("title").innerHTML = items.titles[index];
  document.getElementById("article").innerHTML = items.articles[index];
  header.style.backgroundImage = `url(${
    width < 500 ? items.mobileImages[index] : items.desktopImages[index]
  })`;
};
const prevItem = () => {
  index = index > 0 ? index - 1 : items.titles.length - 1;
  document.getElementById("title").innerHTML = items.titles[index];
  document.getElementById("article").innerHTML = items.articles[index];
  header.style.backgroundImage = `url(${
    width < 500 ? items.mobileImages[index] : items.desktopImages[index]
  })`;
};

const handleNext = () => {
  clearInterval(interval);
  nextItem();
  interval = setInterval(() => {
    nextItem();
  }, 5000);
};

const handlePrev = () => {
  clearInterval(interval);
  prevItem();
  interval = setInterval(() => {
    nextItem();
  }, 5000);
};

rightTrigger.onclick = handleNext;

leftTrigger.onclick = handlePrev

document.getElementById('grid-box-two').addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    handlePrev()
  } else if (e.deltaY > 0) {
    handleNext()
  }
});
