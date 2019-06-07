//
import { screenLogin } from './views/screenLogin.js';
import { screenAuth } from './views/screenAuth.js';
import { screenHome } from './views/screenHome.js';

const changeRoute = (hash) => {
    if (hash === '#/login' || hash === '#/auth' || hash === '#/home' || hash === '#/' || hash === '')
        return showScreen(hash);
}
export const showScreen = (hash) => {
    const router = hash.substring(2);
    const rootContainer = document.getElementById('root').innerHTML = '';

    switch (router) {
        case 'login':
            screenLogin();
            break
        case 'auth':
            screenAuth();
            break
        case 'home':
            screenHome();
            break
        case '':
            screenLogin();
            break
        case '#/':
            screenLogin();
            break
        default:
            rootContainer.innerHTML = `<p>Error 404</p>`
    }
}

export const initRouter = () => {
    window.addEventListener('load', changeRoute(window.location.hash));
    if ('onhashchange' in window) {
        changeRoute(window.location.hash);
    }
}