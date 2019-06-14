// Pantalla que muestra el home con los posts.
import { closed } from '../js/authFirebase.js';
import { postUsers } from '../js/posts.js';

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
                            <li><a href="" id="mi_perfil"><i class="fa fa-home site-nav--icon"></i>Mi perfil</a></li>
                            <li><a href="" id="muro"><i class="fa fa-home site-nav--icon"></i>Muro</a></li>
                            <li><a href="" id="closed"><i class="fa fa-home site-nav--icon"></i>Cerrar sesión</a></li>
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
        <textarea id="post" cols="30" rows="10" placeholder="¿Qué estás pensando?"></textarea>
        <button type="button" id="sendpost">Enviar</button>
    </div>
</container>
    `;

    // Cambio de clase al navbar.
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('site-nav').classList.toggle('site-nav-open');
        document.getElementById('menu-toggle').classList.toggle('menu-open');
    })

    document.getElementById('sendpost').addEventListener('click', () => {
        let post = document.getElementById('post').value;
        postUsers(post);
        
    })

    // Evento para ingresar con cuenta de correo de google.
    document.getElementById('closed').addEventListener('click', () => {
        console.log("hola");
        closed();
        window.location.hash = '#/login'
        observer();
    });
};
