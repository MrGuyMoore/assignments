/**
 * @return {boolean}
 */
function Employee(name,jobTitle,salary,status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;

    if(status === undefined){
         this.status = 'Part Time';
    }else{
        this.status = status
    }


}


Employee.prototype.printEmployeeForm = function () {
    console.log(this)
};

 var dave = new Employee('Dave', 'Cook','$3000','Fulltime');

 var bob = new Employee('Bob','Mechanic','$4000', );

 dave.printEmployeeForm();
 bob.printEmployeeForm();