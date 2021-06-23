// I grabbed the bulk of this code from module 14
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const photo = document.querySelector('input[name="image"]').value;
    // const username - how would we grab this? 
    // getting a session data if they are logged in

    // what is the appropriate api route we need to use?
    const response = await fetch(`/api/posts`, {
        method: 'post',
        body: JSON.stringify({
            title,
            description,
            photo,
            username
        }),
        headers: {
            'Content-Type': 'application/json'
            // not sure what this means
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.post-form-btn').addEventListener('click', newFormHandler);