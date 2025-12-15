const express = require('express');
const router = express.Router();


router.get("/students", studentsController.getStudents);
router.get("/students/:id", studentsController.getStudentById);
router.put("/students/:id", studentsController.updateStudent);
router.post("/students", studentsController.addStudent);
router.delete("/students/:id", studentsController.removeStudent);

module.exports = router;
