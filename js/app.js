let eye=document.querySelector('.eye')
let pass= document.querySelector('#password')

eye.addEventListener('click', ()=>{
    switch (pass.type) {
        case 'password':
            pass.type='text';
            eye.src='image/O-eye.png';
            break;
        case 'text':
            pass.type='password';
            eye.src='image/C-eye.png';
            break;
    
        default:
            break;
    }
})