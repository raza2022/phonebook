Router.configure({
    layoutTemplate: 'mainLayout',
    waitOn: function() {
        return Meteor.subscribe('contacts')
    }
});

Router.route('/main', {
    name: 'mainLayout',
    waitOn: function() {
        return Meteor.subscribe('contacts')
    }
});

Router.route('/add-Contact', {
    name: 'addContact',
    waitOn: function() {
        return Meteor.subscribe('contacts')
    }
});

// Default route
Router.route('/', function () {
    Router.go('main');
});
