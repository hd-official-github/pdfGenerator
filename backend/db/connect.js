const mongoose = require('mongoose');
const uri = "mongodb+srv://root:password%40123@pdf.cjlfyjn.mongodb.net/pdf?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});