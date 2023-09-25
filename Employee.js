let employees = [
  { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", salary: 5000 },
  { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", salary: 4000 },
  { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", salary: 5500 },
  { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", salary: 9000 }
];

module.exports = {
    
  getAllEmployees: function () {
    return employees;
  },

  
  getSortedEmployeeNames: function () {
    const sortedNames = employees.map(employee => `${employee.firstName} ${employee.lastName}`);
    return sortedNames.sort();
  },

  
  getTotalSalary: function () {
    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    return totalSalary;
  }
};
// module.exports = {
//   getAllEmployees: () => employees,
//   getSortedEmployeeNames: () => employees.map(employee => `${employee.firstName} ${employee.lastName}`).sort(),
//   getTotalSalary: () => employees.reduce((acc, employee) => acc + employee.salary, 0)
// };
