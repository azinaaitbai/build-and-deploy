const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

bar.onclick = () => {
  nav.classList.toggle("active"); // Toggle the 'active' class on navbar
};

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active"); // Close the navigation when close button is clicked
  });
}

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}
