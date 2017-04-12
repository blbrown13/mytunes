// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  // refactor initialize
  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  // pass song as parameter
  enqueue: function(song) {
    console.log('enqueued');
    if ( this.length === 1 ) {
      this.playFirst();
    }
  },

  // refactor dequeue and add song parameter
  dequeue: function(song) {
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  // added playNext function
  playNext: function() {
    console.log('playing next');
    this.shift();
    if ( this.length >= 1 ) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },

  playFirst: function() {
    console.log('plauying first');
    var song = this.at(0);
    song.play();
  }

});
