/*const video = document.querySelector('.video-site');
const source = video.querySelector('source');

function atualizarVideo() {
    if(window.innerWidth <= 1280) {
        source.src = 'assets/movie/Advocacia Meneghel - Banner Site - ipad.mp4'
    } else {
        source.src = 'assets/movie/Advocacia Meneghel - Banner Site - desktop.mp4'
    }
    video.load();
}

window.addEventListener('resize', atualizarVideo);
atualizarVideo();