//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyC0t6ZhvV5Rx0H52wqUPnLKZ7VIYD6jies",
    authDomain: "guaf-721d9.firebaseapp.com",
    databaseURL: "https://guaf-721d9-default-rtdb.firebaseio.com",
    projectId: "guaf-721d9",
    storageBucket: "guaf-721d9.appspot.com",
    messagingSenderId: "551121345928",
    appId: "1:551121345928:web:73f5e409885e51731cee3d",
    measurementId: "G-JYJE1C6K6M"
  };
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Inicio del código

   //Final del código
   });});}
getData();