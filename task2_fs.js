// Task 2 & Bonus 2
import fs from "fs";

fs.writeFile("data.txt", "First content\n", (err) => 
{
    if (err) throw err;
    fs.readFile("data.txt", "utf8", (err, data) => 
    {
        if (err) throw err;
        console.log(data);
        fs.appendFile("data.txt", "Second content", (err) => 
        {
            if (err) throw err;
            fs.readFile("data.txt", "utf8", (err, data) =>
            {
                if (err) throw err;
                console.log(data);
                fs.unlink("data.txt", (err) => 
                {
                    if (err) throw err;
                });
            });
        });
    });
});