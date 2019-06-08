// Pantalla que muestra el home con los posts.
import { closed } from '../js/authFirebase.js';

export const screenHome = () => {
    document.getElementById('root').innerHTML =
    `
        
        <form>
            <h1 class="textBlack">Aqui se imprimiran los post, tambien hay que colocarle el navbar</h1>
            <button type="button" id="closed" value="Cerrar sesión">Cerrar sesión</button>
        </form>
    `;

    // Evento para ingresar con cuenta de correo de google.
    document.getElementById('closed').addEventListener('click', () => {
        closed();
        window.location.hash = '#/login'
    });
    //Creando evento que llama a la función de registro
};
