import { initFirebase } from './assets/js/initFirebase.js';
import { initRouter } from './route.js';
// Aquí se llama al observador

const init = () => {
    initFirebase();
    initRouter();
    
}

window.addEventListener('load', init);