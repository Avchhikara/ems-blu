import Vehicle from './../../model/Vehicle';

import { Response, Request } from "express";
import VehicleSearchLog from "./../../model/VehicleSearchLog";
import ControllerInterface from "./../../types/Controller";
import VehicleSearch from '../../types/VehicleSearch';
import VehicleType from '../../types/Vehicle';
import VehicleSearchResponse from '../../types/VehicleSearchResponse';
import { Socket } from 'dgram';

export default class SearchController implements ControllerInterface {
    readonly req;
    readonly res;
    readonly io;

    constructor(req: Request , res: Response, io: Socket){
        this.req = req;
        this.res = res;
        this.io = io;
    }

    async run() {
        const vehicleSearch: VehicleSearch = this.req.body;
        this.io.emit("update", {
            message: "Search request received for " + JSON.stringify(vehicleSearch)
        })
        if (vehicleSearch.registrationNumber){
            this.io.emit("update", {
                message: "Started searching for " + vehicleSearch.registrationNumber
            })
            const vehicles: VehicleType[] = await Vehicle.find({
                registrationNumber: vehicleSearch.registrationNumber
            }, {
                _id: 0,
                userId: 0,
                __v: 0
            })
            if (vehicles.length === 1){
                const vehicle: VehicleType = vehicles[0];
                const out: VehicleSearchResponse = {
                    authorized: true,
                    vehicle
                }
                this.res.status(200).json(out);
                this.io.emit("update", {
                    message: "Vehicle with no. " + vehicleSearch.registrationNumber + " is authorized so, sending the same as response"
                });
            }
            else {
                const out: VehicleSearchResponse = {
                    authorized: false
                }
                this.res.status(401).json(out);
                this.io.emit("update", {
                    message: "Vehicle with no. " + vehicleSearch.registrationNumber + " is not authorized so, sending the same as response"
                });
            }
        }
        else {
            this.res.status(400).json({
                "message": "Please provide registrationNumber key in the body of POST request with proper value"
            });
            this.io.emit("update", {
                message: "registrationNumber is not provided so, sending the same as response"
            });
        }
        // Saving logs
        const log = new VehicleSearchLog({
            possibleRegistrationNumber: vehicleSearch.registrationNumber
        });
        await log.save();
        this.io.emit("update", {
            message: "Search log for " + vehicleSearch.registrationNumber + " is saved."
        });

        return true;
    }
}