// Pantalla que muestra el home con los posts.
import { closed } from '../js/authFirebase.js';

export const screenHome = () => {

    document.getElementById('root').innerHTML =
    `
<header>
    <div class="container">
            <div class="row">
                <div class="col-12">
                     <h1 class="logo">Logo <span>Empresa</span></h1>
                            <nav id="site-nav" class="site-nav">
                                <ul>
                                    <li><a href=""><i class="fa fa-home site-nav--icon"></i>Mi perfil</a></li>
                                    <li><a href=""><i class="fa fa-home site-nav--icon"></i>Muro</a></li>
                                    <li><a href="#/login"><i class="fa fa-home site-nav--icon" id="closed"></i>Cerrar sesión</a></li>
                                </ul>
                            </nav>
                                 <div id="menu-toggle" class="menu-toggle" onclick="cambiarClase()">
                                     <div class="hamburger"></div>
                                 </div>
                </div>       
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
