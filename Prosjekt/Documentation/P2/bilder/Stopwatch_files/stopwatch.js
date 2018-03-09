window.addEventListener("load", giGass);
var time;
var startClicked = false;
var hours, minutes, seconds, milliseconds;


function giGass(){
	document.getElementById("toggle-button").addEventListener("click",startPause);
	document.getElementById("reset-button").addEventListener("click",reset);
	display = document.getElementById("display-area");
	startPause = document.getElementById("toggle-button");
}

function startPause(){
	if (!startClicked){
		startClicked = true;
		run();
		startPause.innerHTML = "Pause";
	}
	else{
		startPause.innerHTML = "Continue";
		startClicked = false;
	}
}

function reset(){
	time = 0;
	var hours, minutes, seconds, milliseconds = 0;
	display.innerHTML = "00:00:00.000";
	if (startPause.innerHTML == "Continue"){
		startPause.innerHTML = "Start";
	}
}

function run(){
	if (startClicked){
		setTimeout(function(){
			if (milliseconds == 1000){
				seconds++;
				milliseconds = 0;
			}

			if (seconds == 60){
				minutes++;
				seconds = 0;
			}

			if (minutes == 60){
				minutes++;
				seconds = 0
			}
if (hours < 10){
				hours = "0" + hours;	
			}

			if (minutes < 10){
				minutes = "0" + minutes;
			}

			if (seconds < 10){
				seconds = "0" + seconds;
			}

			if (milliseconds < 10){
				milliseconds = "00" + milliseconds;
			}
			else if (milliseconds < 100 && milliseconds >= 10){
				milliseconds = "0" + milliseconds;
			}

			display.innerHTML = hours+":"+minutes+":"+seconds+":"+milliseconds;
			run();
		}, 100)
	}
}



