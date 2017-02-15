var $ = require('jquery');
var Backbone = require('backbone');

var contactForm = require('../../templates/contactForm.hbs');

// $.fn.serializeObject = function() {
//    return this.serializeArray().reduce(function(acum, i) {
//      acum[i.name] = i.value;
//      return acum;
//    }, {});
//  };

var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  id: 'contact-form',
  className: 'well',
  events:{
    'submit': 'addContact'
  },
  render: function(){
    this.$el.html(contactForm());
    return this;
  },
  addContact: function(event){
    event.preventDefault();

    // var inputValues = this.$el.serializeObject;
    this.collection.add({
      name: $('#new-name').val(),
      email: $('#new-email').val(),
      twitter: $('#new-twitter').val(),
      instagram: $('#new-ig').val()
    });

    $('#new-name').val('');
    $('#new-email').val('');
    $('#new-twitter').val('');
    instagram: $('#new-ig').val('');
  }

});


module.exports = {
  ContactFormView: ContactFormView
}
