// Task 4 & Bonus 1, 3
let students = 
[
    { id: 1, name: "Ahmed", age: 20 },
    { id: 2, name: "Sara", age: 21 }
];

export const getStudents = (req, res) =>
{
    if (req.query.id) {
        const student = students.find(s => s.id == req.query.id);
        return res.json(student || { message: "Student not found" });
    }
    res.json(students);
};

export const getStudentById = (req, res) =>
{
    const student = students.find(s => s.id == req.params.id);
    res.json(student || { message: "Student not found" });
};

export const addStudent = (req, res) => 
{
    students.push(req.body);
    res.status(201).json(students);
};

export const updateStudent = (req, res) => 
{
    res.json({ message: "Student updated successfully" });
};

export const deleteStudent = (req, res) =>
{
    res.json({ message: "Student deleted successfully" });
};