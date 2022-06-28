const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password_confirmation = document.querySelector('#password_confirmation');
const register = document.querySelector('#register');
const message = document.querySelector('#message');

function getValues(){
    const email_value = email.value;
    const password_value = password.value;
    const password_confirmation_value = password_confirmation.value;
    return {
        email: email_value,
        password: password_value,
        password_confirmation: password_confirmation_value
    }
}

register.addEventListener('click', () => {
    const values = getValues();

    if (values.email === '' || values.password === '' || values.              password_confirmation === '') {
        message.textContent = 'Llena todos los campos';
        setTimeout(() => {
          message.textContent = '';
        }, 2200);
      }else
      
      if (values.password !== values.password_confirmation) {
        message.textContent = 'Las contraseñas no coinciden';
        setTimeout(() => {
          message.textContent = '';
        }, 2200);
      }else{
        localStorage.setItem("correo_user", JSON.stringify(values.email));
        localStorage.setItem("password_user", JSON.stringify(values.password));
        message.textContent = '¡Registrado correctamente!';
        setTimeout(() => {
          window.location.href = "./login.html";
        
        }, 2200);
      }
      
})
