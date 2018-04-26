var path = require('path');
var bids = require('./../controllers/bid_controller.js');

module.exports = function(app){
    app.post('/bids', bids.create);
    app.get('/bids', bids.getAll);
    app.get('/bids/:id', bids.getOne);
    app.delete('/startnewbid', bids.deleteAll);
    app.delete('/bids/:id', bids.delete);
    app.get('/basketball', bids.getAllBasketball);
    app.get('/car', bids.getAllCar);
    app.get('/spinner', bids.getAllSpinner);
    
    
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve("../public/dist/index.html"));
    });
}