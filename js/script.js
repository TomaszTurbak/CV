let button = document.querySelector(".js-button");
let photo = document.querySelector(".js-photo");

button.addEventListener("click", () => {
  photo.remove();
});
