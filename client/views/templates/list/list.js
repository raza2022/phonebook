// imports
import Contacts from '../../../../imports/db/Collection/contacts'

/********** Template Events **********/
Template.list.onRendered(() =>{


});

Template.list.events({
    'submit .contact': function( e, t ) {
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
            Meteor.call('addContact', args, function (err) {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log('Contact Created!');

            });
        }
    },
    'click #delect-contact': function () {
        Meteor.call('deleteContact', this._id, function (err) {
            if (err) {
                alert(err.message);
                return;
            }
            alert('Contact Removed!');

        });
    }

});

/********** Template Helpers **********/
Template.list.helpers({
    contacts: () => Contacts.find(),

    contactsLength: () => Contacts.findOne()
});



