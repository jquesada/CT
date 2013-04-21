//////////////////////////---------Toggle Captions Switch

function homeCaptionBoxOn(){
	document.getElementById('captionBox').style.display="block";
	document.getElementById('homeCaptionOn').style.display="none";
	document.getElementById('homeCaptionOff').style.display="block";
}
 
function homeCaptionBoxOff(){
	document.getElementById('captionBox').style.display="none";
	document.getElementById('homeCaptionOn').style.display="block";
	document.getElementById('homeCaptionOff').style.display="none";
}

function changeRed(){
	document.getElementById('lineOne').style.color="red";
}

function changeBlack(){
	document.getElementById('lineOne').style.color="black";
}