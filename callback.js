// setTimeout(() => {
// console.log("Merhaba");
// },5000)

// setInterval(() => {
// console.log("Merhaba ben her saniye çalışacağım");
// }, 1000);

// const sayHi = (cb) => {
//     cb()
// }

// sayHi(() => {
//     console.log("Hello")
// })

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then(users => {
        console.log("Users Yuklendi!", users);

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(data => data.json())
            .then(post1 => {
                console.log("Post 1 Yuklendi!", post1)

                fetch("https://jsonplaceholder.typicode.com/posts/2")
                    .then(data => data.json())
                    .then(post2 => console.log("Post 2 Yuklendi!", post2))
            }

            )
    })