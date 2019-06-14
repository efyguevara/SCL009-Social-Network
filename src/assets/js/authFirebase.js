import { notifyError } from '../js/notifications.js';
import { screenHome } from '../views/screenHome.js';
import { screenLogin } from '../views/screenLogin.js';

//Ingreso con google
export const authGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

const authentication = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#/home';

      let token = result.credential.accessToken;
      let user = result.user;
      console.log(result);
    }).catch((error) => {

      let errorCode = error.code;
      console.log(errorCode);
      let errorMessage = error.message;
      console.log(errorMessage);

      let mail = error.mail;
      console.log(mail);

      let credential = error.credential;
      console.log(credential);
    });
}

//Función que salva datos del usuario
const saveUsers = (name, email, uid) => {

  var db = firebase.firestore();
  db.collection("users").add({
    name: name,
    email: email,
    uid: uid
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

//Registro de usuario nuevo con correo y contraseña
export const checkin = (nicknameCheckin, emailCheckin, passwordCheckin) => {
  console.log(emailCheckin);
  console.log(passwordCheckin);
  firebase.auth().createUserWithEmailAndPassword(emailCheckin, passwordCheckin)
    .then(() => {
      let user = firebase.auth().currentUser;
      let uid = user.uid;

      user.sendEmailVerification()
        .then(() => {
          console.log("Enviando correo...");
        }).catch((error) => {
          console.log(error);
        });
      observer();
      saveUsers(nicknameCheckin, emailCheckin, uid);
      window.location.hash = '#/login';

    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      notifyError(errorCode, 'error-email-checkin');
    });
}

//Inicio de sesión
export const login = (emailLogin, passwordLogin) => {
  console.log(emailLogin);
  console.log(passwordLogin);
  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((log) => {
      console.log('aquí');
      console.log(log);
      if (log.user.emailVerified === true) {
        window.location.hash = '#/home';
      } else {
        window.location.hash = '#/login';
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      if (error.code === "auth/user-not-found") {
        notifyError(errorCode, 'error-mail');
      }
      if (error.code === "auth/wrong-password") {
        notifyError(errorCode, 'error-password');
      }
    });
}

//Observa cambios de estado del usuario
export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user)
      verifiedEmail(user);
      console.log("Existe usuario activo");

      let displayName = user.displayName;
      let email = user.email;

      let emailVerified = user.emailVerified;
      console.log("*****************");
      console.log(emailVerified);
      console.log("*****************");

      let photoUrl = user.photoURL;
      let uid = user.uid;
      let providerData = user.providerData;

      saveUserInData(user);
    }
    else {
      console.log("No existe usuario activo");
      window.location.hash = '#/login';
    }
  });
}

//Verifica que el usuario confirmo el email del registro antes de poder ingresar
export const verifiedEmail = (user) => {
  let user2 = user;
  if (user2.emailVerified) {
    screenHome();
    return true;
  }
  if (!user2.emailVerified) {
    console.log("Por favor verifica tu cuenta antes de ingresar");
    notifyError("auth/invalid-email-verified", 'error-mail');
    closed();
  }
}
//Cambiar contraseña
export const changePassword = (emailResetPass) => {
  console.log("entra en el changePassword");
  let auth = firebase.auth();
  let emailAddress = emailResetPass;
  console.log(emailAddress)
  auth.sendPasswordResetEmail(emailAddress)
    .then((log) => {
      verifiedEmail();
      if (log.user.emailVerified) {
        screenLogin();
        console.log("Enviando correo para cambiar contraseña");
      } else {
        window.location.hash = '#/resetPassword';
      }
    })

    .catch(error => {
      if (error.code === "auth/invalid-email") {
        console.log("ocurrio un error al enviar el email");
        let errorCode = error.code;
        console.log(errorCode)

        notifyError(errorCode, 'error-mail-reset-pass');
      }
    });
}

//Cesar sesión
export const closed = () => {
  firebase.auth().signOut().then(() => {

    window.location.hash = '#/login';
    console.log("Saliendo...");

  }).catch((error) => {
    console.log(error);

  });
}
