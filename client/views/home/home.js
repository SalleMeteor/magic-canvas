Template.home.created = function(){
  subscriptionHandle=Meteor.subscribe("allCommands");
}


Template.home.subscriptionReady=function(){
    // the handle has a special "ready" method, which is a reactive data source
    // it indicates if the data provided by the publication has made its way to the client
    return subscriptionHandle.ready();
};
/*if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to app.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/