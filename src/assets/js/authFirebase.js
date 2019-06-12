import { notifyError } from '../js/notifications.js';
import { screenHome } from '../views/screenHome.js';
import { screenLogin } from '../views/screenLogin.js';

export const authGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

const authentication = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#/home';
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log(result);
      saveUserInData(user);
    }).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      console.log(errorCode);
      let errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      let mail = error.mail;
      console.log(mail);
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      console.log(credential);
    });
}

//Función que registra al usuario con correo y contraseña;
export const checkin = (emailCheckin, passwordCheckin) => {
  console.log(emailCheckin);
  console.log(passwordCheckin);
  firebase.auth().createUserWithEmailAndPassword(emailCheckin, passwordCheckin)
    .then(() => {
      let user = firebase.auth().currentUser;

      user.sendEmailVerification()
        .then(() => {
          //Envía al correo
          console.log("Enviando correo...");
        }).catch((error) => {
          //Si ocurre un error
          console.log(error);
        });
      window.location.hash = '#/login';
    })
    .catch((error) => {

      //Si ocurre un error
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      notifyError(errorCode, 'error-email-checkin');
    });
}

export const login = (emailLogin, passwordLogin) => {
  console.log(emailLogin);
  console.log(passwordLogin);

  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((log) => {
      if (log.user.emailVerified) {
        window.location.hash = '#/home';
      } else {
        window.location.hash = '#/login';
      }
    })
  
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      notifyError(errorCode, 'error-mail');
      notifyError(errorCode, 'error-password');
    });
}


//Agregando función que observa el registro del usuario
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
      // User is signed in.
      saveUserInData(user);
    } 
    else if (!user) {
      console.log("No existe usuario activo");
    }
  });
}


export const verifiedEmail = (user) => {
  let user2 = user;
  if (user2.emailVerified) {
    screenHome();  
    return true;
  }
  if (!user2.emailVerified){
    console.log("Por favor verifica tu cuenta antes de ingresar");
    notifyError("auth/invalid-email-verified", 'error-mail');
  }
}


//   Guardando a mis usuarios en firestore automáticamente
const saveUserInData = (user) => {
  let users = {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };
  firebase.database().ref('Users/' + user.uid).set(users);
};
// Guardando los post de mis usuarios con su respectivo Uid.

export const savePostInData = (post) => {
  let userPost = {
    // uid:user.uid,
    // name:user.displayName,
    // date:post.date,
    text:post.text
  };
  firebase.database().ref('userPost/'+post.text).on(userPost);
};

export const closed = () => {
  firebase.auth().signOut().then(() => {
    console.log("Saliendo...");
    // Sign-out successful.
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
}