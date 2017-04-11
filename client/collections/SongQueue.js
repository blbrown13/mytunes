// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if ( this.length === 1 ) {
        this.playFirst();
      }
      console.log('this: ', this);
      console.log('this model: ', this.model);
      // when a song is added, it should be added to the queue
      // this.model.enqueue();
    }, this);

    this.on('ended', function() {
      this.shift();
      if ( this.length > 0 ) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', this.remove, this);
  },

  playFirst: function() {
    var song = this.at(0);
    song.play();
  }

});
