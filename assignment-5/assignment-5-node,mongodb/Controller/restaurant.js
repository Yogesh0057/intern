const Restaurant = require('../Models/restaurant');


/*exports.getRestaurantByLocId = (req, res) => {
    Restaurant.find()
        .then(response => {
            res.status(200).json({
                message:"Restaurant Fetched Successfully", 
                restaurant: response 
            })        
        })
        .catch(err =>{
            res.status(500).json({ error: err })
        })
    
}*/

exports.getRestaurantByCity = (req, res) => {
    const { city } = req.params;
    
    Restaurant.find({ city_name: city })
        .then(response => {
            const result=response.map(m=>({id:m.mealtype_id
                ,Name:m.name,city:m.city_name,locality:m.locality,thumb:m.thumb,aggregate_rating:m.aggregate_rating,rating_text:m.rating_text,min_price:m.min_price}))
                
            res.status(200).json({
                message:"Restaurant Fetched Successfully", 
                restaurants: result
            })        
        })
        .catch(err =>{
            res.status(500).json({ error: err })
        })
    
}