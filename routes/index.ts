import express from "express";
import { Router } from "express";
import { showStudents, createStudent, editStudent, updateStudent, deleteStudent } from '../controllers/studentsController'

const router = express.Router();

router.get("/", showStudents);
router.post("/add", createStudent);
router.get("/update/:id", editStudent);
router.post("/update/:id", updateStudent);
router.get("/delete/:id", deleteStudent);

export default router;