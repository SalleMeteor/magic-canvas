Meteor.publish("allCommands", function(){
  return Commands.find();
});

/*Meteor.publish("commandslist", function(){
  return Commands.find();
});*/

Meteor.methods({
  makeMagic: function(){
    console.log("magic!");
    var commands = Commands.find().fetch();
    commands.forEach(function(e){
      if (Math.round(Math.random())){
         e.coordX = e.coordX+50;
      } else { 
         e.coordX = e.coordX-50;
      }
      if (Math.round(Math.random())){
         e.coordY = e.coordY+50;
      } else { 
         e.coordY = e.coordY-50;
      }
      Commands.update({name: e.name}, { $set: { coordX: e.coordX, coordY: e.coordY }});
    });
  },
});