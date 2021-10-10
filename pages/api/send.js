const sgMail = require(@sendgrid/mail);

export default async function (request, response) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { email, message} = request.body;

    const content = {
        to: process.env.TO_EMAIL_ADDRESS,
        from: process.env.FROM_EMAIL_ADDRESS,
        subject: 'New message from - ${email}',
        text: message,
        html: `<p>${message}</p>`
    };

    try {
        await sgMail.send(content);
        response.status(200).send('Message sent successfully');
    } catch (error) {
        console.log('Error', error);
        response.status(400).send('Message not sent.');
    }
}