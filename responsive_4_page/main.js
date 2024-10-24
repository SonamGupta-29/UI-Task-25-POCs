$(function () {
  /* Initialize Carousel */
  var paused = 0;
  $("#carousel").carousel({
    interval: 1000,
    pause: 0
  });

  /* Play trigger */
  $('#toggleCarousel').on('click', (function () {
    var state = (paused) ? 'caret' : 'pause';
    paused = (paused) ? 0 : 1;
    $('#carousel').carousel(state);
    $(this).find('i').toggleClass('bi bi-caret-right bi bi-pause');
  }));
});

// for popper
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})