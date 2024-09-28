import mongoose, { Schema } from "mongoose";
import CategoryType from "../inerfaces/CategoryType";

const categorySchema = new Schema<CategoryType>({
    name: {
        type: String,
        required: true,
        trim: true // trim whitespaces at the end
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    updatedAt: {
        type: Date,
        default: Date.now 
    }
});

const CategoryModel = mongoose.model<CategoryType>('Category', categorySchema);  // Correct model name


export default CategoryModel; // similar to entity in Springboot