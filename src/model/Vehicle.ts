import { Schema, model } from "mongoose";
import Vehicle from "../types/Vehicle";

const vehicleSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: false
    }
});

export default model<Vehicle>("Vehicle", vehicleSchema);