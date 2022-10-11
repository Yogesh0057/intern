const express = require('express');

const locationsController = require('../Controllers/locations')
const mealtypesController = require('../Controllers/mealtypes')
const restaurantsController = require('../Controllers/restaurants')

const route = express.Router();

route.get('/locations', locationsController.getLocations);
route.get('/mealtypes', mealtypesController.getMealtypes);
route.get('/restaurants/:city', restaurantsController.getRestaurantsByCity);

module.exports = route;