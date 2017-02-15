var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  idAttribute: "_id",
  initialize: function(){
    this.set('createDate', (new Date()).getTime());
  }
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  comparator: 'createDate',
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/contact'
});

module.exports = {
  Contact: Contact,
  ContactCollection: ContactCollection
}
