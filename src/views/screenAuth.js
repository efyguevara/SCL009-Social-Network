// Pantalla que muestra el formulario de ingreso.
import { checkin } from '../assets/js/authFirebase.js';
import { screenLogin } from './screenLogin.js';


export const screenAuth = () => {

  `
    <form>
      <h2>Registrarse</h2>
      <input type="email" id="email" placeholder="&#128272; Correo" name="email" required>
      <input type="password" id="password" placeholder="&#128272; Contraseña" name="password" required>
      <button type="button" id="btn-checkin" value="Registrarse">Registrarse</button>
    </form>
    `;

  // Evento para ingresar con cuenta de correo de google.  
  document.getElementById('btn-checkin').addEventListener('click', () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    checkin(email, password);
    screenLogin();
    window.location.hash = '#/login';
  });
};
