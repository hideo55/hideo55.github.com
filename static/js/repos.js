$(function() {
  var user = 'hideo55';
  $('#my-repos').html('<img src="static/images/ajax-loader.gif"/>');
  $.getJSON('https://api.github.com/users/' + user + '/repos?type=owner&sort=updated&callback=?', function(data) {
    var buf = [];
    $.each(data, function(i, repo) {
      if (!repo.fork)
        buf.push(['<div class="section" id="repo-' + repo.name + '">', '<section>', '<h3 class="subtitle"><a href="', repo.html_url, '">', repo.name, '</a></h3>', '<ul>', '<p class="description">', repo.description, '</p>', '<div class="commits" id="commit-' + repo.name + '"/>', '</ul>', '</section>', '</div>'].join(''));
    });
    $('#my-repos').css('display', 'none').html(buf.join('')).show('slow');
  });
});
