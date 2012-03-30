var root = this;

$(function() {

root.Picture = Backbone.Model.extend({
  // Custom Methods Here
});

root.Album = Backbone.Collection.extend({
  url: "/pictures"
, model: Picture
});

_.extend(Album, {
  test: function(string) {
    string = string || 1234;
    console.log(string)
  }
})

root.MainRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  , "pupu/:hello": "pupu"
  , "pupu/:hello/:world": "index"
  , "pupu/:hello-:world/:boo": "pupu"
  //, ":path": "index"
  }
, index: function() {
    // console.log("TAE");
    // console.log(arguments);
    root.album = new root.Album();
    root.album.fetch();

    var view = new root.Frame({
      picture: root.album.models[0]
    });

    var view2 = new root.Frame2({
      picture: root.album.models[0]
    });

    console.log(view.$el.html());
    console.log(view2.$el.html());
    view2.$el.append($('<div class="test">testing</div>'));
    view2.$el.append($('<div class="test2">testing2</div>'));
  }
, pupu: function(hello, world, boo) {
    console.log(hello);
    console.log(world);
    console.log(boo);
  }
});

root.Frame = Backbone.View.extend({
  el: "td.picture"
});

root.Frame2 = Backbone.View.extend({
  el: ".picture2"
, events: {
    "click .test2": "showAlert"
  , "dblclick .test": "showAlert2"
  }
, showAlert: function(e) {
    e.preventDefault();
    alert("test");
  }
, showAlert2: function(e) {
    e.preventDefault();
    alert("test2");
  }
});

});
