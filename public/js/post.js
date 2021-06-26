async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#review').value;
    const file = document.querySelector('#image').value;

    if (title && description && file) {
        const response = await fetch(`/api/posts/`, {
            method: 'post',
            body: JSON.stringify({
                title,
                description,
                file,
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.post-form-btn').addEventListener('click', newFormHandler);