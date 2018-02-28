import {
    check
} from 'meteor/check'

Meteor.methods({
    addContact: function(params) {
        check(params, {
            name: String,
            url: String,
            email: String,
            phone: String,
        });

        Contacts.insert(params)
    },

    updateContact: function(params) {
        check(params, {
            _id: String,
            name: String,
            url: String,
            email: String,
            phone: String,
        });

        let update = {
                $set: {}
            },
            _id = params._id;
        params.name && (update.$set.name = params.name);
        params.url && (update.$set.url = params.url);
        params.email && (update.$set.email = params.email);
        params.phone && (update.$set.phone = params.phone);
        Contacts.update(_id, update);
    },

    deleteContact: function(params) {
        check(params, {
            _id: String,
        });
        return Contacts.remove({
            _id: params._id
        })
    },
});
