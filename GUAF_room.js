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
user_name=localStorage.getItem("nombre_usuario");
document.getElementById("username").innerHTML="¡¡¡Bienvenido " + user_name + "!!!";
function add_sala(){
  room_name = document.getElementById("nombre_sala").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"add room name"
  });
  localStorage.setItem("nombre_sala", room_name);
  window.location = "Guaf_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Inicio del código
   console.log("nombre de la sala: " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+" </div> <hr>";
   document.getElementById("output").innerHTML+=row;
   //Final del código
   });});}
   getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("nombre_sala", room_name);
window.location = "Guaf_page.html";
}
function log_out(){
  localStorage.removeItem("username");
  localStorage.removeItem("nombre_sala");
  window.location = "index.html";
}