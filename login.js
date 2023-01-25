localStorage.setItem("JSK", "sanjiv");
localStorage.setItem("KJ", "jeganathan");
localStorage.setItem("RL", "lakshmi");

function changepass_JSK() {
	if ((document.getElementById("old_JSK").innerHTML == localStorage.getItem("JSK")) && (document.getElementById("new_JSK1").innerHTML == document.getElementById("new_JSK2").innerHTML)) {
		dcument.write("This is working");
	}else{
		alert("unable to change password...Try again");
	}
}

function changepass_KJ() {
	if ((document.getElementById("old_KJ").innerHTML == localStorage.getItem("KJ")) && (document.getElementById("new_KJ1").innerHTML == document.getElementById("new_KJ2").innerHTML)) {
		document.getElementById("new_KJ1").innerHTML = localStorage.getItem("KJ");
	}else{
		alert("unable to change password...Try again");
	}
}


function changepass_JSK() {
	if ((document.getElementById("old_RL").innerHTML == localStorage.getItem("RL")) && (document.getElementById("new_RL1").innerHTML == document.getElementById("new_RL2").innerHTML)) {
		document.getElementById("new_RL1").innerHTML = localStorage.getItem("RL");
	}else{
		alert("unable to change password...Try again");
	}
}


function check_JSK() {
	var x = document.getElementById("pass_JSK").value;
	if (x == localStorage.getItem("JSK")) {
		window.close()
		window.open("https://operating-system--jskthelegend.repl.co/home_page_JSK.html");
		}else{
		window.alert("Wrong password...Try again");
	}
}


function check_KJ() {
	var x = document.getElementById("pass_KJ").value;
	if (x == localStorage.getItem("KJ")) {
		window.close()
		window.open("https://operating-system--jskthelegend.repl.co/home_page_KJ.html");
		}else{
		window.alert("Wrong password...Try again");
		}
}


function check_RL() {
	var x = document.getElementById("pass_RL").value;
	if (x == localStorage.getItem("RL")) {
		window.close()
		window.open("https://operating-system--jskthelegend.repl.co/home_page_RL.html");
		}else{
		window.alert("Wrong password...Try again");
	}
}