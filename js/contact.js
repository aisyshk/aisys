/*

    MIT License

Copyright(c) 2023 Alice H.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files(the "Software"), to deal
    in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

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

    // To Do
})