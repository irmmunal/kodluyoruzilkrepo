const users = [{
    name: "a",
    age: 20
},
{
    name: "b",
    age: 30
},
{
    name: "c",
    age: 40
}];

users.map((e) => {
    console.log(e.name);
});

const result = users.find((item) => item.name === "a");
console.log(result.name);

const filtered = users.filter((item) => item.name === "b" || item.age<40);
console.log(filtered);

const some = users.some((item) => item.name === "b" || item.age<40);
console.log(some);

const every = users.includes((item) => item.name === "b" || item.age<40);
console.log(every)