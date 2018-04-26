var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');

module.exports = {
    
    create: function(req, res){
        // console.log(req.body);
        var bid = new Bid(req.body);
        bid.save()
        .then( () => {
            res.json(true);
        })
        .catch(errors => {
            res.status(500).json(errors)
        })
    },

    getAll: function(req, res){
        // console.log("IN THE CONTROLLER")
        Bid.find({})
        .then(bid => {
            res.json(bid);
        }) 
        .catch(errors => {
            res.status(500).json(errors)
        })
    },

    getAllBasketball: function(req, res){
        Bid.find({item: "Basketball"})
        .then(bid => {
            res.json(bid);
        }) 
        .catch(errors => {
            res.status(500).json(errors)
        })
    },
    getAllCar: function(req, res){
        Bid.find({item: "Car"})
        .then(bid => {
            res.json(bid);
        }) 
        .catch(errors => {
            res.status(500).json(errors)
        })
    },
    getAllSpinner: function(req, res){
        Bid.find({item: "Spinner"})
        .then(bid => {
            res.json(bid);
        }) 
        .catch(errors => {
            res.status(500).json(errors)
        })
    },

    getOne: function(req, res){
        Bid.findOne({_id: req.params.id})
        .then(bid => {
            res.json(bid);
        })
        .catch(errors => {
            res.status(500).json(errors);
        })
    },

    deleteAll: function(req, res){
        Bid.remove({}, function(error){
            if(error){
                console.log("Error");
            }else{
                console.log("All is now deleted!");
                res.json(true);
            }
        })
    },

    delete: function(req, res){
        // console.log("In controller: ", req.params.id);
        Bid.remove({_id: req.params.id}, function(error){
            if(error){
                console.log("Error");
            }else{
                console.log("Bid is now deleted!");
                res.json(true);
            }
        })
    },
      
}
