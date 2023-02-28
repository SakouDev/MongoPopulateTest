
import { Request, Response } from "express"
import { Item } from "../Models/Books"

const getBook = async (req:Request, res: Response) => {
    const result = await Item.find({})
    res.status(200).json({message : "All Books!",result})
}

const getBookById = async (req:Request, res: Response) => {

// POPULATE LES ID DE HISTORY DANS ITEM


    const result = await Item.findById(req.params.id).populate('history')
    res.status(200).json({message : "One book!",result})
}

const addBook = async (req :Request, res: Response) => {
    const result = await Item.create(req.body)
    res.status(200).json({message : "Books added!",result})
}
const updateBook = async (req :Request, res: Response) => {

// HISTORY PUSH SA MARCHE
// {
//     "history" : "63fdfb75f93b2693f42de848"
// }

    const data:any = await Item.findById(req.params.id)

    data.history.push(req.body.history)
    data.save()
    
    res.status(200).json({message : "History pushed!",data})

}

const deleteBook = async (req :Request, res: Response) => {
    const result = await Item.deleteOne({_id : req.params.id})
    res.status(200).json({message : "Books Deleted!",result})
}

export default {
    getBook,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}