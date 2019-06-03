import { initFirebase } from './assets/js/initFirebase.js';
import { initRouter } from './route.js';
// import { screenAuth } from './views/screenAuth.js';
// import { authGoogle } from './assets/js/authFirebase.js';



const init = () => {
    initFirebase();
    initRouter();
}

window.addEventListener('load', init);