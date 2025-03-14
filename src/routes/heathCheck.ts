import express, { Request, Response } from 'express';

class HeathCheckRoute {
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.heathCheck.bind(this));
        this.router.get('/ping', this.ping.bind(this));
    }

    private async heathCheck(_req: Request, res: Response): Promise<void> {
        try {
            res.json({
                status: 'Healthy',
            });
        } catch (err) {
            res.status(400).json(err);
        }
    }

    private async ping(_req: Request, res: Response): Promise<void> {
        try {
            res.json({
                status: 'Pong Health Check',
            });
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

export default new HeathCheckRoute().router;
