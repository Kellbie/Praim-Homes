let isInteracted = false;

function startAutoScroll() {
  if (!isInteracted) {
    isInteracted = true;
    setInterval(() => {
      const carousel = document.querySelector(".carousel");
      const firstItem = carousel.firstElementChild;
      carousel.style.transition = "transform 0.5s ease";
      carousel.style.transform = "translateX(-100%)";
      carousel.appendChild(firstItem);
    }, 2000); // Adjust the time interval as needed
  }
}
