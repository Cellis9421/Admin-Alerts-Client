const express = require('express')
const app = express()

const alert = require('alert-node')
const EventSource = require("eventsource");
const eventSource = new EventSource('http://1bbb950f.ngrok.io');



eventSource.addEventListener('connected', (e) => {
    console.log('Text:', e.data.text);
    alert(e.data.text);
    // => Hello world!
});

app.listen(80, () => console.log('Admin Alerts Client running!'))