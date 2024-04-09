var video = document.querySelector(".video");
var slider = document.querySelector("#slider");

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	// turn off autoplay and turn off looping.
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function () {
	video.play();
	console.log("Play Video");
	// update the volume information.
	document.querySelector("#volume").textContent = slider.value + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
});


// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
});

// mute
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		console.log("Unmute");
	} else {
		video.muted = true;
		console.log("Mute");
	}
});

slider.addEventListener("input", function () {
	console.log("The current value is " + slider.value);
	video.volume = slider.value / 100;
	console.log("The current value is " + slider.value);
	document.querySelector("#volume").textContent = slider.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});