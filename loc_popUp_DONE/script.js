window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("openPopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
});

