const load =()=>{
    const email = document.getElementById('email');
    let placeholder = document.getElementById('email').placeholder;
    const form = document.getElementById('form');

    form.addEventListener('submit',(e)=>{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        e.preventDefault();
        console.log(email.value.match(mailformat))
        if(!(email.value.match(mailformat)) || email.value == ''){
            email.classList.add('error');
            email.placeholder = 'Whoops! Invalid email';
        }else{
            email.classList.remove('error');
            email.placeholder = placeholder;
        }
    })
}
load();