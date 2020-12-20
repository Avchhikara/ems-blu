import HomeController from './controller/Home';
import SearchController from './controller/Search';
import SaveController from "./controller/Save"

import { Express } from 'express';
import RoutesInterface from './types/routes';
import { Socket } from 'dgram';

export default class Routes implements RoutesInterface {
    constructor(app: Express, io: Socket) {
        app.get("/", async (req, res) => {
            const homeController = new HomeController(req, res, io);
            await homeController.run();
        })
        app.post("/search", async (req, res) => {
            const searchController = new SearchController(req, res, io);
            await searchController.run();
        })
        // Only used for testing
        app.post("/save", async (req, res) => {
            const saveController = new SaveController(req, res, io);
            await saveController.run();
        })
    }

}