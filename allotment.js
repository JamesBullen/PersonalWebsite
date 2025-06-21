const popover = document.getElementById('popover');

function sendEmail() {
    let params = {
        name: document.getElementById('fName').value,
        email: document.getElementById('fEmail').value,
        message: document.getElementById('fMessage').value
    }
    emailjs.send('service_fil2m7h', 'template_bcijrbn', params, {publicKey: 'xK7LzzgHH50GpxlVv'}).then((response) => {
    console.log('SUCCESS', response.status, response.text); popover.showPopover()},
    (error) => {console.log('FAILED', error);},)

    resetForm();
};

function resetForm() {
    document.getElementById('fName').value = "";
    document.getElementById('fEmail').value = "";
    document.getElementById('fMessage').value = "";
};