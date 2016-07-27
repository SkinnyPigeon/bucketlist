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









