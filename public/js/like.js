async function likeHandler(event) {
    event.preventDefault();

    console.log(event.target);

    // Never figured out how to isolate the id of the post. The method below works in
    // the module because

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/posts/like', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.like-btn').addEventListener('click', likeHandler);