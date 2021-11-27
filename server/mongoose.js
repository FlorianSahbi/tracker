const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@blind-test.bx9rj.mongodb.net/tracker?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.info.bind(console, 'connection error:'));
db.once('open', () => console.info('DB Connected'));

const MarkerSchema = new mongoose.Schema({
    longitude: Number,
    latitude: Number,
});

const Markers = mongoose.model('Markers', MarkerSchema);

module.exports = Markers;
