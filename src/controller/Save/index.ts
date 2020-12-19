import Vehicle from './../../model/Vehicle';

import { Response, Request } from "express";
import ControllerInterface from "./../../types/Controller";

export default class VehicleSaveController implements ControllerInterface {
    readonly req;
    readonly res;

    constructor(req: Request , res: Response){
        this.req = req;
        this.res = res;
    }

    async run() {
        const { owner, registrationNumber } = this.req.body;
        const vehicle = new Vehicle({
            owner,
            registrationNumber
        })
        await vehicle.save();
    }
}