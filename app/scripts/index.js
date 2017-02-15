var $ = require('jquery');

var models = require('./models/contactModel.js');
var views = require('./views/contactView.js');

// To make sure that the DOM is ready
$(function(){

  var myContacts = new models.ContactCollection();

  var myContactForm = new views.ContactFormView();
  $('.app').append(myContactForm.render().el);

  




});
