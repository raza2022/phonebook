/********** Template Events **********/
Template.register.events({
    'submit form': function( e ) {
        e.preventDefault();
            let name = $('#name').val();
            let email = $('#email').val();
            let password = $('#password').val();
            if(!(name && email && password)){
                alert("Please fill all required Fields");
                return;
            }
            let args = {
                name,
                email,
                password
            };
            Meteor.call('registerUser', args, function (err) {
                if (err) {
                    alert(err.message);
                    return;
                }
                alert('Account Created. you can login with you credentials!');
                Router.go('login');
            });
    }
}); 
