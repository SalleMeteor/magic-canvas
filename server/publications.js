Meteor.publish("allCommands", function(){
  return Commands.find();
});