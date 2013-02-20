$(function() {
  $('.favicon').each(function() {
    var link = this;
    var dir = this.href.replace(/^(https?:\/\/[^\/]+\/).*$/, '$1');
    $('<img/>').attr({
    width: 16,
    height: 16,
    src: dir + 'favicon.ico',
    border: '0px'
    }).hide().css('vertical-align', 'baseline').one('load', function() { $(this).show().css('display', 'inline').prependTo(link)
    });
  });
});
