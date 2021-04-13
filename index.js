console.log(3 == "3");
console.log(3 === "3");
// the second comparison is false because the strict comparaison operator will be strict with values who are not of the same datatype.
// == ignores the datatype of variable.
// it is better to use === because this is less confusing.
// if we used = an error will appear because = is used to assign values not compaire. 


const test = true;
console.log(test === false) ? true : false;

let firstName, givenName;
firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);

// is priting the first option available. if the first option is not defined the second one will be-