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
/***/ function(module, exports, __webpack_require__) {

	var BucketView = __webpack_require__( 1)
	
	state = {
	  countries: [],
	  country: []
	}
	
	window.onload = function(){
	 var bucketView;
	
	 var url = "https://restcountries.eu/rest/v1";
	 var request = new XMLHttpRequest();
	 request.open("GET", url);
	 request.send(null);
	 var countries = document.getElementById( 'countries' )
	
	 request.onload = function(){
	  var response = request.responseText
	  state.countries = JSON.parse( response )
	  bucketView = new BucketView( state.countries )
	  bucketView.render()
	}
	countries.onchange = function() {
	  state.country = bucketView.selectCountry();
	  console.log( state, 'state' )
	  savedToDb()
	}
	
	}
	
	var savedToDb = function() {
	  var request = new XMLHttpRequest();
	  request.open( "POST", '/countries' );
	  request.setRequestHeader( "Content-Type", "application/json" )
	  request.onload = function() {
	    if( request.status === 200 ) {
	      console.log( request )
	      getCountries();
	    }
	  }
	  // var deleteButton = document.getElementById( 'deleteButton' )
	  // deleteButton.onclick = function() {
	  //   deleteCountries();
	  // }
	  request.send( JSON.stringify( { country: state.country } ) )
	}
	
	var getCountries = function() {
	  var request = new XMLHttpRequest();
	  request.open( "GET", "/countries" );
	  request.onload = function() {
	  }
	  request.send( null )
	
	}
	
	var editCountries = function() {
	  var editButton = document.getElementById( 'editButton' )
	  var request = new XMLHttpRequest();
	  request.open( "PUT", "/countries/:id" );
	
	}
	
	var deleteCountries = function( id ) {
	  var request = new XMLHttpRequest();
	  request.open( "DELETE", "/countries/:"+ id );
	  request.onload = function() {
	  }
	  request.send( null )
	
	}
	
	
	
	
	
	
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var BucketView = function( list ) {
	  this.list = list;
	}
	
	state = {
	  country: ""
	}
	
	
	
	BucketView.prototype = {
	  render: function() {
	    this.addCountries();
	  },
	
	  addCountries: function() {
	    this.list.forEach(function(country, index) {
	      var countries = document.getElementById( 'countries' )
	      var option = document.createElement('option');
	      option.text = country.name;
	      option.value = country.index;
	      countries.appendChild(option);
	    });    
	  },
	
	  clickEdit: function() {
	    console.log( "Clicked" )
	  },
	
	  clickDelete: function() {
	
	  },
	
	  selectCountry: function() {
	    var self = this;
	    var countries = document.getElementById( 'countries' )
	    var currentlySelected = countries.options[countries.selectedIndex].text
	    console.log(this.list)
	
	    this.list.forEach(function(country) {
	     if(country.name === currentlySelected) {
	      var ul = document.getElementById( 'list' )
	      var li = document.createElement( 'li' )
	      var editButton  =document.createElement( 'button' );
	      editButton.id = "editButton"
	      var deleteButton  =document.createElement( 'button' );
	      deleteButton.id = "deleteButton"
	      editButton.innerHTML = "Edit"
	      deleteButton.innerHTML = "Delete"
	      li.innerHTML = country.name
	      li.appendChild( editButton )
	      li.appendChild( deleteButton )
	      ul.appendChild( li )
	      console.log("editButton", editButton)
	      editButton.onclick = function(e){
	        self.clickEdit()
	      }
	      deleteButton.onclick = function(e){
	        self.clickDelete()
	      }
	      state.country = country;
	    }
	  });
	    return state.country   
	}
	
	}
	
	module.exports = BucketView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map