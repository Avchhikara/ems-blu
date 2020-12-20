import { Socket } from "dgram";
import { Response, Request } from "express";
import ControllerInterface from "./../../types/Controller";

export default class HomeController implements ControllerInterface {
    readonly req;
    readonly res;
    readonly io;

    constructor(req: Request , res: Response, io: Socket){
        this.req = req;
        this.res = res;
        this.io = io;
    }

    async run() {
        this.res.sendFile("/static/index.html");
        return true;
    }

}