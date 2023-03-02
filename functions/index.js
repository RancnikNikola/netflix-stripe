const functions = require("firebase-functions");
exports.events = functions.https.onRequest((request, response) => {
  response.send("Endpoint for Stripe Webhooks!");
});
