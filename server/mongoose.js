const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
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
