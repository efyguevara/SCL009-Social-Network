export const validateNicknameCheckin = (nicknameCheckin) => {
    if (nicknameCheckin === "" || nicknameCheckin.length === 0) {
        return false;
    }
    return true;
}

export const validateEmailCheckin = (emailCheckin) => {
    if (emailCheckin === "" || emailCheckin.length === 0 || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(emailCheckin)) {
        return false;
    }
    return true;
}

export const validatePasswordCheckin = (passwordCheckin) => {
    if (passwordCheckin.length < 6 || passwordCheckin === "") {
        return false;
    }
    return true;
}

export const validatePasswordRepeat = (passwordRepeat, passwordCheckin) => {
    if (passwordRepeat != passwordCheckin) {
        return false;
    }
    return true;
}