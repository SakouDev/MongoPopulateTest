import { History } from './../Models/History';

import { Request, Response } from "express"

const getHistory = async (req:Request, res: Response) => {
    const result = await History.find({})
    res.status(200).json({message : "All Historys!",result})
}

const getHistoryById = async (req:Request, res: Response) => {
    const result = await History.findById(req.params.id)
    res.status(200).json({message : "One book!",result})
}

const addHistory = async (req :Request, res: Response) => {

    // {
    //     "borrowDate" : "2023-02-20",
    //     "returnDate" : null,
    //     "association" :"mechsDuFootball",
    //     "user" : "Raom2"
    // }

    const result = await History.create(req.body)
    res.status(200).json({message : "Historys added!",result})
}
const updateHistory = async (req :Request, res: Response) => {
    const result = await History.findOneAndUpdate({_id : req.params.id}, req.body)
    res.status(200).json({message : "Historys Updated!",result})
}

const deleteHistory = async (req :Request, res: Response) => {
    const result = await History.deleteOne({_id : req.params.id})
    res.status(200).json({message : "Historys Deleted!",result})
}

export default {
    getHistory,
    getHistoryById,
    addHistory,
    updateHistory,
    deleteHistory
}