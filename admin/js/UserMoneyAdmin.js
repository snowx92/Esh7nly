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


function getPaymentsReports() {
    var index = 0;

    console.log(id);
    var startdate = document.getElementById('mn').value;
    var enddate = document.getElementById('ela').value;

    var startyear = startdate[0] + startdate[1] + startdate[2] + startdate[3];
    var startmonth = startdate[5] + startdate[6];
    var startday = startdate[8] + startdate[9];

	/*if(startday[0]=='0')
		startday = startday[1];
	
	if(startmonth[0]=='0')
		startmonth = startmonth[1];*/

    var endyear = enddate[0] + enddate[1] + enddate[2] + enddate[3];
    var endmonth = enddate[5] + enddate[6];
    var endday = enddate[8] + enddate[9];

	/*if(endday[0]=='0')
		endday = endday[1];
	
	if(endmonth[0]=='0')
		endmonth = endmonth[1];*/


    var yearstart = parseInt(startyear);
    var yearend = parseInt(endyear);

    var monthstart = parseInt(startmonth);
    var monthend = parseInt(endmonth);

    var daystart = parseInt(startday);
    var dayend = parseInt(endday);

    console.log(daystart);
    console.log(monthstart);
    console.log(yearstart);

    if (yearend < yearstart || monthend < monthstart || dayend < daystart) {

        console.log('not valid date');
        window.alert("ÇáÑÌÇÁ ÇÏÎÇá ÇáÊæÇÑíÎ ÈÔßá ÕÍíÍ");
        return;

    }

    var ref = firebase.database().ref().child('Pickly').child('fawrypayments');
    ref.on('value', function (snapshot) {


        snapshot.forEach(function (child) {

            var date = child.child('date').val();
            var year = date[0] + date[1] + date[2] + date[3];
            var month = date[5] + date[6];
            var day = date[8] + date[9];


            var day1 = parseInt(day);
            var month1 = parseInt(month);
            var year1 = parseInt(year);


            if (year1 >= yearstart && month1 >= monthstart && day1 >= daystart) {

                //console.log(date);
                if (year1 <= yearend && month1 <= monthend && day1 <= dayend) {


                    console.log(child.child('to').val());
                    console.log(child.child('by').val());
                    console.log(child.child('money').val());
                   






                }

            }



        });
        



    });


}


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


