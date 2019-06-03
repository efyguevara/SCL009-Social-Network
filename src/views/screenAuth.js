// Pantalla que muestra el formulario de ingreso.
import { authGoogle } from '../assets/js/authFirebase.js'

export const screenAuth = () => {
  document.getElementById('root').innerHTML =
    `
      <div class="container">
        <form>
          <h2>Formulario de login</h2>
          <input type="text" placeholder="&#128272; Correo" name="correo">
          <input type="password" placeholder="&#128272; Contraseña" name="clave">
          <input type="submit" value="Registrarse">
          <input type="submit" id="buttonGoogle" value="Entrar con Google">
        </form>
      </div>
    `;

  // Evento para ingresar con cuenta de correo de google.
  document.getElementById('buttonGoogle').addEventListener('click', () => {
    authGoogle();
    window.location.hash = '#/login'
  });

};
