// I grabbed the bulk of this code from module 14
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#review').value;
    const photo = document.querySelector('#image').value;
    // const username - how would we grab this? 
    // getting a session data if they are logged in

    // what is the appropriate api route we need to use?
    if (title && description && photo) {
        const response = await fetch(`/api/posts/`, {
            method: 'post',
            body: JSON.stringify({
                title,
                description,
                photo
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log(response)
            // sends you back to the home page
            // document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.post-form-btn').addEventListener('click', newFormHandler);