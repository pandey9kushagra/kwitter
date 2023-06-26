
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyAPU4cTVbuJ8d_SSDA6BwI1FMiFF4y-Iwg",
      authDomain: "kwitter-123bc.firebaseapp.com",
      databaseURL: "https://kwitter-123bc-default-rtdb.firebaseio.com",
      projectId: "kwitter-123bc",
      storageBucket: "kwitter-123bc.appspot.com",
      messagingSenderId: "1038783481447",
      appId: "1:1038783481447:web:4afd3e84f3d838277b36c2"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     username = localStorage.getItem("uname")
     console.log(username)
     document.getElementById("name").innerHTML = "Welcome " + username

     function addroom(){

       roomname = document.getElementById("roomname").value
       firebase.database().ref('/').child(roomname).update({
            purpose : " adding room "
       })
       localStorage.setItem("room", roomname)
       window.location = "kwitter_page.html"
     }

function getData()
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        row = "<div class='room_name' id=" +Room_names + " onclick='gochat(this.id)'>" + Room_names + " </div>"
        document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function gochat(h){

  localStorage.setItem("room", h)
  window.location = "kwitter_page.html"
}

function logout(){

  localStorage.removeItem("room")
  localStorage.removeItem("uname")
  window.location = "index.html"
}
