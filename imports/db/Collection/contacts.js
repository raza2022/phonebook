import { Mongo } from "meteor/mongo"
import ContactSchema from "../schemas/contacts"

Contacts = new Mongo.Collection("contacts");

Contacts.allow({
    insert: () => {
    return true
},
    update: () => {
    return true
},
remove: () => {
    return true
}
});

Contacts.attachSchema(ContactSchema);

export default Contacts