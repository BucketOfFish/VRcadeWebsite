function submit_email() {
    var emails= firebase.database().ref('emails');
    emails.push({email: 'new@email.com'})
});
