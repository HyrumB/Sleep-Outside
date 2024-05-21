const cartImage = document.querySelector("div.cart svg");

export function cartAnimation() {
  let angle = 5;
  const wiggleInterval = setInterval(() => {
    cartImage.style.transform = `rotate(${angle}deg)`;
    angle = -angle;
  }, 100);

  setTimeout(() => {
    clearInterval(wiggleInterval);
    cartImage.style.transform = "rotate(0deg)";
  }, 500);
}
