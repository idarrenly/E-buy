var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BidSchema = new mongoose.Schema({
    name: String,
    item: String,
    price: 0
});

mongoose.model('Bid', BidSchema);