function App(){
  var objects = [];
  var frameTime = 50;
  var currentTime = new Date().getTime();
  this.init = function(){
    display.init("display", "font");

    for(var a = 0; a < 16; a++){
      objects.push(new BouncingObject('O', a, display.BLACK));
      objects.push(new BouncingObject('O', display.BLACK, a));
    }

    this.run();
  }

  this.run = function(){
    var doUpdate = false
    if(new Date().getTime() - currentTime >= frameTime){
      doUpdate = true;
      currentTime = new Date().getTime();
    }

    for(var a = 0; a < 32; a++){
      if(doUpdate)
        objects[a].update();
      objects[a].draw();
    }

    display.flip();

    window.setTimeout(app.run, 10);
  }
}

var app = new App();
var display = new NVCLI();
app.init();