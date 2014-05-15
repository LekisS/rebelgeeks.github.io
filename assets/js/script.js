$(function() {
  $('.rider').hover(
    function() {
      var img = $(this).find('img');

      img.attr('data-src-avatar', img.attr('src'));
      img.attr('src', img.attr('data-src-bike'));
    },
    function() {
      var img = $(this).find('img');

      img.attr('src', img.attr('data-src-avatar'));
    }
  );
});