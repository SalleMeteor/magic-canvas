/*Template.canvas.created = function(){
  Meteor.subscribe("commandsList");
  var query = Commands.find({}, {sort:{created_at:-1}, limit: 50});
  loadCanvas(query);
}*/
/*Template.canvas.rendered = function(){
  var commandlist = Commands.find({}, {sort:{created_at:-1}}).fetch();
  loadCanvas(commandlist.slice(0,50));
};*/

function existingCommand(command){
  if (command.indexOf("blue")>-1 || command.indexOf("red")>-1 || command.indexOf("yellow")>-1 || command.indexOf("green")>-1 || command.indexOf("violet")>-1 || command.indexOf("orange")>-1 || command.indexOf("circ")>-1 || command.indexOf("rect")>-1 || command.indexOf("bunny")>-1){
    return true;
  }
  return false;
}

function loadCanvas(commandlist){
  alert("load canvas " + commandlist.count);
  commandlist.forEach(function(command){
    alert("for each inside");
    //Examinamos primero si se ha especificado un color.
    insertElementInCanvas(command.name, command.coordX, command.coordY);
  });
}

function insertElementInCanvas(command, coordX, coordY){
  if( existingCommand(command) ){
      var graphics = new PIXI.Graphics();
      //set a fill and line style
      graphics.lineStyle(0);
      //Lo inicializamos a negro
      graphics.beginFill(0x000);
      
      //Determinamos el color y seleccionamos el color del FILL
      if (command.indexOf("blue") > -1){
        graphics.beginFill(0x1B75BB);
      }
      if (command.indexOf("red") > -1){
        graphics.beginFill(0xBE1E2D);
      }
      if (command.indexOf("yellow") > -1){
        graphics.beginFill(0XFFDD17);
      }
      if (command.indexOf("orange") > -1){
        graphics.beginFill(0XF7931D);
      }
      if (command.indexOf("green") > -1){
        graphics.beginFill(0X8CC63E);
      }
      if (command.indexOf("violet") > -1){
        graphics.beginFill(0X9C3FC4);
      }
      if(command.indexOf("circ")>-1){
        graphics.drawCircle(coordX,coordY,50);
      } else if(command.indexOf("rect")>-1) {
                graphics.drawRect(coordX, coordY, 150, 95);
                } else {
        //por defecto dibujo un círculo si no me dicen nada
        graphics.drawCircle(coordX,coordY,30);
      }
      graphicdone = true;
      stage.addChild(graphics);
      //render the stage
      renderer.render(stage);
    }
    if (graphicdone == false){
      //Si la variable graphics no existe todavía la creo e imprimo algo por defecto
      document.getElementById('textholder').innerHTML += command;
    }      
    graphicdone = false;
}

Template.canvas.events({
  'click #button': function(){
    var graphicdone = false;
    var coorX = Math.random() * (600 - 0) + 0;
    var coorY = Math.random() * (480 - 0) + 0;
    //guardamos el command. luego habrá una cosa que actualice el canvas cada vez que la collection de commands se actualice.
    Commands.insert({owner:Meteor.userId(), name: $("#command").val(), coordX:coorX, coordY:coorY, created_at: Date()});  
    insertElementInCanvas($("#command").val(), coorX, coorY);
    document.getElementById('command').value='';
  }
});

Template.commands.command = function() {
  //Esta función se llama cada vez que se actualiza la lista commmands
  var list = Commands.find({owner:Meteor.userId()}, {sort: {created_at:-1}}).fetch();
  return list.slice(0,15);
}