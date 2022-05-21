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
  room_name=localStorage.getItem("nombre_sala")
  function mensajeria(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          nombre:user_name,
          mensaje:msg,
          like: 0
      });
      document.getElementById("msg").value="";
  }
  function log_out(){
    localStorage.removeItem("username");
    localStorage.removeItem("nombre_sala");
    window.location = "index.html";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 //Inicia código
    console.log(firebase_message_id);
    console.log(message_data);
    names = message_data['nombre'];
    message = message_data['mensaje'];
    like = message_data['like'];
    name_with_tag = "<h4> " + names + "<img class='user_tick' src='logo.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class= 'glyphicon glyphicon-thums-up'>Me gusta: " + like + "</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML +=row;
    //Finaliza código
    function updateLike(message_id){
      console.log("PERRITOS SON GENIALES PARAMETRO:"+message_id);
      button_id=message_id;
      like=document.getElementById(button_id).value;
      update_like=Number(like+1);
    }
 } });  }); }
   getData();