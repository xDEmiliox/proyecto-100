// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = {
    apiKey: "AIzaSyAv-RIUEILwAHqyTyPE_kKEXQROYhOZRP0",
    authDomain: "redsocial-cc098.firebaseapp.com",
    databaseURL: "https://redsocial-cc098-default-rtdb.firebaseio.com",
    projectId: "redsocial-cc098",
    storageBucket: "redsocial-cc098.appspot.com",
    messagingSenderId: "475289654278",
    appId: "1:475289654278:web:6e512bf0e9ecea1912df87"
  };

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

function logout() {

    localStorage.removeItem("user_name");

    localStorage.removeItem("room_name");

    window.location.replace("index.html");

}



