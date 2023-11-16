// setTimeout(() => {
//     console.log("merhaba")
// },5000)

// setInterval (() => {
//     console.log("1 saniye aralıklarla tekrar ederim, lütfen durdur beni")
// },1000)

// const sayHello = (cb) => {
//     cb();
// };
// sayHello(() => {
//     console.log("Hello")
//  })



// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(data => data.json())
//       .then((users) => {
//         console.log("users yüklendi", users);
//         fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(data => data.json())
//         .then(posts => console.log("Post 1 yüklendi", posts));
//         fetch('https://jsonplaceholder.typicode.com/posts/2')
//         .then(data => data.json())
//         .then(posts => console.log("Post 2 yüklendi", posts))
//       });



// async function getData()  {
//     const data = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("user",data);
//     console.log("post1",post1);  
//     console.log("post2",post2);
// };

// getData()


// (async() => {
//     const data = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("user",data);
//     console.log("post1",post1);
//     console.log("post2",post2);
// })();

const getUsers = (number) => {
    return new Promise(async (resolve, reject) => {
        const data = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();

        resolve(data);
    });
};

const getPosts = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const data = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

        resolve(data);
    });
};

// (async () => {
//     try {
//         const users = await getUsers();
//     const post = await getPosts(1);

//     console.log(users);
//     console.log(post);
//     } catch(e) {
//         console.log(e);
//     }
// })();


Promise.all([getUsers(), getPosts(1)])
    .then(console.log)
    .catch(console.log);