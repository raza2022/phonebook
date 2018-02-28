Router.configure({
    layoutTemplate: 'mainLayout',
    waitOn: function() {
        return Meteor.subscribe('contacts')
    }
});


Router.route('/main', function () {
    this.render('mainLayout');
});
// Default route
// You can use direct this.render('template')
// We use Router.go method because dashboard1 is our nested view in menu
Router.route('/', function () {
    Router.go('main');
});
