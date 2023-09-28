var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon= document.getElementById("sidebarIcon");

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


function insertNewRecord() {
	
	
	
	
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML =;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = ;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML =;
	 cell4 = newRow.insertCell(0);
    cell4.innerHTML =;
    cell5 = newRow.insertCell(1);
    cell5.innerHTML = ;
    cell6 = newRow.insertCell(2);
    cell6.innerHTML =;
	cell7 = newRow.insertCell(3);
    cell7.innerHTML ='<input class="btn" type="text" id="edit">';
    cell7 = newRow.insertCell(12);
    cell7.innerHTML = `<a onClick="onDelete(this)"><i class ="fas fa-trash-alt btndelete"></i></a>`;
}