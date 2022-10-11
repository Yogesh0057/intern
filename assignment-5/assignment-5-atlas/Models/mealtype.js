const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const mealtypeSchema = new Schema({
    _id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    meal_type: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('mealSample', mealtypeSchema, 'mealtype');