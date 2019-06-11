export const validateEmail = (emailLogin) => {
    if (emailLogin === "" || emailLogin.length === 0 || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(emailLogin)) {
        return false;
    }
    return true;
}

export const validatePassword = (passwordLogin) => {
    if (passwordLogin.length < 6 || passwordLogin === "") {
        return false;
    }
    return true;
}
