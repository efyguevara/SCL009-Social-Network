// Pantalla que muestra el home con los posts.
import { closed } from '../js/authFirebase.js';

export const screenHome = () => {
    document.getElementById('root').innerHTML =
    `
    <header class="container-nav">
        <div class="logo"><img src="assets/img/petlogo.png" alt="Pet Lovers Logo"></div>
        <div class= "nav-deep">
            <nav id="site-nav" class="site-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">jasjka</a></li>
                    <li><a href="#">dfsd</a></li>
                    <li><a href="#/login" id="closed" value="Cerrar">Cerrar sesión</a></li>
                </ul>
            </nav>
            <div id="menu-toggle" class="menutoggle">
                <div class="hamburger"></div>
            </div>
        </div>
    </header>
    `;

    // Cambio de clase al navbar.
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('site-nav').classList.toggle('site-nav-open');
        document.getElementById('menu-toggle').classList.toggle('menu-open');
    })

    // Evento para ingresar con cuenta de correo de google.
    document.getElementById('closed').addEventListener('click', () => {
        closed();
        window.location.hash = '#/login'
    });
    //Creando evento que llama a la función de registro
};
