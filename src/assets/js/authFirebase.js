import { initfirebase } from './initrFirebase.js';
initfirebase();

export function authGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
}

function authentication(provider){
  firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log(result);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      console.log(errorCode);
      let errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      let email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      console.log(credential);
      // ...
    });

}



//Agregando función para entrar con correo electrónico.
export function verificar(){

var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
// Email sent.
}).catch(function(error) {
// An error happened.
});
}
