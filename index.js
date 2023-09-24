var http = require("http");
const EmployeeModule = require("./employee");
console.log("Lab 03 -  NodeJs");

// Define Server Port
const port = process.env.PORT || 8081; 

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { "Content-Type": "application/json" }); // Set the correct status code
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === '/') {
            // TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Welcome to Lab Exercise 03</h1>");

        } else if (req.url === '/employee') {
            // TODO - Display all details for employees in JSON format
            const employees = EmployeeModule.getAllEmployees();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(employees));

        } else if (req.url === '/employee/names') {
            // TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            // e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const employeeNames = EmployeeModule.getSortedEmployeeNames(); // Use the correct function
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(employeeNames));
            
        } else if (req.url === '/employee/totalsalary') {
            // TODO - Display Sum of all employees' salary in given JSON format 
            // e.g. { "total_salary" : 100 }  
            const totalSalary = EmployeeModule.getTotalSalary(); // Use the correct function
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ total_salary: totalSalary }));
        } else {
            // Handle the case where none of the predefined routes match
            res.writeHead(404, { "Content-Type": "application/json" }); // Set the correct status code
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
        }
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
