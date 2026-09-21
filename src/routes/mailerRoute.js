import express from 'express';
import sendMail from '../controllers/mailerController.js';
const router = express.Router();


router.post("/mailer",sendMail);

export default router;