import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iFrameRef = document.querySelector('#vimeo-player');
const player = new Player(iFrameRef);

function onPlay (duration) {
    localStorage.setItem('videoplayer-current-time', duration.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))

player.on('timeupdate', throttle(onPlay, 1000));


