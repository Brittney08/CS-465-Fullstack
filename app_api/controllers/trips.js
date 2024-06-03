const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register model
const Model = mongoose.model('trips');

// Get: /trips - list all the trips
//Regardless of outcome, respomse must include HTML status and code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // no filter, return all records
        .exec();

        // uncomment the following line to show results of querey
        // on the console
        // console.log(q);

    if(!q)
    { // database returned no data
        return res
                .status(404)
                .json(err);
    } else { // return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};


// Get: /trips/:tripCode - lists a single trip
//Regardless of outcome, respomse must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // return single record
        .exec();

        // uncomment the following line to show results of querey
        // on the console
        // console.log(q);

    if(!q)
    { // database returned no data
        return res
                .status(404)
                .json(err);
    } else { // return resulting trip list
        return res
            .status(200)
            .json(q);
    }
    
};

module.exports = {
    tripsList,
    tripsFindByCode
};
