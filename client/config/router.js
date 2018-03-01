Router.onBeforeAction('authenticate', {except: ['login', 'register']});

Router.configure({
    authenticate: 'login'
});

Router.configure({
    layoutTemplate: 'mainLayout',
    waitOn: function() {
        return Meteor.subscribe('contacts')
    }
});

Router.route('/index', {
    name: 'index',
    template: 'mainLayout',
    yieldTemplates: {
        'list' : {to: 'content'}
    },
    waitOn: function() {
        return Meteor.subscribe('contacts')
    }
});

Router.route('/add-Contact', {
    name: 'addContact',
    template: 'mainLayout',
    yieldTemplates: {
        'addContact' : {to: 'content'}
    }
});

Router.route('/edit-Contact/:id', {
    name: 'editContact',
    template: 'mainLayout',
    yieldTemplates: {
        'editContact' : {to: 'content'}
    },
    waitOn: function() {
        return Meteor.subscribe('contacts')
    }
});

Router.route('/register', {
    name: 'register',
    template: 'mainLayout',
    yieldTemplates: {
        'register' : {to: 'content'}
    }
});


Router.route('/login', {
    name: 'login',
    template: 'mainLayout',
    yieldTemplates: {
        'login' : {to: 'content'}
    }
});


// Default route
Router.route('/', function () {
    Router.go('index');
});
