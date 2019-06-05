// import { checkin } from './authDom.js'; va al dom al reves

// tienes una function  --> fx   para crear el usuario
//  en el dom cuando haya click en el boton  se van a validar los datos primero
// si se validan los datos entonces si se creara el usuario osea corre esta funcion

export const validateLogin = (email, password) => {
    if (email === "" || email.length === 0 || typeof(email) === "undefined"|| password.length<6 || password === "") {
        return false;
    }else{
        return true;
    }
}


// Expresiones regulares para testear mail.
export const validateEmail = (email) => {
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email)){
        return true;
    }else{
        return false;
    }
    // /^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,4})$/
    ///^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    ///^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
//     return expRegular.test(email);
}