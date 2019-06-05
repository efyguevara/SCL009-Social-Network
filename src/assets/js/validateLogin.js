// import { checkin } from './authDom.js'; va al dom al reves

// tienes una function  --> fx   para crear el usuario
//  en el dom cuando haya click en el boton  se van a validar los datos primero
// si se validan los datos entonces si se creara el usuario osea corre esta funcion

export const validateLogin = (email, password) => {
    if (email === "" || email.length === 0 || password.length<6 || password === "") {
        return false;
    }else{
        return true;
      }
}

//typeof(email) === "undefined" ||
// Expresiones regulares para testear mail.
export const validateEmail = (email) => {
    let expRegular = RegExp(/^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
    return expRegular.test(email);
}

// export const validateEmail = (email) => {
//     let expRegular = RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
//     return expRegular.test(email);
// }