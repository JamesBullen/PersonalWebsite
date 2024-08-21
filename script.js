// $("body").niceScroll();

$(document).ready(function(){
  $('.modal').modal();
  $('.collapsible').collapsible();
  $(".dropdown-trigger").dropdown({ hover: false });
});

function sendEmail() {
  let params = {
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  }
  emailjs.send('service_fil2m7h', 'template_w5e22hn', params).then((response) => {
    console.log('SUCCESS', response.status, response.text);
  },
  (error) => {
    console.log('FAILED', error);
  },)
};