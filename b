Union Type:

In TypeScript, a union type is a powerful way to define a variable that can hold one of several specified types. Union type using the sysmbol '|' which denotes either this one or that one. This is useful when a value could have multiple types. It narrows down in conditional blocks and reduces runtime errors. Uniion allow functions to accept multiiple input type without needing  overloading.
const variable: string | number;

function processValue(value: string |number){
    if (typeof value ==="string"){
        console.log(value.toUpperCase()); 
    } else{
        console.log(value*2); 
    }
}

Union types give flexibility by allowing a variable to hold values of multiple types while still catching type errors early. TypeScript will raise an error if you try to assign a boolean to variable because it's not part of the declared union.


Intersection Type:

Intersection type combines multiple types into one. It denotes with symbol '&' which means this type and that type. This is useful in scenarios where an object or function needs to satisfy multiple constraints simultaneously. It enables more specific type constraints by combiining multiple  requiirements.

type Person = { name:string; age:number };
type Employee = { employeeId:number; position:string };

type EmployeeDetails = Person &Employee;

const employee: EmployeeDetails = {
    name: "Alice",
    age: 30,
    employeeId:123,
    position:"Developer",
};

EmployeeDetails must include properties from both Person and Employee ensuring the object has all required information.By combining types instead of redefining them intersection types promote code reusability. 