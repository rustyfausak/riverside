$(document).ready(function () {
  $('.img-view').on('click', function () {
    var img = $(this).find('img').first();
    if (!img.length) return false;
    popover_show(img.clone());
    return false;
  });
  $('#popover').on('click', popover_hide);
  $('.popover-close a').on('click', popover_hide);

  $('[data-toggle]').on('click', function () {
    $($(this).attr('data-toggle')).toggle();
    $(this).find('.fa-plus-square').removeClass('fa-plus-square').addClass('TEMP_TOGGLE_ICON');
    $(this).find('.fa-minus-square').removeClass('fa-minus-square').addClass('fa-plus-square');
    $(this).find('.TEMP_TOGGLE_ICON').removeClass('TEMP_TOGGLE_ICON').addClass('fa-minus-square');
  });
  $('[data-toggle]').each(function () {
    $(this).addClass('toggler');
    $(this).html('<i class="far fa-plus-square fa-xs"></i> ' + $(this).html());
  });
});

function popover_show(content) {
  $('.popover-inner').html(content);
  $('#popover').css('display', 'flex');
}
function popover_hide() {
  $('#popover').hide();
  return false;
}
