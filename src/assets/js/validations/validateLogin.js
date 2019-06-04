export const validateLogin = (email) => {
    if (email === '' || email.length === 0 || typeof(email) === "undefined") {
        return false;
    } else {
        return true;
    }
}

export const validateEmail = (email) => {
    let expRegular = `^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,4})$`;
    //^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$
    return expRegular.test(email);
}