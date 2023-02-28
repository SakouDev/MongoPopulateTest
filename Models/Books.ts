import mongoose from 'mongoose'
import { History } from './History'

export const itemSchema = new mongoose.Schema({
    type: {
        type: String,
    },
    // ETAT ??????

    history: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "History" 
    }],
},
{ timestamps: true }
)

export const Item = mongoose.model('Item', itemSchema)