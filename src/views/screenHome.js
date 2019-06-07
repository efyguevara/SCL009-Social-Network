// Pantalla que muestra el home con los posts.
import { closed } from '../assets/js/authFirebase.js';

export const screenHome = () => {
    document.getElementById('root').innerHTML =
    `
        <h1>Aqui se imprimiran los post, tambien hay que colocarle el navbar</h1>
        <form>
            <button type="button" id="closed" value="Cerrar">Cerrar sesión</button>
        </form>
    `;

    // Evento para ingresar con cuenta de correo de google.
    document.getElementById('closed').addEventListener('click', () => {
        closed();
        window.location.hash = '#/login'
    });
    //Creando evento que llama a la función de registro
};
