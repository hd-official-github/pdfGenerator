const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    schema: Object,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;