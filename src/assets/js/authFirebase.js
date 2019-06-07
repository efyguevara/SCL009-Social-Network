export const authGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

const authentication = (provider) => {
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    console.log(result);
    // ...
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
    // ...
  });
}

//Función que registra al usuario con correo y contraseña;
export const checkin = (email, password) => {
  console.log("checkin");
  console.log(email);
  console.log(password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      // const verificar = () => {
      let user = firebase.auth().currentUser;

      user.sendEmailVerification().then(() =>{
        //Envía al correo
        console.log("Enviando correo...");
      }).catch((error) => {
        //Si ocurre un error
        console.log(error);
      });
      // }
    })

    .catch((error) => {
      //Si ocurre un error
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export const login = (emailLogin, passwordLogin) => {
  console.log("login");
  console.log(emailLogin);
  console.log(passwordLogin);
  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}

//Agregando función que observa el registro del usuario
export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("Existe usuario activo");

      let displayName = user.displayName;
      let email = user.email;

      let emailVerified = user.emailVerified;
      console.log("*****************");
      console.log(user.emailVerified);
      console.log("*****************");

      let photoUrl = user.photoURL;
      let uid = user.uid;
      let providerData = user.providerData;
      // User is signed in.
    } else {
      // No user is signed in.
      console.log("No existe usuario activo");
    }
  });
}

export const closed = () => {
  firebase.auth().signOut().then(() => {
    console.log("Saliendo...");
    // Sign-out successful.
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
}