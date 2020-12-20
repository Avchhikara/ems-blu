import { Socket } from "dgram";
import { Request, Response } from "express";

export default interface Controller {
    readonly req: Request,
    readonly res: Response,
    readonly io: Socket
    run(): Promise
}