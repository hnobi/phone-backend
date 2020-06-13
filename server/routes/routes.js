import express from 'express';
import Phones from '../controllers/phone';
import asyncHelper from "./../utils/asynHerlper";

const router = express.Router();

router.route("/phones").get(asyncHelper(Phones.getRequests));
  

export default router;
