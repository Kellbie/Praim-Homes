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

  document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('wildlife-btn');
    const span = document.querySelector('.wildlife-text');
  
    button.addEventListener('click', function() {
      button.style.display = 'none';
      span.style.display = 'block';
    });
  });




  document.getElementById('wildlife-btn-less').addEventListener('click', function() {
    var wildlifeText = document.querySelector('.wildlife-text');
    wildlifeText.style.display = 'none';

    var displayBtn = document.getElementById('wildlife-btn');
    displayBtn.style.display = 'block';
  });


  document.getElementById('comfort-btn').addEventListener('click', function() {
    var comfortText = document.querySelector('.comfort-text');
    comfortText.style.display = 'block';

    var comfortBtn = document.getElementById('comfort-btn');
    comfortBtn.style.display = 'none';
  });