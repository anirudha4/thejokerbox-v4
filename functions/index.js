const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();


exports.generateThumbnails = functions.firestore.document('/files/{documentId}')
    .onCreate((snap, context) => {
        console.log({ snap: snap.data() });
    });
