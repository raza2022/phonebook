// imports
import Contacts from '../../../../imports/db/Collection/contacts'

/********** Template Events **********/
Template.addContact.onRendered(() =>{


});

Template.addContact.events({
    'submit form': function( e, t ) {
        e.preventDefault();
        {
            let name = t.$('#contact-name').val();
            let phone = t.$('#contact-phone').val();
            let email = t.$('#contact-email').val();
            let args = {
                name,
                phone,
                email,
            };
            if(!(name && phone && email)){
                alert('Please fill all required Fields');
                return
            }
            Meteor.call('addContact', args, function (err) {
                if (err) {
                    console.log(err.message);
                    return;
                }
                alert('Contact Created!');
                Router.go('index');

            });
        }
    },

});

/********** Template Helpers **********/
Template.addContact.helpers({
    contacts: () => Contacts.find(),
});



