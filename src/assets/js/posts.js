export const postUsers = (post) =>{

    let db = firebase.firestore();
    let user = firebase.auth().currentUser;
    let userSignIn = user.uid;
    
      db.collection("users").doc(userSignIn).get().then(doc=> {
      db.collection("post").add({
        userSignIn,
        post
            
          }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          console.log(`${doc.id} => ${doc.data()}`);
          });
  }
  
  // export const postUsers = () => {
  //     const theUserPost = [];
  //       let db = firebase.firestore();
      
  //       const user = db.collection("users").where("uid","==", "current.user.uid");
        
  //       const post = db.collection("post").where("user.uid","==", "user.uid");
        
        
  //       console.log(user);
      
  //       .then(function(docRef) {
  //          console.log("Document written with ID: ", docRef.id);
  //        })
  //       .catch(function(error) {
  //         console.error("Error adding document: ", error);
  //       });
      
  //     }