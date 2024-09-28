import { Response, Request } from "express";
import CategoryModel from "../models/CategoryModel";

export const createCategory = async (req: Request, res: Response) =>{
    const name = req.body.name;

    try{
        const category = new CategoryModel();
        category.name = name;
        await category.save();

        return res.status(201).json(category);
    }catch(error:any){
        return res.status(500).json({message: error.message})
    }
}

export const getCategory = async (req: Request, res: Response)=>{
    const categories = await CategoryModel.find();

    return res.status(201).json(categories);
}