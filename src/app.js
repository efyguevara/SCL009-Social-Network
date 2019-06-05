import { initFirebase } from './assets/js/initFirebase.js';
import { initRouter } from './route.js';
import { observer } from './assets/js/authFirebase.js';
// Aquí se llama al observador

const init = () => {
    initFirebase();
    initRouter();
    observer();
    
}

window.addEventListener('load', init);