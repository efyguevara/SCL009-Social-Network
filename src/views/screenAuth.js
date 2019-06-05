// Pantalla que muestra el formulario de ingreso.
import { checkin } from '../assets/js/authFirebase.js';
import { authGoogle } from '../assets/js/authFirebase.js';

export const screenAuth = () => {
  document.getElementById('root').innerHTML =
  `<div class="center">
  <!-- <a href="#"> <img src="img/logoProvisional.png" alt="Logo Pet Lovers"></a> -->
</div>
<div id="containerForm" class="container">
  <form>
    <h2>Iniciar Sesión</h2>
    <input type="email" id="email" placeholder="&#128272; Correo" name="email" required>
    <input type="password" id="password" placeholder="&#128272; Contraseña" name="password" required>
    <button type="button" value="Entrar">Entrar</button>
    <button type="button" id="buttonGoogle" value="Entrar con Google">Entrar con Google</button>
    <button type="button" id="btn-checkin" value="Registrarse">Registrarse</button>
  </form>
`;
// 
  // Evento para ingresar con cuenta de correo de google.
  
  document.getElementById('btn-checkin').addEventListener('click', () => {
  
 let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  checkin(email, password); 
  // console.log(email);
  // console.log(password);
     window.location.hash = '#/login'
});
  document.getElementById('buttonGoogle').addEventListener('click', () => {
    authGoogle();
    window.location.hash = '#/home'
  });
//Creando evento que llama a la función de registro
};
