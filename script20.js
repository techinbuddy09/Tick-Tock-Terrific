let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let audio = document.getElementById('background-music');
let sendButton = document.getElementById('send-button');
let messageInput = document.getElementById('message-input');

function displayTime() {
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);

document.body.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    }
    audio.loop = true;
});

sendButton.addEventListener('click', () => {
    let message = messageInput.value;
    let recipientEmail = "recipient@example.com"; // Replace with the desired email address
    let subject = "Message from Analog Clock App";
    let body = encodeURIComponent(message);
    let mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
});

//Added an event listener to the Send button.
//When the button is clicked, the text from the textarea is retrieved and a mailto link is generated to open the user's email client with the recipient email, subject, and body pre-filled.
//Replace "recipient@example.com" with the actual email address where you want to send the messages. This implementation uses the mailto: protocol to send emails, which will open the default email client on the user's device.
