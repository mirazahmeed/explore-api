// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

function call() {
    fetch("https://jsonplaceholder.typicode.com/users") //get the users info form the url,
        .then((res) => res.json()) //convert the users info into a json object,
        .then((data) => {
            console.log(data); // then show the json object or as a data
        });
}


