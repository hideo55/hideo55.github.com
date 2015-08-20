$(function() {
  var user = 'hideo55';
  $('#my-repos').html('<img src="static/images/ajax-loader.gif"/>');
  $.getJSON('https://api.github.com/search/repositories?q=user:' + user, function(res) {
    var buf = [];
    console.log(res);
    $.each(res.data.items, function(i, repo) {
      if (!repo.fork)
        buf.push(['<div class="section" id="repo-' + repo.name + '">', '<section>', '<h3 class="subtitle"><a href="', repo.html_url, '">', repo.name, '</a></h3>', '<ul>', '<p><img src="static/images/star.png" alt="Stars">', repo.stargazers_count, '&nbsp;&nbsp;&nbsp;', '<span class="octicon octicon-repo-forked"></span>', repo.forks_count, '</p>', '<p class="description">', repo.description, '</p>', '</ul>', '</section>', '</div>'].join(''));
    });
    $('#my-repos').css('display', 'none').html(buf.join('')).show('slow');
  });
});
