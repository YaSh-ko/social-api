import express from 'express';
import { getEvents, addEvents } from '../controllers/events';

const router = express.Router()

router.get("/", getEvents)
router.post("/", addEvents)

export default router