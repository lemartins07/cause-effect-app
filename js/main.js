/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("console.log('teste');\nvar searchInput = document.querySelector('.search-input');\nvar searchButton = document.querySelector('.search-button');\nvar closeButton = document.querySelector('.close-button');\nvar formSearch = document.querySelector('.form-search-top');\n\nfunction handleSubmit(event) {\n  event.preventDefault();\n  console.log('submit');\n}\n\nfunction handleFocus() {\n  formSearch.style.width = '245px';\n  formSearch.style.borderColor = '#c7b700';\n  closeButton.style.display = 'block';\n  searchInput.style.width = '100%';\n  searchInput.style.caretColor = 'transparent';\n  searchInput.style.animation = 'blink 2s step-end infinite';\n}\n\nfunction handleBlur() {\n  if (searchInput.value === '') {\n    formSearch.style.width = '80px';\n    searchInput.style.width = '40px';\n    closeButton.style.display = 'none';\n    formSearch.style.borderColor = '#858585';\n    searchInput.classList.add('thickness');\n    searchInput.style.textDecorationLine = 'underline';\n    searchInput.style.animation = 'none';\n  }\n}\n\nfunction handleChange() {\n  searchInput.style.caretColor = '#c7b700';\n  searchInput.style.animation = 'none';\n  searchInput.style.textDecorationLine = 'none';\n}\n\nfunction handleClose(event) {\n  event.preventDefault();\n  console.log(searchInput.value);\n\n  if (searchInput.value !== '') {\n    searchInput.value = '';\n  } else {\n    handleBlur();\n  }\n}\n\nformSearch.addEventListener('submit', handleSubmit);\nsearchButton.addEventListener('click', function () {\n  console.log('clicou');\n});\ncloseButton.addEventListener('click', handleClose);\nsearchInput.addEventListener('focus', handleFocus);\nsearchInput.addEventListener('blur', handleBlur);\nsearchInput.addEventListener('keypress', handleChange);\n\n//# sourceURL=webpack://cause-effect-app/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/script.js"]();
/******/ 	
/******/ })()
;