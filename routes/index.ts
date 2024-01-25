import express from "express";
import {homePage} from '../controllers/studentsController'

const router = express.Router();

router.get("/", homePage);

export default router;