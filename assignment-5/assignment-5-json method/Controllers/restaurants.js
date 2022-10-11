const Restaurants = require('../Models/restaurants.json');

exports.getRestaurantsByCity = (req, res) => {

   /* res.status(200).json({message:"Restaurants Fetched Successfully", restaurants: Restaurants })
}*/
    const {city} = req.params;
    const filteredRestaurantsbycity = Restaurants.filter(item => item.city_name == city);

    res.status(200).json({message:"Restaurants Fetched Successfully", restaurants: filteredRestaurantsbycity})
} 