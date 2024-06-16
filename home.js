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

const toggleButton = document.getElementById('toggleButton');
  const underLastDiv = document.querySelector('.under-last');

  // Add event listener to the button
  toggleButton.addEventListener('click', function() {
    // Toggle display of the button itself
    toggleButton.style.display = 'none';
    
    // Toggle display of the div with class 'under-last'
    underLastDiv.style.display = 'block';
  });