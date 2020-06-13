import express from 'express';
import Phone from '../controllers/phone';
import asyncHelper from "./../utils/asynHerlper";

const router = express.Router();

router.route("/phones").get(asyncHelper(Phone.getBuyRequest));
  

export default router;
