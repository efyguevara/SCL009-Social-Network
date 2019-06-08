// Pantalla que muestra el formulario de ingreso.
import { checkin, login } from '../js/authFirebase.js';
import { validateEmailCheckin, validatePasswordCheckin, validatePasswordRepeat} from '../js/validateCheckin.js';

export const screenAuth = () => {
  document.getElementById('root').innerHTML =
    `
    <div class="center">
      <a href="#"> <img src="assets/img/petlogo.png" alt="Logo Pet Lovers"></a>
    </div>
    <div id="containerForm" class="container">
        <form> 
          <h2>Formulario de registro</h2>
          <input type="text" id="nickname" placeholder="Nombre de usuario" name="nickname">

          <input type="email" id="email" placeholder="correo@example.com" name="email">
          <p id="error-email-checkin" class="err"></p>

          <input type="password" id="password" placeholder="&#128272; Contraseña" name="password">
          <p id="error-password-checkin" class="err"></p>
          
          <input type="password" id="password_repeat" placeholder="&#128272; Repetir contraseña" name="password">
          <p id="error-password-repeat" class="err"></p>

          <!-- Boton para registrar nuevo usuario -->
          <button type="button" id="btn-checkin2">Registrarse</button>
          
          <!-- Boton para volver al login -->
          <button type="button" id="return-login">Volver</button>
        </form>
    </div>
    `;

  // Evento para ingresar con cuenta de correo de google.  
  document.getElementById("btn-checkin2").addEventListener('click', () => {
    let errMailCheckin = "Por favor ingresa un email válido";
    let errPassCheckin = "Por favor ingresa una contraseña válida";
    let errPassRepeat = "Las contraseñas ingresadas no coinciden";

    let emailCheckin = document.getElementById("email").value;
    let passwordCheckin = document.getElementById("password").value;
    let passwordRepeat= document.getElementById("password_repeat").value; 

    let resultValidateEmailCheckin = validateEmailCheckin(emailCheckin);
    let resultValidatePasswordCheckin = validatePasswordCheckin(passwordCheckin);
    let resultValidatePasswordRepeat = validatePasswordRepeat(passwordRepeat);
    

    if (resultValidateEmailCheckin === true && resultValidatePasswordCheckin === true && resultValidatePasswordRepeat === true) {
      checkin(emailCheckin, passwordCheckin);
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
      // passwordCheckin.innerHTML += "";
      // passwordRepeat.innerHTML += "";
    }
  });

  //Evento para volver al login desde la pantalla de registro
  document.getElementById("return-login").addEventListener("click", () => {
    //modificar como hace el cambio de hash
    window.location.hash = '#/login';
  })
}