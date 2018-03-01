// imports
import Contacts from '../../../../imports/db/Collection/contacts'

/********** Template Events **********/
Template.editContact.onRendered(() =>{

});

Template.editContact.events({
    'submit form': function( e, t ) {
        e.preventDefault();
        {
            let name = t.$('#contact-name').val();
            let phone = t.$('#contact-phone').val();
            let email = t.$('#contact-email').val();
            let args = {
                id: Router.current().params.id,
                name,
                phone,
                email,
            };
            if(!(name && phone && email)){
                alert('Please fill all required Fields');
                return
            }
            Meteor.call('updateContact', args, function (err) {
                if (err) {
                    console.log(err.message);
                    return;
                }
                alert('Contact Updated!');
                Router.go('index');

            });
        }
    },

});

/********** Template Helpers **********/
Template.editContact.helpers({
    contact: () => Contacts.findOne({_id: Router.current().params.id}),
});



