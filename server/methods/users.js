import { check } from 'meteor/check'
import {Meteor} from 'meteor/meteor'
// import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    registerUser: function(params) {
        check(params, {
            name: String,
            email: String,
            password: String
        });
        let args = {
            username: params.name,
            email: params.email,
            password: params.password,
            profile: {
                role: 'user'
            }
        };
        return Accounts.createUser(args)
    }
});
