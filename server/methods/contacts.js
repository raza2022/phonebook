import {
    check
} from 'meteor/check'

Meteor.methods({
    addContact: function(params) {
        check(params, {
            name: String,
            email: String,
            phone: String,
        });

        Contacts.insert(params)
    },

    updateContact: function(params) {
        check(params, {
            id: String,
            name: String,
            email: String,
            phone: String,
        });

        let update = {
                $set: {}
            },
            _id = params.id;
        params.name && (update.$set.name = params.name);
        params.email && (update.$set.email = params.email);
        params.phone && (update.$set.phone = params.phone);
        Contacts.update(_id, update);
    },

    deleteContact: function(id) {
        check(id, String);
        return Contacts.remove({
            _id: id
        })
    },
});
