// FORMEVENTS

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback-info');
const pattern = /^[a-zA-Z0-9]{5,10}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    const user = form.username.value;
    if(pattern.test(user)){
        feedback.textContent = 'Username is valid!!!';
    }else{
        feedback.textContent = 'Username is invalid!!!';
    }

});

form.username.addEventListener('keyup', e => {
    if(pattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }else{
        form.username.setAttribute('class', 'error');
    }
});


