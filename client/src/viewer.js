var BucketView = function( list ) {
  this.list = list;
}

BucketView.prototype = {
  render: function() {
    this.addCountries();
    this.selectCountry();
  },

  var addCountries = function() {
   state.countries.forEach(function(country, index) {
     var option = document.createElement('option');
     option.text = country.name;
     option.value = country.index;
     countries.appendChild(option);   
   });
 }
 
}