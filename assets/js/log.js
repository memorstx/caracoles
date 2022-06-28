
const message = document.querySelector('#message');
const enter = document.querySelector('#enter');




enter.addEventListener('click', () => {
    const email_user = document.querySelector('#email_user').value;
    const password_user = document.querySelector('#password_user').value;
    const email_user_local = JSON.parse(localStorage.getItem("correo_user") || "[]");
    const password_user_local = JSON.parse(localStorage.getItem("password_user") || "[]");
    if (email_user === email_user_local && password_user === password_user_local) {
        message.textContent = '¡Bienvenido!';
        setTimeout(() => {
          window.location.href = "./home.html";
        }, 1200);
      }else{
        message.textContent = '¡Usuario o contraseña incorrectos!';
        setTimeout(() => {
          message.textContent = '';
        }, 2200);
      }
})