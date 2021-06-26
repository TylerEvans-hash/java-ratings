async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const description = document.querySelector('#post-description').value;
    const imageData = document.getElementById('image');

    const formData = new FormData();
    formData.append('image', imageData.files[0]);
    formData.append('title', title);
    formData.append('description', description);

    if (title && description && image) {
        const response = await fetch(`/api/posts/`, {
            method: 'post',
            body: formData
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.post-form-btn').addEventListener('click', newFormHandler);