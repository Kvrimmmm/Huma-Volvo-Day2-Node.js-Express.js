// Task 4
import express from "express";
import 
{ 
    getStudents, 
    getStudentById, 
    addStudent, 
    updateStudent, 
    deleteStudent 
} from "../Controllers/student.controller.js";

const router = express.Router();

router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.post("/students", addStudent);
router.put("/students", updateStudent);
router.delete("/students", deleteStudent);

export default router;