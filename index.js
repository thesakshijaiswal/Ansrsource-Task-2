const videoPlayer = document.querySelector("#video-player");
const mainVideo = videoPlayer.querySelector("#main-video");
const progressAreaTime = videoPlayer.querySelector(".progressAreaTime");
const controls = videoPlayer.querySelector(".controls");
const progressArea = videoPlayer.querySelector(".progress-area");
const progressBar = videoPlayer.querySelector(".progress-bar");
const fastRewind = videoPlayer.querySelector(".fast-rewind");
const playPause = videoPlayer.querySelector(".play-pause");
const fastForward = videoPlayer.querySelector(".fast-forward");
const volume = videoPlayer.querySelector(".volume");
const volumeRange = videoPlayer.querySelector(".volume-range");
const current = videoPlayer.querySelector(".current");
const totalDuration = videoPlayer.querySelector(".duration");
const autoPlay = videoPlayer.querySelector(".auto-play");
const settingsBtn = videoPlayer.querySelector(".settingsBtn");
const picInPic = videoPlayer.querySelector(".picture-in-picture");
const fullscreen = videoPlayer.querySelector(".fullscreen");
const settings = videoPlayer.querySelector("#settings");
const playBack = videoPlayer.querySelector(".play-back li");


function playVideo(){
    playPause.innerHTML = "pause";
    playPause.title = "play";
    videoPlayer.classList.add('paused')
    mainVideo.play();
}

function pauseVideo() {
    playPause.innerHTML = "play_arrow";
    playPause.title = "pause";
    videoPlayer.classList.remove('paused')
    mainVideo.pause();
}

// play or pause video on click
playPause.addEventListener('click',() => {
  const isVideoPaused = videoPlayer.classList.contains('paused');
  isVideoPaused ?  pauseVideo() : playVideo()
})

mainVideo.addEventListener("play",() => {
  playVideo();
})
mainVideo.addEventListener("pause",() => {
  pauseVideo();
})


//skip forward or backward function
fastRewind.addEventListener("click", () => {
  mainVideo.currentTime -= 10
})
fastForward.addEventListener("click", () => {
  mainVideo.currentTime += 10
})

//Load video duration
mainVideo.addEventListener("loadeddata",(e) => {
  let videoDuration = e.target.duration;
  let totalMin = Math.floor(videoDuration / 60);
  let totalSec = Math.floor(videoDuration % 60);

  //if seconds are less than 10 then add 0 at beginning
  totalSec < 10 ? totalSec ="0"+totalSec : totalSec;
  totalDuration.innerHTML = `${totalMin}:${totalSec}`
})

//current video duration
mainVideo.addEventListener("timeupdate",(e) => {
  let currentVideoTime = e.target.currentTime;
  let currentMin = Math.floor(currentVideoTime / 60);
  let currentSec = Math.floor(currentVideoTime % 60);
  currentSec < 10 ? currentSec ="0"+currentSec : currentSec;
  current.innerHTML = `${currentMin}:${currentSec}` 

  let videoDuration = e.target.duration;
  //progress bar width change
  let progressWidth = (currentVideoTime / videoDuration) * 100;
  progressBar.style.width = `${progressWidth}%`
})

//open settings
settingsBtn.addEventListener("click",() => {
  settings.classList.toggle("active");
  settingsBtn.classList.toggle("active");
})

//play back rate

playBack.forEach((event) => {
    event.addEventListener("click",() => {
      removeActiveClasses();
      event.classList.add("active");
      let speed = event.getAttribute('data-speed');
      mainVideo.playBackRate = speed;
    })
});

function removeActiveClasses() {
    playBack.forEach(event => {
        event.classList.remove("active");
    });
}