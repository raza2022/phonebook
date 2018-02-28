import { check } from 'meteor/check'

Meteor.methods({
    userLogin: function (params) {
        check(params, {
            email: String,
            password: String
        })
    }
});
