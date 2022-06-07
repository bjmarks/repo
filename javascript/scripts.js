/* Get Our Elements */
// const player = document.querySelector('.player');
// const video = player.querySelector('.viewer');
// const progress = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
// const toggle = player.querySelector('.toggle');
// const skipButtons = player.querySelectorAll('[data-skip]');
// const ranges = player.querySelectorAll('.player__slider');
/* Build out functions */
// function togglePlay() {
//   const method = video.paused ? 'play' : 'pause';
//   video[method]();
// }
// function updateButton() {
//   const icon = this.paused ? '►' : '❚❚';
//   console.log(icon);
//   toggle.textContent = icon;
// }
// function skip() {
//  video.currentTime += parseFloat(this.dataset.skip);
// }
// function handleRangeUpdate() {
//   video[this.name] = this.value;
// }
// function handleProgress() {
//   const percent = (video.currentTime / video.duration) * 100;
//   progressBar.style.flexBasis = `${percent}%`;
// }
// function scrub(e) {
//   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//   video.currentTime = scrubTime;
// }
/* Hook up the event listeners */
// video.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);
// video.addEventListener('timeupdate', handleProgress);
// toggle.addEventListener('click', togglePlay);
// skipButtons.forEach(button => button.addEventListener('click', skip));
// ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
// let mousedown = false;
// progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// progress.addEventListener('mousedown', () => mousedown = true);
// progress.addEventListener('mouseup', () => mousedown = false);

//seek
//fullscreen
//volume
//autoplay
//antidownload
function playPause( btn) {
  var vid = document.getElementById('vid');
  if (vid.paused) {
    vid.play();
    btn.innerHTML = "&#9208";
  }
  else {
    vid.pause();
    btn.innerHTML = "&#x25b6;&#xfe0f;";
  }
}















/*
  Index Player
*/
  var subbed = false;
  var liked = false;
  var dislike = false;
  var joined = false;
  var views = 1;
    function view() {
      document.getElementById('views').innerHTML = views + "&nbsp;views";
      views++;
      console.log(views);
    };
    function sub() {
      if (subbed == false) { 
        document.getElementById('sub').style.backgroundColor = "lightgrey";
        document.getElementById('sub').style.color = "red";
        document.getElementById('sub').innerHTML = "Suscribed";
        subbed = true;
      }
      else if (subbed == true) {
        document.getElementById('sub').style.backgroundColor = "red";
        document.getElementById('sub').style.color = "white";
        document.getElementById('sub').innerHTML = "Suscribe";
        subbed = false;
      };
      console.log(subbed);
    };
    function like() {
      if (dislike == true) {
        document.getElementById('dlike').style.backgroundColor = "grey";
        document.getElementById('dlike').style.color = "white";
        document.getElementById('dlike').innerHTML = "Dislike";
        dislike = false;
      };
      if (liked == false) { 
        document.getElementById('like').style.backgroundColor = "blue";
        document.getElementById('like').style.color = "grey";
        document.getElementById('like').innerHTML = "Liked";
        liked = true;
      }
      else if (liked == true) {
        document.getElementById('like').style.backgroundColor = "grey";
        document.getElementById('like').style.color = "white";
        document.getElementById('like').innerHTML = "Like";
        liked = false;
      };
      console.log(liked);
    };
    function dLike() {
      if (liked == true) {
        document.getElementById('like').style.backgroundColor = "grey";
        document.getElementById('like').style.color = "white";
        document.getElementById('like').innerHTML = "Like";
        liked = false;
      };
      if (dislike == false) { 
        document.getElementById('dlike').style.backgroundColor = "blue";
        document.getElementById('dlike').style.color = "grey";
        document.getElementById('dlike').innerHTML = "Disliked";
        dislike = true;
      }
      else if (dislike == true) {
        document.getElementById('dlike').style.backgroundColor = "grey";
        document.getElementById('dlike').style.color = "white";
        document.getElementById('dlike').innerHTML = "Dislike";
        dislike = false;
      };
        console.log(dislike);
    };
    function join() {
      if (joined == false) { 
        document.getElementById('join').style.backgroundColor = "grey";
        document.getElementById('join').style.color = "lightblue";
        document.getElementById('join').innerHTML = "Joined";
        joined = true;
      }
      else if (joined == true) {
        document.getElementById('join').style.backgroundColor = "blue";
        document.getElementById('join').style.color = "white";
        document.getElementById('join').innerHTML = "Join";
        joined = false;
      };
      console.log(joined);
    };
    function watchPlayer() {
      console.log("loading video");
      var file = "/Users/benjaminmarks/projects/first-repository/Videos/By The Grace of The Gods/By The Grace of The Gods Ep. 01";
      var video = document. getElementById('videoP');
      var source = document. getElementsByTagName('source');
          source.setAttribute('src', file +'.mp4');
          video.load();
    }
    