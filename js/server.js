const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('.'))
app.use(express.json())

app.get('/', (req, res) => {
    console.log('hi!')
    //res.sendFile('/contacted.html')
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'xxxx@gmail.com',
            pass: 'xxxx'
            }
    })

    const mailOptions = {
        from: req.body.mail,
        to: 'alice@aisys.dev',
        subject: `Message from ${req.body.mail}: ${req.body.contacTreason}`,
        texT: req.body.subject

    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Mail sent!');
        }
    });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})