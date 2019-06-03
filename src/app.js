import { initFirebase } from "./assets/js/initFirebase.js";
import { initRouter } from './route.js';

const init = () => {
    initFirebase();
    initRouter();
    
}

window.addEventListener('load', init);
