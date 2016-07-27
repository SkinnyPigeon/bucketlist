state = {
  countries: [],
  country: ""
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
    state.country = country;
    var ul = document.getElementById( 'list' )
    var li = document.createElement( 'li' )
    li.innerHTML = country.name
    ul.appendChild( li )
    savedToDb();
   }
 });
}

var savedToDb = function() {
  var request = new XMLHttpRequest();
  request.open( "POST", '/countries' );
  request.setRequestHeader( "Content-Type", "application/json" )
  request.onload = function() {
    if( request.status === 200 ) {
      console.log( "Better hurry up, you're dying" )
      getCountries();
    }
  }
  request.send( JSON.stringify( { country: state.country } ) )
}

var getCountries = function() {
  var request = new XMLHttpRequest();
  request.open( "GET", "/countries" );
  request.onload = function() {
    console.log( "great success 123" )
  }
  request.send( null )
}








