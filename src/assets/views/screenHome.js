// Pantalla que muestra el home con los posts.
import { closed } from '../js/authFirebase.js';
import { postUsers } from '../js/posts.js';

export const screenHome = () => {
    document.getElementById('root').innerHTML =
        `
<container class="screen_post">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                <img src="assets/img/logosinletra.png" class="logo" alt="Logo Pet Lovers">
                    <nav id="site-nav" class="site-nav">
                        <ul>
                            <li><a href="" id="mi_perfil">Mi perfil</a></li>
                            <li><a href="" id="muro">Muro</a></li>
                            <li><a href="" id="closed">Cerrar sesión</a></li>
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
    <div class="section">
    <div class="container">
        <form class="formpost">
            <div class="textform">Nombre de usuario</div>
            <textarea id="post" class="textarea" placeholder="¿Qué estás pensando?"></textarea>
            <div class="div-button"> <button class="buttonpost" type="button"  id="sendpost">Publicar</button> </div>
        </form>   
    </div>

    <!-- donde se imprimen los post -->
    <div class="show_old_posts">
    </div>
</div>
</container>`;

    // Cambio de clase al navbar.
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('site-nav').classList.toggle('site-nav-open');
        document.getElementById('menu-toggle').classList.toggle('menu-open');
    })

    //Envia post (publica)
    document.getElementById('sendpost').addEventListener('click', () => {
        let post = document.getElementById('post').value;
        postUsers(post);
    })

    // Cierre de sesion
    document.getElementById('closed').addEventListener('click', () => {
        closed();
        window.location.hash = '#/login';
        observer();
    });
};
