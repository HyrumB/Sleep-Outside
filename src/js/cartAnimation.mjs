export function cartAnimation() {
  const cartImage = document.getElementById("cart-svg");
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
