// imports
import Contacts from '../../../../imports/db/Collection/contacts'
import { Session } from 'meteor/session'

/********** Template Events **********/
Template.list.onRendered(() =>{
    Session.set('filter', {})

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
    },
    'keyup #search' : function( e ) {
        let filter = Session.get('filter');
        let phone = e.target.value;
        if (!phone || phone === '') {
            filter.phone && delete filter.phone;
        }
        else {
            filter.phone = {$regex: phone + " *", $options: "i"};
        }
        Session.set('filter', filter)
    },
    'click #logout': function () {
        Meteor.logout()
    }

});

/********** Template Helpers **********/
Template.list.helpers({
    contacts: () => Contacts.find(Session.get('filter')),

    contactsLength: () => Contacts.findOne()
});



