import Slider from './modules/slider';
import VideoPlayer from './modules/playVideo';


window.addEventListener('DOMContentLoaded', () => {
    const slideg = new Slider('.page', '.next');
    slideg.render();
    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});