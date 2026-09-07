// Task 4
import express from "express";
import studentRoutes from "./Routes/student.routes.js";

const app = express();

app.use(express.json());
app.use(studentRoutes);

app.listen(3000, () => 
{
    console.log("Express Server running on port 3000");
});