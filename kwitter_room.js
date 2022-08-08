// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6TPv78eC4VkB8NuUU2jMHIEMkD3HUSVw",
    authDomain: "let-s-chat-web-app-b5b63.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-b5b63-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-b5b63",
    storageBucket: "let-s-chat-web-app-b5b63.appspot.com",
    messagingSenderId: "64670732696",
    appId: "1:64670732696:web:e76816e40ad3486e7e5bed"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!" ;

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);


      window.location = "kwitter_room.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names+ "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
