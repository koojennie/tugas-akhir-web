hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    hamburger.classList.toggle("active");
}

const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');

      const infoBox = button.nextElementSibling;

      if (infoBox.classList.contains('hidden')) {
        infoBox.classList.remove('hidden');
        infoBox.classList.add('visible');
      } else {
        infoBox.classList.add('hidden');
        infoBox.classList.remove('visible');
      }
    });
  });
