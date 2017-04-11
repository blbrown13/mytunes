// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if ( this.length === 1 ) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function() {
    var song = this.at(0);
    song.play();
  }

});
