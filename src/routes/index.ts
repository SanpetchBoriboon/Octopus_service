import { Router } from 'express';
import profileRoutes from './userProfilesRoute';
import heathCheck from './heathCheck';

const routes = Router();

routes.use('/', profileRoutes);
routes.use('/', heathCheck)

export default routes;