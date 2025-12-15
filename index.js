const express = require("express");
const studentsController = require("./controllers/students.controller");
const studentsRoutes = require("./models/studentsRouter.js");

const app = express();
const port = 3000;

app.use(express.json());


app.get("/students", studentsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
