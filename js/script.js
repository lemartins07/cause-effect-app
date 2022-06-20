console.log('teste');

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const closeButton = document.querySelector('.close-button');
const formSearch = document.querySelector('.form-search-top');

function handleSubmit(event) {
  event.preventDefault();
  console.log('submit');
}

function handleFocus() {
  formSearch.style.width = '245px';
  formSearch.style.borderColor = '#c7b700';
  closeButton.style.display = 'block';
  searchInput.style.width = '100%';
  searchInput.style.caretColor = 'transparent';
  searchInput.style.animation = 'blink 2s step-end infinite';
}

function handleBlur() {
  if (searchInput.value === '') {
    formSearch.style.width = '80px';
    searchInput.style.width = '40px';
    closeButton.style.display = 'none';
    formSearch.style.borderColor = '#858585';
    searchInput.classList.add('thickness');
    searchInput.style.textDecorationLine = 'underline';
    searchInput.style.animation = 'none';
  }
}

function handleChange() {
  searchInput.style.caretColor = '#c7b700';
  searchInput.style.animation = 'none';
  searchInput.style.textDecorationLine = 'none';
}

function handleClose(event) {
  event.preventDefault();
  console.log(searchInput.value);
  if (searchInput.value !== '') {
    searchInput.value = '';
  } else {
    handleBlur();
  }
}

formSearch.addEventListener('submit', handleSubmit);
searchButton.addEventListener('click', () => { console.log('clicou'); });
closeButton.addEventListener('click', handleClose);

searchInput.addEventListener('focus', handleFocus);
searchInput.addEventListener('blur', handleBlur);
searchInput.addEventListener('keypress', handleChange);
