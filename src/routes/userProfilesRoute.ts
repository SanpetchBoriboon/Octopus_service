import express, { Request, Response } from 'express';
import UserProfileModel from '../models/userProfileModel';

class UserProfilesRoute {
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/getProfiles', this.getProfiles.bind(this));
        this.router.get('/getProfile/:Id', this.getProfile.bind(this));
        this.router.post('/newProfile', this.newProfile.bind(this));
        this.router.put('/updateProfile/:Id', this.updateProfile.bind(this));
    }

    private async getProfiles(_req: Request, res: Response): Promise<void> {
        try {
            const userProfiles = await UserProfileModel.find({});
            res.json(userProfiles);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    private async getProfile(req: Request, res: Response): Promise<void> {
        const { Id } = req.params;
        try {
            const userProfile = await UserProfileModel.findOne({ userId: Id });
            if (!userProfile) {
                res.json(null);
            }
            res.json(userProfile);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    private async newProfile(req: Request, res: Response): Promise<void> {
        const { userId, settingLanguage } = req.body;
        const newUserProfile = new UserProfileModel({
            userId,
            settingLanguage,
        });

        try {
            const userProfile = await newUserProfile.save();
            res.json(userProfile);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    private async updateProfile(req: Request, res: Response): Promise<void> {
        const { Id } = req.params;
        const { settingLanguage } = req.body;

        try {
            const userProfile = await UserProfileModel.findOneAndUpdate({ userId: Id }, { settingLanguage }, { new: true });
            res.json(userProfile);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

export default new UserProfilesRoute().router;
