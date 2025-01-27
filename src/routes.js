import { Router } from "express";
import homeController from './controllers/home-controller.js';

const router = Router();

router.use(homeController);

router.get('*', (req, res) => {
    res.render('404');
});


export default router;