var firebaseConfig = {
      apiKey: "AIzaSyA8G0t8PqnVLV57tWve8DX2fH5aOte1Q4k",
      authDomain: "kwitter-3e76c.firebaseapp.com",
      databaseURL: "https://kwitter-3e76c-default-rtdb.firebaseio.com",
      projectId: "kwitter-3e76c",
      storageBucket: "kwitter-3e76c.appspot.com",
      messagingSenderId: "1025402182956",
      appId: "1:1025402182956:web:b815f693465cab0c44a089",
      measurementId: "G-S56E0D9CN7"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addroom() {
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log(Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirecttoroonname(this.id)'> # " + Room_names + "</div> <hr>"
                  document.getElementById("output").innerHTML += row

            });
      });
}
getData();

function redirecttoroonname(name) {

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}