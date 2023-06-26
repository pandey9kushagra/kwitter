//YOUR FIREBASE LINKS

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

    nameuser = localStorage.getItem("uname")
    nameroom = localStorage.getItem("room")

    function send(){

      mess = document.getElementById("mesput").value
      firebase.database().ref(nameroom).push({

            name : nameuser,
            message : mess,
            like : 0
      })
      document.getElementById("mesput").innerHTML = ""
    }


function getData() {
       firebase.database().ref("/"+nameroom).on('value', function(snapshot) {
             document.getElementById("output").innerHTML = ""; 
             snapshot.forEach(function(childSnapshot) {
                   childKey  = childSnapshot.key;
                  childData = childSnapshot.val(); 
                    if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 
      name = message_data['name']
      like = message_data['like']
      message = message_data['message']

      nametag = "<h3>" + name +  "<img class='user_tick' src='tick.png'> </h3> "
      mestag = "<h3 class ='message_h4'>"+ message + "</h3>"
      liketag = "<button class = 'btn btn-primary'id =" + firebase_message_id + " value="+ like + " onclick = 'updatelike(this.id)'>"
      likebtn = "<span class = 'glyphicon glyphicon-thumbs-up'> Like : " + like + "</span> </button> <hr>"

      row = nametag + mestag + liketag + likebtn
      document.getElementById("output").innerHTML += row

     
      //End code
      } });  }); }
getData();

function updatelike(myid){

      firebaseid = myid
      likes = document.getElementById(firebaseid).value
      updatedlike = Number(likes) +1

      firebase.database().ref(nameroom).child(firebaseid).update({
            like : updatedlike
      })

}

function logout(){

      localStorage.removeItem("uname")
      localStorage.removeItem("room")
      window.location = "index.html"

}
