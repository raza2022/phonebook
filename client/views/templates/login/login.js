/********** Template Events **********/
Template.login.events({
    'submit form': function( e ) {
        e.preventDefault();
        let password = $('#password').val();
        let email = $('#email').val();
        if(!(email && password)){
            alert("Please fill all required Fields");
            return;
        }
        Meteor.loginWithPassword(email, password, function(err) {
            if (err) {
                if (err.error === 403) {
                    alert('Invalid email or password');
                } else {
                    alert('We are sorry but something went wrong.');
                }
                return;
            }
            alert('login Successfully!');
            Router.go('index');
        });
    },
}); 
