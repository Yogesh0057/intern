const express = require('express');

//const locationController = require('../Controller/location');
//const mealtypeController = require('../Controller/mealtypes');
const restaurantController = require('../Controller/restaurant');
//const userController = require('../Controller/user');


const route = express.Router();

//route.get('/locations', locationController.getLocations);
//route.get('/mealtypes', mealtypeController.getMealtypes);
route.get('/restaurants/:city', restaurantController.getRestaurantByCity);
//route.get('/restaurants', restaurantController.getRestaurantByLocId);
//route.post('/signup', userController.Sighnup);
//route.post('/login',userController.userLogin);

module.exports = route;