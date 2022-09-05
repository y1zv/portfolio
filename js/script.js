//content form 
function sendMail(params) {
    const tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value
    };
    if(tempParams.from_name == '' || tempParams.message === '' || tempParams.to_name === '') {
        alert("please enter your informations")
    } else {
        emailjs.send('service_6bhhof4','template_aud5bth',tempParams)
    }
};
//end


// toggle btr for the navbar

const toggleBtr = document.getElementsByClassName('toggle-btr')[0];
const navLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtr.addEventListener('click', () => {
    navLinks.classList.toggle('active');
} )

//end