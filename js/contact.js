const form = document.querySelector('form');

let name = document.getElementById('name');
let mail = document.getElementById('mail');
let contactReason = document.getElementById('contactReason');
let subject = document.getElementById('subject');
let date = Date.now().toString();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        mail: mail.value,
        contactReason: contactReason.value,
        subject: subject.value
    }
    console.log(formData);

    var fileToSave = new Blob([JSON.stringify(formData)], {
        type: 'application/json'
    });
})