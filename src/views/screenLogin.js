// Pantalla que muestra el formulario de ingreso.
import { login } from '../assets/js/authFirebase.js';
import { authGoogle } from '../assets/js/authFirebase.js';
import { validateEmail, validatePassword } from '../assets/js/validateLogin.js';
import { screenAuth } from './screenAuth.js';

export const screenLogin = () => {
  document.getElementById('root').innerHTML =
    `
  <div class="center">
    <a href="#"> <img src="assets/img/petlogo.png" alt="Logo Pet Lovers"></a>
  </div>
  <div id="containerForm" class="container">
  <form>
    <h2>Iniciar Sesión</h2>
    <input type="email" id="email_Login" placeholder="&#128272; Correo" name="email">
    <p id="error-mail"></p>
    <input type="password" id="password_Login" placeholder="&#128272; Contraseña" name="password" >
    <p id="error-password"></p>
    <button type="button" id="buttonGoogle" value="Entrar con Google">Entrar con Google</button>
    <button type="button" id="btn-login" value="Entrar">Entrar</button>

    <button type="button" id="btn-Registro">Registrarse</button>
  </form>
  </div>
  `;
  // 
  // Evento para ingresar con cuenta de correo de google.
  document.getElementById('buttonGoogle').addEventListener('click', () => {
    authGoogle();
  });

  document.getElementById("btn-Registro").addEventListener('click', () => {
    
    window.location.hash = '#/auth'
    
  });




  document.getElementById('btn-login').addEventListener('click', () => {
    let errMail = "Por favor ingresa un email valido";
    let errPass = "Por favor ingresa una contraseña valida";

    let emailLogin = document.getElementById("email_Login").value;
    let passwordLogin = document.getElementById("password_Login").value;

    let resultValidateEmail = validateEmail(emailLogin);
    let resultValidatePassword = validatePassword(passwordLogin);

    //intentando que la validacion del validateLogin pase los datos a firebase para que pueda iniciar sesion solo si pasa las validaciones.
    if (resultValidateEmail === true && resultValidatePassword === true) {
      login(emailLogin, passwordLogin);
    }
    if (resultValidateEmail === false) {
      document.getElementById("error-mail").innerHTML = `${errMail}`;
      console.log("daselo todo a agatha");
    }
    if (resultValidatePassword === false) {
      document.getElementById("error-password").innerHTML = `${errPass}`;
    }
  });

};
