  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAqOgt1aoq6vdZI9xj02lXTlBLwGv4BxRQ",
    authDomain: "red-social-2019.firebaseapp.com",
    databaseURL: "https://red-social-2019.firebaseio.com",
    projectId: "red-social-2019",
    storageBucket: "red-social-2019.appspot.com",
    messagingSenderId: "941875629921",
    appId: "1:941875629921:web:a49d8e85f35e7c70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById('buttonGoogle').addEventListener('click', () => {
    authGoogle();
  });

  function authGoogle(){
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