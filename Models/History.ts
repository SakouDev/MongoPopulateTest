import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
    {
        _id : {
            type : mongoose.Schema.Types.ObjectId,
            unique: true,
            default: () => new mongoose.Types.ObjectId()
        }, 
        borrowDate : {
            type : Date,
            required : true
        }, 
        returnDate : {
            type : mongoose.Schema.Types.Mixed,
            required : false,
            default: null
        },
        association: {
            type: String,
            required: true
        },
        // ETAT ??????
        user : {
            type : String,
            required : true
        }
    }
)

export const History = mongoose.model('History', historySchema)