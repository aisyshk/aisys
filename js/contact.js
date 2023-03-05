const form = document.querySelector('form');

let name = document.getElementById('name');
let mail = document.getElementById('mail');
let contactReason = document.getElementById('contactReason');
let subject = document.getElementById('subject');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        mail: mail.value,
        contactReason: contactReason.value,
        subject: subject.value
    }

    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);

        if (xhr.responseText == 'success') {
            alert('Email sent');
            name.value = '';
            mail.value = '';
            contactReason.value = '';
            subject.value = '';
        }
    }

    xhr.send(JSON.stringify(formData));
})