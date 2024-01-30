
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on('timeupdate', throttle((event) => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));


const videoSavedTime = localStorage.getItem('videoplayer-current-time');

if (videoSavedTime) {
    player.setCurrentTime(parseFloat(videoSavedTime));
};