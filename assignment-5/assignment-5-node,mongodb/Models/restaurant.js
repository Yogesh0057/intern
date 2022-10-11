const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    _id:{
        type:Number,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
    locality:{
        type: String,
        required:true
    },
    thumb:{
        type:String,
        required:true
    },
    aggregate_rating:{
        type:Number,
        required:true
    },
    rating_text:{
        type:Number,
        required:true
    },
    min_price:{
        type:Number,
        required:true
    }
    
})
//const rest=restaurantSchema.filter(value=>value.name)
module.exports = mongoose.model('restaurantSample', restaurantSchema, 'restaurants');