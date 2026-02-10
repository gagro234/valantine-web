let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.add("hidden");
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.remove("hidden");
}

function moveNo(btn) {
  btn.style.top = Math.random() * 300 + "px";
  btn.style.left = Math.random() * 300 + "px";
}

function yesClick() {
  alert("YAY 💖 I knew it!");
}