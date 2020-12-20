import Vehicle from './../../model/Vehicle';

import { Response, Request } from "express";
import ControllerInterface from "./../../types/Controller";
import { Socket } from 'dgram';

export default class VehicleSaveController implements ControllerInterface {
    readonly req;
    readonly res;
    readonly io;

    constructor(req: Request , res: Response, io: Socket){
        this.req = req;
        this.res = res;
        this.io = io;
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