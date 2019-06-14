// Pantalla que muestra el formulario de ingreso.
import { checkin } from '../js/authFirebase.js';
import { validateNicknameCheckin, validateEmailCheckin, validatePasswordCheckin, validatePasswordRepeat } from '../js/validateCheckin.js';

export const screenAuth = () => {
  document.getElementById('root').innerHTML =
    `
    <section class="root-container">
      <div class="center">
          <a href="#"> <img src="assets/img/petlogo.png" alt="Logo Pet Lovers"></a>
      </div>
      <div id="containerForm" class="container">
        <form class="formfirt">
            <h2>Formulario de registro</h2>
            <input type="text" id="nickname" placeholder="Nombre de usuario" name="nickname">
            <p id="error-nickname-checkin" class="err"></p>

          <input type="email" id="email" placeholder="&#9993; correo@example.com" name="email">
          <p id="error-email-checkin" class="err"></p>

            <input type="password" id="password" placeholder="&#128272; Contraseña" name="password">
            <p id="error-password-checkin" class="err"></p>

            <input type="password" id="password_repeat" placeholder="&#128272; Repetir contraseña" name="password">
            <p id="error-password-repeat" class="err"></p>

            <!-- Boton para registrar nuevo usuario -->
            <button type="button" class="button" id="btn-checkin2">Registrarse</button>

            <!-- Boton para volver al login -->
            <button type="button" class="button" id="back">Volver</button>
        </form>
      </div>
    </section>
    `;

  // Evento para ingresar con cuenta de correo de google.  
  document.getElementById("btn-checkin2").addEventListener('click', () => {

    let errNicknameChekin = "Por favor ingrese un nombre";
    let errMailCheckin = "Por favor ingresa un email válido";
    let errPassCheckin = "Por favor ingresa una contraseña válida";
    let errPassRepeat = "Las contraseñas ingresadas no coinciden";

    let nicknameCheckin = document.getElementById("nickname").value;
    let emailCheckin = document.getElementById("email").value;
    let passwordCheckin = document.getElementById("password");
    let passwordRepeat = document.getElementById("password_repeat");

    let resultValidateNicknameCheckin = validateNicknameCheckin(nicknameCheckin);
    let resultValidateEmailCheckin = validateEmailCheckin(emailCheckin);
    let resultValidatePasswordCheckin = validatePasswordCheckin(passwordCheckin.value);
    let resultValidatePasswordRepeat = validatePasswordRepeat(passwordRepeat.value, passwordCheckin.value);

    if (resultValidateNicknameCheckin === true && resultValidateEmailCheckin === true && resultValidatePasswordCheckin === true && resultValidatePasswordRepeat === true) {
      checkin(nicknameCheckin, emailCheckin, passwordCheckin.value);
    }
    if (resultValidateNicknameCheckin === false) {
      document.getElementById("error-nickname-checkin").innerHTML = `${errNicknameChekin}`;
    }
    if (resultValidateEmailCheckin === false) {
      document.getElementById("error-email-checkin").innerHTML = `${errMailCheckin}`;
    }
    if (resultValidatePasswordCheckin === false) {
      document.getElementById("error-password-checkin").innerHTML = `${errPassCheckin}`;
    }
    if (resultValidatePasswordRepeat === false) {
      document.getElementById("error-password-repeat").innerHTML = `${errPassRepeat}`;
      //No funciona el limpiado de campos. si las contraseñas no coinciden hay que actualizar la pagina para volver a intentarlo 
      passwordCheckin.value = "";
      passwordRepeat.value = "";
    }
  });

  //Resetea el error
  document.getElementById('nickname').addEventListener('focus', () => {
    let delErrMailCheckin = document.getElementById('error-nickname-checkin').value;
    if (delErrMailCheckin != "") {
      document.getElementById('error-nickname-checkin').innerHTML = "";
    }
  });

  //Resetea el error
  document.getElementById('email').addEventListener('focus', () => {
    let delErrMailCheckin = document.getElementById('error-email-checkin').value;
    if (delErrMailCheckin != "") {
      document.getElementById('error-email-checkin').innerHTML = "";
    }
  });

  //Resetea el error
  document.getElementById("password").addEventListener('focus', () => {
    let delErrPassCheckin = document.getElementById('error-password-checkin').value;
    if (delErrPassCheckin != "") {
      document.getElementById("error-password-checkin").innerHTML = "";
    }
  })

  //Resetea el error
  document.getElementById("password").addEventListener('focus', () => {
    let delErrPassCheckinRepeat = document.getElementById('error-password-repeat').value;
    if (delErrPassCheckinRepeat != "") {
      document.getElementById("error-password-repeat").innerHTML = "";
    }
  })

  //Evento para volver al login desde la pantalla de registro
  document.getElementById("back").addEventListener("click", () => {
    window.location.hash = '#/login';
  })
}
