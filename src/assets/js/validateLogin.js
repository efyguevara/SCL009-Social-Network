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
}