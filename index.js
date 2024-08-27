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
const duration = videoPlayer.querySelector(".duration");
const autoPlay = videoPlayer.querySelector(".auto-play");
const settingsBtn = videoPlayer.querySelector(".settingsBtn");
const picInPic = videoPlayer.querySelector(".picture-in-picture");
const fullscreen = videoPlayer.querySelector(".fullscreen");
const settings = videoPlayer.querySelector("#settings");
const playBack = videoPlayer.querySelector(".play-back");


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

playPause.addEventListener('click',() => {
  const isVideoPaused = videoPlayer.classList.contains('paused');
  isVideoPaused ?  pauseVideo() : playVideo()
})

