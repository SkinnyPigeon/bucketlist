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