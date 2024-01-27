import { Request, Response } from "express";
import { pool } from "../config/db";

const showStudents = async (req: Request, res: Response) => {
    const [rows] = await pool.query("SELECT * FROM students");
    res.render("index", {
        title: "Home",
        students: rows
    });
};

const createStudent = async (req: Request, res: Response) => {
    const newStudent = req.body;
    await pool.query("INSERT INTO students SET ?", [newStudent]);
    res.redirect("/");
}

const editStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM students WHERE id = ?", [id]);
    res.render("edit", {
        student: result
    });
}

const updateStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedStudent = req.body;
    console.log(updatedStudent);
    await pool.query("UPDATE students SET ? WHERE id = ?", [updatedStudent, id]);
    res.redirect("/");
}

const deleteStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    await pool.query("DELETE FROM students WHERE id = ?", [id]);
    res.redirect("/");
}

export {
    showStudents,
    createStudent,
    editStudent,
    updateStudent,
    deleteStudent
}