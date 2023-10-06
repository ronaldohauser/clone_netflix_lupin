function alternarVideo() {
    const trailer = document.querySelector('.trailer');
    const video = trailer.querySelector('iframe');
    trailer.classList.toggle('ativo');
    
    if (trailer.classList.contains('ativo')) {
        video.src = video.src; //
    } else {
        video.src = '';
    }
}
