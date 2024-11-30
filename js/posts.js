function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => displayPosts(data));
}

function displayPosts(posts) {
    const postContainer = document.getElementById("posts-container");
    for (const post of posts) {
        console.log(post)
        const  div = document.createElement("div");
        div.innerHTML = `
        <h3>User-${post.userId}</h3>
        <h4>Post title-${post.title}</h4>
        <p>Post Description-${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}

loadPosts();

