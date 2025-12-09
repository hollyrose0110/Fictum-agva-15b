document.addEventListener("DOMContentLoaded", function () {
  const hideButton = document.getElementById("hide-offers-btn");
  const specialOffers = document.querySelector(".features");

  hideButton.addEventListener("click", function () {
    if (specialOffers.style.display === "none") {
      specialOffers.style.display = "flex"; 
      hideButton.textContent = "Hide Special Offers"; 
    } else {
      specialOffers.style.display = "none"; 
      hideButton.textContent = "Show Special Offers"; 
    }
  });
});
