import Contacts from '../../imports/db/Collection/contacts'
Meteor.publish('contacts', function () {
    return Contacts.find({userId: this.userId});
});
