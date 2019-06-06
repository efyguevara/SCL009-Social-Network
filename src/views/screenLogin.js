// Pantalla que muestra el formulario de ingreso.
import { login } from '../assets/js/authFirebase.js';
import { authGoogle } from '../assets/js/authFirebase.js';
import { screenAuth } from './screenAuth.js';
import { screenHome } from './screenHome.js';
import { validateLogin, validateEmail } from '../assets/js/validateLogin.js';

export const screenLogin = () => {
  document.getElementById('root').innerHTML =
  `
  <form>
    <h2>Iniciar Sesión</h2>
    <input type="email" id="email_Login" placeholder="&#128272; Correo" name="email">
    <p id="error-mail"></p>
    <input type="password" id="password_Login" placeholder="&#128272; Contraseña" name="password" >
    <p id="error-password"></p>
    <button type="button" id="buttonGoogle" value="Entrar con Google">Entrar con Google</button>
    <button type="button" id="btn-login" value="Entrar">Entrar</button>

    <button type="button" id="btn-Registro" value="Registrarse">Registrarse</button>
  </form>
  `;
// 
  // Evento para ingresar con cuenta de correo de google.
  let errMail = "Por favor ingresa un email valido";
  document.getElementById('btn-login').addEventListener('click', () => {
  
  let emailLogin = document.getElementById("email_Login").value;
  let passwordLogin = document.getElementById("password_Login").value;
  login(emailLogin, passwordLogin); 

  //intentando que la validacion del validateLogin pase los datos a firebase para que pueda iniciar sesion solo si pasa las validaciones.
  if (validateLogin === false || validateEmail === false) {
    document.getElementById("error-mail").innerHTML = `${errMail}`; 
    console.log("daselo todo a agatha");
  }else{  
  screenHome();
  window.location.hash = '#/home'
  }
});
  document.getElementById('buttonGoogle').addEventListener('click', () => {
    authGoogle();
    screenHome();
    window.location.hash = '#/home'
  });

  document.getElementById("btn-Registro").addEventListener('click', () => {
    screenAuth();
    window.location.hash = '#/auth'
  });
//Creando evento que llama a la función de registro
};
