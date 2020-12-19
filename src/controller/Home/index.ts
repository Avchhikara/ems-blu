import { Response, Request } from "express";
import ControllerInterface from "./../../types/Controller";

export default class HomeController implements ControllerInterface {
    readonly req;
    readonly res;

    constructor(req: Request , res: Response){
        this.req = req;
        this.res = res;
    }

    async run() {
        this.res.send('hello');
        return true;
    }

}