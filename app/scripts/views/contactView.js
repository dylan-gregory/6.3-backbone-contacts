var $ = require('jquery');
var Backbone = require('backbone');

var contactForm = require('../../templates/contactForm.hbs');
var contactPersonTemplate = require('../../templates/contactPersonTemplate.hbs');

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
    this.collection.create({
      name: $('#new-name').val(),
      email: $('#new-email').val(),
      phone: $('#new-phone').val(),
      twitter: $('#new-twitter').val(),
      instagram: $('#new-ig').val()
    });


    $('#new-name').val('');
    $('#new-email').val('');
    $('#new-twitter').val('');
    $('#new-phone').val('');
    $('#new-ig').val('');
  }

});

var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderContact);
  },
  render: function(){
    return this;
  },
  renderContact: function(contact){
    var newContact = new ContactPersonView({model: contact});
    console.log('here', newContact);
    this.$el.append(newContact.render().el);
  }
});

var ContactPersonView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: contactPersonTemplate,
  render: function(){
    var context = this.model.toJSON();
    console.log(this.model.toJSON());

    this.$el.html(this.template(context));

    return this;
  }

});


module.exports = {
  ContactFormView: ContactFormView,
  ContactPersonView: ContactPersonView,
  ContactListView: ContactListView,

}
