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

function logout() {

    localStorage.removeItem("user_name");

    localStorage.removeItem("room_name");

    window.location.replace("index.html");

}