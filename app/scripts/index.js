var $ = require('jquery');

var models = require('./models/contactModel.js');
var views = require('./views/contactView.js');
var headerTemplate = require('../templates/listHeader.hbs');

// To make sure that the DOM is ready
$(function(){

  var myContacts = new models.ContactCollection();

  var myContactForm = new views.ContactFormView({collection: myContacts});
  $('.app').append(myContactForm.render().el);

  $('.app').append(headerTemplate);

  var contactList = new views.ContactListView({collection: myContacts});
  $('.app').append(contactList.render().el);


  myContacts.fetch();


});
