window.addEventListener("load", giGass);
var time = 0;
var startClicked = false;
var startTime, interval;
var time, savedTime = 0;


function giGass(){
	document.getElementById("toggle-button").addEventListener("click",startPause);
	document.getElementById("reset-button").addEventListener("click",reset);
	display = document.getElementById("display-area");
	startPause = document.getElementById("toggle-button");
}

function startPause(){
	if (!startClicked){
		startClicked = true;
		startTime = new Date();
		interval = window.setInterval(run, 1);
		startPause.innerHTML = "Pause";
	}
	else{
		startPause.innerHTML = "Continue";
		startClicked = false;
		window.clearInterval(interval);
		savedTime = time;
	}
}

function reset(){
	display.innerHTML = "00:00:00.000";
	if (startPause.innerHTML == "Continue"){
		startPause.innerHTML = "Start";
		savedTime = 0;
	}
	startTime = new Date();
	savedTime = 0;
}

function run(){

	var endTime = new Date();
	time = endTime - startTime + savedTime;

	var hours = Math.floor(time /60/60/1000),
		minutes = Math.floor((time-hours*60*60*1000)/60/1000),
		seconds = Math.floor((time-minutes*60*1000-hours*60*60*1000)/1000),
		milliseconds = time-seconds*1000-minutes*60*1000-hours*60*60*1000;

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
}



