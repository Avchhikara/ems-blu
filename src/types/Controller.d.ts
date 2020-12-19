import { Request, Response } from "express";

export default interface Controller {
    readonly req: Request,
    readonly res: Response,
    run(): Promise
}