// nuestras pruebas previo tests.

import { screenAuth } from './views/screenAuth.js'

const changeRoute = (hash) => {
    if(hash === '#/login' || hash === '#/' || hash === '')
    return showScreen(hash);
}
export const showScreen = (hash) => {
    const router = hash.substring(2);
    const rootContainer = document.getElementById('root').innerHTML = '';

    switch (router) {
        case 'login' : 
            screenAuth();
            break
        case '':
            screenAuth();
            break;
        default :
            rootContainer.innerHTML = `<p>Error 404</p>`
    }
}

export const initRouter = () => {
    window.addEventListener('load', changeRoute(window.location.hash));

    if ('onhashchange' in window){
            changeRoute(window.location.hash);
        
    }
}