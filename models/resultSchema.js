import mongoose from "mongoose";
const {Schema} = mongoose;

//  question model
const resultModel = new Schema({
    username: {
        type: String,
  
    },
    result: {
        type: Array,
        default : []
    },
    attempts : {
        type: Number,
        default: 0
    },
    points: {
        type: Number,
        default: 0
    },
    achieved : {
        type : String,
        default: ''
    },
    // data created ..
    createdAt : {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model('result', resultModel)