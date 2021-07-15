

function playVideo() {
    var video = $('#earthVideo').get(0),
      videoLength = video.duration;

      video.currentTime = (($(document).width())-event.pageX )/ ($(document).width()) * videoLength;
    
    // if (video.currentTime==videoLength){

    // }
  };$(document).mousemove(function(event){
playVideo();
  });