/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	state = {
	  countries: []
	}
	
	window.onload = function(){
	
	  var countries = document.getElementById( 'countries' )
	
	  var url = "https://restcountries.eu/rest/v1";
	  var request = new XMLHttpRequest();
	  request.open("GET", url);
	  request.send(null);
	
	  request.onload = function(){
	   var response = request.responseText
	
	   state.countries = JSON.parse( response )
	   addCountries();
	 }
	 countries.onchange = function() {
	   selectCountry();
	 }
	}
	
	
	var addCountries = function() {
	 state.countries.forEach(function(country, index) {
	   var option = document.createElement('option');
	   option.text = country.name;
	   option.value = country.index;
	   countries.appendChild(option);   
	 });
	}
	
	var selectCountry = function() {
	  var currentlySelected = countries.options[countries.selectedIndex].text
	  console.log(currentlySelected)
	
	  state.countries.forEach(function(country) {
	   if(country.name === currentlySelected) {
	    var ul = document.getElementById( 'list' )
	    var li = document.createElement( 'li' )
	    li.innerHTML = country.name
	    ul.appendChild( li )
	   }
	 });
	}
	
	
	
	
	
	
	
	
	


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map