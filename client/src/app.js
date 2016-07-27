var BucketView = require( './viewer.js')

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








