import { Document } from "mongoose";

export default interface VehicleSearchLog extends Document {
    possibleRegistrationNumber?: String
}