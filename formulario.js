document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    if(name && email && message) {
        alert('Form Submitted Successfully!\n' + 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
        document.getElementById('ciroactivecar@gmail.com').reset(); // Reseteando el formulario después de enviar
    } else {
        alert('Please fill in all fields');
    }
});
