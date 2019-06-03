// Pantalla que muestra el formulario de ingreso.
import { registrar } from '../assets/js/authFirebase.js';
import { authGoogle } from '../assets/js/authFirebase.js';

export const screenAuth = () => {
  document.getElementById('root').innerHTML =
    `
      <div class="container">
        <form>
          <h2>Formulario de login</h2>
          <input type="email" id="email" placeholder="&#128272; Correo" name="email" required>
          <input type="password" id="password" placeholder="&#128272; Contraseña" name="password" required>
          <input id="checkin" value="Registrarse">
          <input id="buttonGoogle" value="Entrar con Google">
        </form>
      </div>
    `;

  // Evento para ingresar con cuenta de correo de google.
  
  document.getElementById('checkin').addEventListener('click', () => {
    registrar();
     window.location.hash = '#/login'
});
  document.getElementById('buttonGoogle').addEventListener('click', () => {
    authGoogle();
    window.location.hash = '#/login'
  });
//Creando evento que llama a la función de registro
};
