import Contacts from '../imports/db/Collection/contacts'
Meteor.startup(() => {
  if(!Contacts.find().fetch().length){
      Contacts.insert({
          name: 'Abdul',
          email: 'raza2022@gmail.com',
          phone: "12345678"
      })
  }
});