Template.canvas.events({
  'click #button': function(){
    Commands.insert({owner:Meteor.userId(), name: $("#command").val(), created_at: Date()});
    document.getElementById('command').value='';
  }
});

/*Template.canvas.helpers({
  command: function(){
    return Commands.find().fetch();
  }
});*/

Template.commands.command = function() {
  var list = Commands.find({owner:Meteor.userId()}, {sort: {created_at:-1}}).fetch();
  return list.slice(0,15);
}