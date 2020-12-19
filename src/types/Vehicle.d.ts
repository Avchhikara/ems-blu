import { Document } from "mongoose";

export default interface Vehicle extends Document {
    owner?: String,
    registrationNumber?: String
}