import { Schema, model } from "mongoose";
import Vehicle from "../types/Vehicle";

const vehicleSchema = new Schema({
    registrationNumber: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: false
    }
});

export default model<Vehicle>("Vehicle", vehicleSchema);