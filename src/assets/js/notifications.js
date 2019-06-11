export const notifyError = (errorCode, errContainerId) => {
  const errorMessages = {
    "auth/email-already-in-use": "Este correo ya esta asociado a otra cuenta",
    "auth/wrong-password": "Contraseña incorrecta. Vuelve a intentarlo.",
    "auth/user-not-found": "Usuario no registrado",
  }
  const errorContainer = document.getElementById(errContainerId);

  const imprErr = document.createElement('div');
  imprErr.innerHTML = `<p>${errorMessages[errorCode]}</p>`;
  errorContainer.appendChild(imprErr);
}
