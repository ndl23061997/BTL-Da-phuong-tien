
$(document).ready(() => {
    // alert('hello');
    $('#player').on('hidden.bs.modal',function(e) {
        $('#video').attr('src', '');
    });

    $('#player').on('show.bs.modal', (e) =>{
        $('#video').attr('src', 'videos/video.mp4');
        $('#video').get(0).play();
    })
});

