// destructuring
const employee = {
    firstName: 'Mark',
    lastName: 'Smith',
    email: 'm@gmail.com',
    age: 30,
    phone: 99999
}


// let firstName = employee.firstName;
// let lastName = employee.lastName;

//console.log(firstName)


let {  firstName, lastName } = employee;

console.log(firstName)
console.log(lastName);

