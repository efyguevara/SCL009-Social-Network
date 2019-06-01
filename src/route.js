// nuestras pruebas previo tests.

import { screenAuth } from './views/screenAuth.js'

const showScreen = (hash) => {
    const router = hash.substring(2);
    document.getElementById('root').innerHTML = '';

    switch (router) {
        case 'login' : 
            screenAuth();
            break
        default :
            document.getElementById('root').innerHTML = `<p>Error 404</p>`
    }
}

export const initRouter = () => {
    window.addEventListener('load', changeRoute(window.location.hash));

    if ('onhashchange' in window){
        sindow.onhashchang = () => {
            changeRoute(window.location.hash);
        }
    }
}