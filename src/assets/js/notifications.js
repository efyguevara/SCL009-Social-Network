export const notifyError = (errorCode, errContainerId) => {
    const errorMessages = {"auth/email-already-in-use": "Este correo ya esta asociado a otra cuenta", 
                            "auth/wrong-password": "Contraseña incorrecta. Vuelve a intentarlo.",
                            "auth/user-not-found": "Usuario no registrado",
                        }
    const errorContainer = document.getElementById(errContainerId);

    const imprErr = document.createElement('div'); 
    imprErr.innerHTML = `<p>${errorMessages[errorCode]}</p>`;
    errorContainer.appendChild(imprErr); 
  }


// export const invalidUser = (errorCode) => {


//     if (errorCode === 'auth/wrong-password') {
//         document.getElementById('password_Login').innerHTML = "Contraseña inválida. Vuelve a intentar";
//     }
//     if (errorCode === 'auth/invalid-email' || errorCode === 'auth/user-not-found') {
//         document.getElementById('email_Login').innerHTML = "Usuario no registrado";
//     }
//     if (errorCode === 'auth/email-already-in-use') {
//         document.getElementById('error-email-checkin').innerHTML = "Este correo esta asicuado a otra cuenta";
//     }
// }