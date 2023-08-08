const admin = require('firebase-admin')

// Initialize firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert('./dmeta-fb2a4-firebase-adminsdk-q11pz-57543f67a0.json'),
  storageBucket: 'gs://dmeta-fb2a4.appspot.com'
})

// Cloud storage
const bucket = admin.storage().bucket()

module.exports = {
  bucket
}