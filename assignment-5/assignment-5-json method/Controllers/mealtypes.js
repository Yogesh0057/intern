const Mealtypes = require('../Models/mealtypes.json');

exports.getMealtypes = (req, res) => {
    res.status(200).json({message:"Mealtypes Fetched Successfully", mealtypes: Mealtypes})
}