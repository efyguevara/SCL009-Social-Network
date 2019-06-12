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
<<<<<<< Updated upstream
                            <li><a href="#"><i class="fa fa-home site-nav--icon"></i>Mi perfil</a></li>
                            <li><a href="#"><i class="fa fa-home site-nav--icon"></i>Muro</a></li>
                            <li><a href="#/login"><i class="fa fa-home site-nav--icon" id="closed"></i>Cerrar sesión</a>
=======
                            <li><a href=""><i class="fa fa-home site-nav--icon"></i>Mi perfil</a></li>
                            <li><a href=""><i class="fa fa-home site-nav--icon"></i>Muro</a></li>
                            <li><a href=""><i class="fa fa-home site-nav--icon" id="closed"></i>Cerrar sesión</a>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                            </li>
                        </ul>
                    </nav>
                    <div id="menu-toggle" class="menu-toggle">
                        <div class="hamburger"></div>
                    </div>
                </div>
            </div>
        </div>
</header> 

    <!-- posts -->
<container>
    <div id="create_post">
        <textarea name="" id="text_post" cols="30" rows="10" placeholder="¿Qué estás pensando?"></textarea>
        <button id="send">Enviar</button>
    </div>
</container>
    `;

    // Cambio de clase al navbar.
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('site-nav').classList.toggle('site-nav-open');
        document.getElementById('menu-toggle').classList.toggle('menu-open');
    })

    document.getElementById('send').addEventListener('click', () => {
        let post = document.getElementById('text_post').value;
        // document.getElementById('')
        // savePostInData();
    })

    // Evento para ingresar con cuenta de correo de google.
    document.getElementById('closed').addEventListener('click', () => {
        closed();
        window.location.hash = '#/login'
    });
};
