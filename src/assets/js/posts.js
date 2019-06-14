export const postUsers = (post) => {

  let db = firebase.firestore();
  let user = firebase.auth().currentUser;
  let userSignIn = user.uid;

  db.collection("users").doc(userSignIn).get().then(doc => {
    db.collection("post").add({
      userSignIn,
      post

    }).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    console.log(`${doc.id} => ${doc.data()}`);
  });
}