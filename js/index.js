function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            displayUser(data);
        });
}

function displayUser(users) {
    const ul = document.getElementById("ul-container");
    for (const user of users) {
        const li = document.createElement("li");
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

////////////////////////////////////////////////////////////////
function deletePost() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
    });
}

function patchAPost() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        body: JSON.stringify({
            title: "foo",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createAPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
