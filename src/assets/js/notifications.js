export const notifyError = (errorCode, errContainerId) => {
  const errorMessages = {
    "auth/email-already-in-use": "Este correo ya esta asociado a otra cuenta",
    "auth/wrong-password": "Contraseña incorrecta. Vuelve a intentarlo.",
    "auth/user-not-found": "Usuario no registrado",
    "auth/invalid-email-verified": "Te hemos enviado un correo electrónico para verificar tu cuenta, por favor confirmalo antes de iniciar sesión",
    "auth/invalid-email": "Por favor ingresa un email válido",
  }
  const errorContainer = document.getElementById(errContainerId);

  const imprErr = document.createElement('div');
  imprErr.innerHTML = `<p>${errorMessages[errorCode]}</p>`;
  errorContainer.appendChild(imprErr);
}