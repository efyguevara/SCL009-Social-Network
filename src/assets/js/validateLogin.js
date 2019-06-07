export const validateEmail = (email) => {
    if (email === "" || email.length === 0 || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email)) {
        return false;
    }
    
    return true;
}

export const validatePassword = (password) => {
    if( password.length < 6 || password === ""){
        return false;
    }
    
    return true;
}
// Expresiones regulares para testear mail.
// export const validateEmail = (email) => {
// else{
//         return false;
//     }
// }