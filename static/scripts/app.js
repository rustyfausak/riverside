$(document).ready(function () {
  $('.img-view').on('click', function () {
    var img = $(this).find('img').first();
    if (!img.length) return false;
    popover_show(img.clone());
    return false;
  });
  $('#popover').on('click', popover_hide);
  $('.popover-close a').on('click', popover_hide);
});

function popover_show(content) {
  $('.popover-inner').html(content);
  $('#popover').css('display', 'flex');
}
function popover_hide() {
  $('#popover').hide();
  return false;
}
