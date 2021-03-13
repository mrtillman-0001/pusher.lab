const PusherClient = require('./pusher.client');

const client = new PusherClient("test-channel");

client.send("hello");
