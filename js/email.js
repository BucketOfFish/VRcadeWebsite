function submit_email() {
    var emails = firebase.database().ref('emails');
    emails.push({email: document.getElementById('email').value});
    document.getElementById('submit').innerHTML = 'THANK YOU!';
    document.getElementById('email').value = 'YOU WILL BE NOTIFIED WHEN WE OPEN!';
    $(document.getElementById('submit')).attr("disabled", "disabled");
    document.body.style.background = "#A2C7E5";
}
