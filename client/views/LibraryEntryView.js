// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // deleted play invocation
  events: {
    'click': function() {
      console.log('been clicked');
      this.model.enqueue();
      this.model.play(); // this shouldn't have to be added
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
