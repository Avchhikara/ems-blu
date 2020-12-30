import { Schema, model } from "mongoose";
import VehicleSearchLog from "../types/VehicleSearchLog";


const vehicleSearchLogSchema = new Schema({
    possibleRegistrationNumber: {
        type: String,
        required: true
    }
})

export default model<VehicleSearchLog>("VehicleSearchLog", vehicleSearchLogSchema);