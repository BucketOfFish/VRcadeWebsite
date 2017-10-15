$('.submit').on('click', function () {
    var emails= firebase.database().ref('emails');
    emails.push({email: 'new@email.com'})
});
