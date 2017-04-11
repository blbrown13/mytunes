// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
    console.log('i\'m initializing');
    // should render song models to song queue
    this.model.on('enqueue', this.render, this);
  },

  // events: {
  //   'click': function() {
  //   }
  // },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
