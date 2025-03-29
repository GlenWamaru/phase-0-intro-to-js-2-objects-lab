// Write your solution in this file!
const employee = {
    name: "James",
    streetAddress: "Jericho",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = { ...obj };

    newObj[key] = value;
  
    return newObj;
};

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "mexico street",
)

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

    return obj;
}

const anotherEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
);

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
};

const anotherNewEmployee = deleteFromEmployeeByKey(
    employee,
    "street address",

);

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;       
}

const newestEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");

console.log(employee);  
console.log(newestEmployee);  
