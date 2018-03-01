import {
    check
} from 'meteor/check'
import {HTTP} from 'meteor/http'
Meteor.methods({
    addContact: function(params) {
        check(params, {
            name: String,
            email: String,
            phone: String,
        });
        params.userId = this.userId;

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

    getGeolocation: function (number) {
        check(number, String);
        let data = {
            access_key: '8bae0159b83ef926d4bbc441ffee7d4e',
            number: number,
            format: 1
        };
        try {
            let result = HTTP.call("GET", "http://apilayer.net/api/validate", {
                params: data
            });
            return result.data;
        } catch (_error) {
            throw new Meteor.Error("No Result", "Failed to fetch...");
        }

    }
});
