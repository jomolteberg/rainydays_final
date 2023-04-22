const searchButton = document.getElementById('search-button');
const closeButton = document.getElementById('close-button');
const searchPopup = document.getElementById('search-popup');
const popupSearchInput = document.getElementById('popup-search-input');

searchButton.addEventListener('click', function() {
    searchPopup.style.display = 'block';
    searchPopup.style.position = 'absolute';
    searchPopup.style.top = '0';
    searchPopup.style.transition = 'all 0.3s ease-in-out';
 
  const mediaQuery = window.matchMedia('(max-width: 800px)');

  if (mediaQuery.matches) {
    searchPopup.style.top = '43px';
  } else {
    searchPopup.style.top = '0';
  }

  if (mediaQuery.matches) {
    searchPopup.style.left = '-255px';
  } else {
    searchPopup.style.left = '0';
  }
});

closeButton.addEventListener('click', function() {
  searchPopup.style.display = 'none';
});


