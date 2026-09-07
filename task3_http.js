// Task 3
import http from "http";

let students = 
[
    { id: 1, name: "Ahmed", age: 20 },
    { id: 2, name: "Sara", age: 21 }
];

const server = http.createServer((req, res) => 
{
    if (req.url === "/students" && req.method === "GET") 
    {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(students));
    } else if (req.url === "/students" && req.method === "POST") 
    {
        let body = "";
        req.on("data", chunk => body += chunk.toString());
        req.on("end", () => 
        {
            const newStudent = JSON.parse(body);
            students.push(newStudent);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify(students));
        });
    } else if (req.url === "/students" && req.method === "PUT")
    {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Student updated" }));
    } else if (req.url === "/students" && req.method === "DELETE")
    {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Student deleted" }));
    }
});

server.listen(3001, () => console.log("Native HTTP running on 3001"));