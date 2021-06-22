// I grabbed the bulk of this code from module 14
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const photo = document.querySelector('input[name="image"]').value;
    // const username - how would we grab this?

    // what is the appropriate api route we need to use?
    const response = await fetch(`/api/posts`, {
        method: 'POST',
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
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.post-form').addEventListener('submit', newFormHandler);