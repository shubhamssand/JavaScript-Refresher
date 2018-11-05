function computeSalary(employee){
 
    //Specifying default values
    var{name,baseSalary=100000,incentive=5}=employee; //Array destructuring 

    var finalSalary=(baseSalary*(100+incentive))/100;

    return finalSalary;
}


EmployeeSalary=computeSalary({name:"shubham",baseSalary:150000});

console.log("The final salary of employee is" +" "+EmployeeSalary+" "+"$");