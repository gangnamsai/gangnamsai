function ClearFields(){
    document.getElementById("email_id").value = "";
    document.getElementById("password_id").value = "";
    document.getElementById("message").value = "";
}
function submit(){
    alert("Success!")
}

/*Email Js */
const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_7t8p6eg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});