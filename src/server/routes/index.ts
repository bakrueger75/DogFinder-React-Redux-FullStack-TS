import { Router } from 'express';
import htmlRouter from './html';
import apiRouter from './api';

const router = Router();

//router.use('/api', apiRouter);

router.use('/', htmlRouter);

export default router;

