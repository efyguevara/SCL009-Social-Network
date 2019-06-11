export const initFirebase = () => {

  // Configuración autentificación de usuario de firebase
  let firebaseConfig = {
    apiKey: "AIzaSyAqOgt1aoq6vdZI9xj02lXTlBLwGv4BxRQ",
    authDomain: "red-social-2019.firebaseapp.com",
    databaseURL: "https://red-social-2019.firebaseio.com",
    projectId: "red-social-2019",
    storageBucket: "red-social-2019.appspot.com",
    messagingSenderId: "941875629921",
    appId: "1:941875629921:web:a49d8e85f35e7c70"
  };
  // Inicializando Firebase

  firebase.initializeApp(firebaseConfig);

}