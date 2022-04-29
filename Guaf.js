//lula es bella realmente bella y perfecta
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
function adduser() {
    user_name=document.getElementById("nombre_usuari0").value;
    password_dog=document.getElementById("contrasena").value;
    firebase.database().ref("usuarios").child(user_name).update({
        nombre: user_name,
        pass: password_dog,
        proposito: "añadir usuario"
    });
    localStorage.setItem("nombre_usuario", user_name);
    window.location = "guaf_room.html";
}