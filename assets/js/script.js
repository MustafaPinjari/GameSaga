'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// Script for card
  document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', () => {
          const gameUrl = button.getAttribute('data-url');
          window.location.href = `gamePage.html?game=${encodeURIComponent(gameUrl)}`;
      });
  });



  function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}



//  Script for playing game in frame 
window.onload = function() {
  const gameUrl = getParameterByName('game');
  const iframe = document.getElementById('gameFrame');
  const fallbackVideo = document.getElementById('fallbackVideo');

  if (gameUrl) {
    try {
      iframe.src = decodeURIComponent(gameUrl);
      iframe.onload = () => {
        console.log(`Game loaded: ${iframe.src}`);
        setupGameControls(); // Call the function to set up game controls
      };
      iframe.onerror = () => {
        console.error('Error loading game URL.');
        fallbackVideo.style.display = 'block';
        iframe.style.display = 'none';
      };
    } catch (e) {
      console.error('Error decoding game URL:', e);
      fallbackVideo.style.display = 'block';
      iframe.style.display = 'none';
    }
  } else {
    fallbackVideo.style.display = 'block';
    iframe.style.display = 'none';
  }

  function setupGameControls() {
    document.getElementById('fullscreenBtn').addEventListener('click', function() {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
      }
    });

    document.getElementById('reloadBtn').addEventListener('click', function() {
      iframe.src = iframe.src; // Reloads the iframe
    });
  }
};

// Function to get URL parameters
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
