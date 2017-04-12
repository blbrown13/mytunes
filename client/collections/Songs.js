// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  // added parse stuff
  url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    this.fetch({
      data: { limit: 10 }
    });
  },
  // end of parse stuff

  model: SongModel

});
