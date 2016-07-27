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

  selectCountry: function() {
    var countries = document.getElementById( 'countries' )
    var currentlySelected = countries.options[countries.selectedIndex].text
    console.log(this.list)

    this.list.forEach(function(country) {
     if(country.name === currentlySelected) {
      var ul = document.getElementById( 'list' )
      var li = document.createElement( 'li' )
      var editButton  =document.createElement( 'button' );
      var deleteButton  =document.createElement( 'button' );
      editButton.innerHTML = "Edit"
      deleteButton.innerHTML = "Delete"
      li.innerHTML = country.name
      li.appendChild( editButton )
      li.appendChild( deleteButton )
      ul.appendChild( li )
      console.log("this", this)
      state.country = country;

    }
  });
    return state.country   
  }




}

module.exports = BucketView;