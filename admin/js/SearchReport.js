var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon= document.getElementById("sidebarIcon");
var id = '';


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        id = user.uid;



    } else {
        // User not logged in or has just logged out.
    }
});


function toggleSidebar(){
	if (!sidebarOpen){
		sidebar.classList.add("sidebar_responsive");
		sidebarOpen=true;
	}
}

function closeSidebar(){
	 console.log("hsasah");
	 if (sidebarOpen){
		 console.log("hh");
		 sidebar.classList.remove("sidebar_responsive");
		 sidebarOpen = false;
	 }
}

function getuserpayments() {

    var phone = document.getElementById('phone').value;
    var ref = firebase.database().ref().child('Pickly').child('users');

    ref.orderByChild('phone').equalTo(phone).on('value', function (snapshot) {

        snapshot.forEach(function (childs) {
            //console.log(childs.child('payments'))

            childs.child('payments').forEach(function (payments) {

                console.log(payments.val());

            });


        });

    });
}