export function authGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider) {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    console.log(result);
    // ...
  }).catch(function (error) {
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

//Función que registrar al usuario
export function registrar(){
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

firebase.auth().createUserWithEmailAndPassword(email, password)

.then(function(){
  verificar();
  
})
.catch(function(error) {
 
  //Si ocurre un error
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);

});
}
/*
//Agregando función que observa el registro del usuario
function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Existe usuario activo");
      aparece(user);

      let displayName = user.displayName;
      let email = user.email;

      console.log("*****************");
      console.log(user.emailVerified);
      console.log("*****************");

      let emailVerified = user.emailVerified;
      let photoUrl = user.photoURL;
      let uid = user.uid; 
      let providerData = user.providerData;
      // User is signed in.
    } else {
      // No user is signed in.
      console.log("No existe usuario activo");

    }
  });
}*/


function verificar(){
  
let user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  //Envía al correo
  console.log("Enviando correo...");
}).catch(function(error) {
  //Si ocurre un error
  console.log(error);
});
}