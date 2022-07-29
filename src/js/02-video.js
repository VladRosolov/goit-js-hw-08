import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iFrameRef = document.querySelector('#vimeo-player');
const player = new Player(iFrameRef);
setTime()
function onPlay (duration) {
    localStorage.setItem('videoplayer-current-time', duration.seconds);
}

async function setTime() {
    try {
        const time = localStorage.getItem('videoplayer-current-time')
        await player.setCurrentTime(time)
    }
    catch(error) {
        console.log('There is no data in LS')
    }
}

player.on('timeupdate', throttle(onPlay, 1000));


