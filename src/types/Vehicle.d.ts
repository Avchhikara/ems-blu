import { Document } from "mongoose";

export default interface Vehicle extends Document {
    registrationNumber?: String,
    userId?: String
}