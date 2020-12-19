import Vehicle from './../../model/Vehicle';

import { Response, Request } from "express";
import ControllerInterface from "./../../types/Controller";
import VehicleSearch from '../../types/VehicleSearch';
import VehicleType from '../../types/Vehicle';
import VehicleSearchResponse from '../../types/VehicleSearchResponse';

export default class SearchController implements ControllerInterface {
    readonly req;
    readonly res;

    constructor(req: Request , res: Response){
        this.req = req;
        this.res = res;
    }

    async run() {
        const vehicleSearch: VehicleSearch = this.req.body;
        if (vehicleSearch.registrationNumber){
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
            }
            else {
                const out: VehicleSearchResponse = {
                    authorized: false
                }
                this.res.status(401).json(out);
            }
        }
        else {
            this.res.status(400).json({
                "message": "Please provide registrationNumber key in the body of POST request with proper value"
            })
        }
        return true;
    }
}