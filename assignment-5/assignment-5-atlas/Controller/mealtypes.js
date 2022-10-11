const Mealtype = require('../Models/mealtype');

exports.getMealtypes = (req, res) => {
    Mealtype.find()
        .then(response => {
            const mealresult=response.map(m=>({id:m._id,name:m.name,meal_type:m._id}))
            res.status(200).json({
                message:"Mealtypes Fetched Successfully", 
                mealtypes: mealresult
            })        
        })
        .catch(err =>{
            res.status(500).json({ error: err })
        })
    
}