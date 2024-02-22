
let a = { name: "siraj", age: 5 };
let b = { age: 5, name: "siraj" };



function compare(obj1, obj2) {
    return (obj1.name === obj2.name) ? true : (obj1.age === obj2.age)
        ? true : false;

};

console.log(compare(a, b));
