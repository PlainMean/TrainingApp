const getTodos = (log_func) => {
    var xhr = new XMLHttpRequest();
    var error;
    var data;

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                error = undefined;
                data = xhr.responseText;
            } else {
                error = "could not fetch data";
                data = undefined;
            }
            log_func(error, data);
        }
    });

    xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1')
    xhr.send()
}

const log_func = (error, data) => {
    console.log("running log func (callback)")
    console.log(error)
    console.log(data)
} // in this case passing the log function

getTodos(
    log_func
);



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => {
//         data = json;
//         console.log(data);
//     });

// console.log("NOW DATA IN VAR")
// console.log("data is:" + data)


// console.log('Outputing js');

// let my_func = (a, b) => {
//     console.log(a)
//     console.log(b)
// }

// // my_func("world", "hello")

// let prom = new Promise(
//     (resolve, reject) => {
//         let a = 1 + 1
//         if (a == 2) {
//             resolve("SUCCESS")
//         } else {
//             reject("FAIL")
//         }
//     }
// )

// prom.then((message) => {
//     console.log("this was the resolve msg " + message)
// }).catch((message) => {
//     console.log("this was the reject msg " + message)
// })

// class User {
//     constructor(name, value) {
//         this.name = name;
//         this.value = value
//     }

//     greet = () => {
//         console.log("Hi " + this.name + "!")
//     }
// }

// var someUser = new User('carl', 10);

// // console.log(someUser)


// console.log("####################")
// console.log("# CURRENT LOCATION #")
// console.log("####################")

// someUser.greet()

// var val = document.getElementById("page-title");

// val.onclick = () => {
//     alert("This always has the value " + always);
// }

// var subtitle = document.getElementById("sub-title");
// val.onmouseover = () => {
//     console.log("hovered subtitle")
// }


// console.log("###############")
// console.log("# END OF FILE #")
// console.log("###############")

