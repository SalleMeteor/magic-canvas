Meteor.publish("allCommands", function(){
  return Commands.find();
});

/*Meteor.publish("commandslist", function(){
  return Commands.find();
});*/