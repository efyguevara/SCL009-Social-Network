export const validateLogin = (email) => {
    if (email === '' || email.length === 0 || typeof(email) === "undefined") {
        return false;
    }else{
        return true;
    }
}

// Expresiones regulares para testear mail.
export const validateEmail = (email) => {
    let expRegular = RegExp(/^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
    return expRegular.test(email);
}

// export const validateEmail = (email) => {
//     let expRegular = RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
//     return expRegular.test(email);
// }