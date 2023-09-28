var id="";
function logout(){
firebase.auth().signOut().then(logout =>{
	
	window.alert("signed out");
	document.location.href="login.html";
}).catch(error=>{
});
	
}
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		console.log(user);
		id=user.uid;
		getinfo();
		// User is signed in.
		
	} else {
		// No user is signed in.
		//document.location.href="index.html";
		
	}
});
function getinfo(){
	console.log(id);
	var ref = firebase.database().ref().child("Pickly").child("users").child(id);
	ref.on("value",function(snap){
 	document.getElementById("username").innerHTML=snap.child('name').val();
	document.getElementById("pic").src=snap.child('ppURL').val();	
		
		
	});
	
}