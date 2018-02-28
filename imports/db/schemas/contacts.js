import SimpleSchema from "simpl-schema"

export default new SimpleSchema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    url: {
        type: String,
        optional: true
    },
})
