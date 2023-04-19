const searchButton = document.getElementById('search-button');
const closeButton = document.getElementById('close-button');
const searchPopup = document.getElementById('search-popup');
const popupSearchInput = document.getElementById('popup-search-input');

searchButton.addEventListener('click', function() {
    searchPopup.style.display = 'block';
    searchPopup.style.position = 'absolute';
    searchPopup.style.top = '100%';
    searchPopup.style.left = '0';
  });

closeButton.addEventListener('click', function() {
  searchPopup.style.display = 'none';
});

popupSearchInput.addEventListener('input', function() {
  const searchText = popupSearchInput.value.toLowerCase();
  // Perform the search functionality here
});
