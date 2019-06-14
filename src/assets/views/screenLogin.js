//Pantalla que muestra el formulario de ingreso.
import { login, authGoogle, closed } from '../js/authFirebase.js';
import { validateEmail, validatePassword } from '../js/validateLogin.js';
import { screenResetPassword } from '../views/screenResetPassword.js';


export const screenLogin = () => {
  document.getElementById('root').innerHTML =
    `
    <section class="root-container">
        <div class="center">
            <a href="#"> <img src="assets/img/petlogo.png" alt="Logo Pet Lovers"></a>
        </div>
        <div id="containerForm" class="container">
            <form class="formfirt">
                <input type="email" id="email_Login" placeholder="&#9993; correo@example.com" name="email">
                <p id="error-mail" class="err"></p>
                <input type="password" id="password_Login" placeholder="&#128272; Contraseña" name="password">
                <p id="error-password" class="err"></p>

                <!-- Enlace para cambiar la contraseña -->
                <a href="#/resetPassword" id="changePassword" class="textBlack">¿Olvidaste la contraseña?</a>

                <!-- boton para iniciar sesion -->
                <button type="button" class="button" id="btn-login" value="Iniciar sesión">Iniciar sesión</button>

                <!-- boton para ingresar por Google -->
                <button type="button" class="button" id="buttonGoogle" value="Iniciar sesión con Google">Iniciar sesión con Google</button>

                <!-- Enlace para registro de nuevos usuarios -->
                <a href="#/auth" id="btn-checkin1" class="textBlack">¿No tienes cuenta? Registrate aqui.</a>
            </form>
        </div>
    </section>
    `;

  //Restablecer la contraseña
  document.getElementById('changePassword').addEventListener('click', () => {
    screenResetPassword();
  });

  //Evento para ingresar con cuenta de correo de google.
  document.getElementById('buttonGoogle').addEventListener('click', () => {
    authGoogle();
  });

  //Evento para registrar un nuevo usuario
  document.getElementById("btn-checkin1").addEventListener('click', () => {
    window.location.hash = '#/auth';
  });

  //Evento para ingresar con usuario y contraseña (valida que el maiol y la contraseña sean validos y manda mjs de error si no lo son)
  document.getElementById('btn-login').addEventListener('click', () => {

    let errMail = "Por favor ingresa un email válido";
    let errPass = "Por favor ingresa una contraseña válida";

    let emailLogin = document.getElementById("email_Login").value;
    let passwordLogin = document.getElementById("password_Login").value;

    let resultValidateEmail = validateEmail(emailLogin);
    let resultValidatePassword = validatePassword(passwordLogin);

    if (resultValidateEmail === true && resultValidatePassword === true) {
      login(emailLogin, passwordLogin);
    }
    if (resultValidateEmail === false) {
      document.getElementById("error-mail").innerHTML = `${errMail}`;
    }
    if (resultValidatePassword === false) {
      document.getElementById("error-password").innerHTML = `${errPass}`;
    }
  });

  //Resetea el error
  document.getElementById('email_Login').addEventListener('focus', () => {
    let delErrMail = document.getElementById('error-mail').value;
    if (delErrMail != "") {
      document.getElementById('error-mail').innerHTML = "";
    }
  });

  //Resetea el error
  document.getElementById("password_Login").addEventListener('focus', () => {
    let delErrPass = document.getElementById('error-password').value;
    if (delErrPass != "") {
      document.getElementById("error-password").innerHTML = "";
    }
  })
};
