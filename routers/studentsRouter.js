const express = require('express');
const router = express.Router();


app.get("/students", studentsController.getStudents);
app.get("/students/:id", studentsController.getStudentById);
app.put("/students/:id", studentsController.updateStudent);
app.post("/students", studentsController.addStudent);
app.delete("/students/:id", studentsController.removeStudent);
