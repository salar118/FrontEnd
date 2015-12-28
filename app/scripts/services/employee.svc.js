'use strict'

app.service('employeeSvc', function(){
  var Employee = function(name, age){
      this.name = name;
      this.age = age;
  };

  var getEmployees = function(){
    return [
      new Employee('salar', 43),
      new Employee('omid', 33),
      new Employee('roonak', 34)
    ];
  };

  //PUBLIC API
  this.Employee = Employee;
  this.getEmployees = getEmployees;
});
