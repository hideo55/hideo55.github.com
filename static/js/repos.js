$(function() {
var user = 'hideo55';
$('#my-repos').html('<img src="static/images/ajax-loader.gif"/>');
$.getJSON('http://github.com/api/v2/json/repos/show/' + user + '?callback=?', function(data) {
	var buf = [];
	data.repositories.sort(function(a, b){
		return (new Date(b.pushed_at).getTime()) - (new Date(a.pushed_at).getTime());
	})
	$.each(data.repositories, function (i, repo) {
		if (!repo.fork) buf.push([
			'<div class="section" id="repo-' + repo.name + '">',
			'<section>',
			'<h3 class="subtitle"><a href="', repo.url, '">', repo.name, '</a></h3>',
			'<ul>',
			'<p class="description">',
			repo.description,
			'</p>',
			'<div class="commits" id="commit-' + repo.name + '"/>',
			'</ul>',
			'</section>',
			'</div>'
			].join(''));
	});
	$('#my-repos').css('display', 'none').html(buf.join('')).show('slow');
	$('div.section .commits').each(function() {
			var commits = this;
			var repo = $(commits).attr('id').replace(/^commit-/, '');
			$('<a/>').text('[commits]').attr('href', '').attr('id', this.id).click(function() {
				var item = this;
				$(commits).html('<img src="static/images/ajax-loader.gif"/>');
				$.getJSON('http://github.com/api/v2/json/commits/list/' + user + '/' + repo + '/master?callback=?', function(data) {
					var buf = [];
					$.each(data.commits, function() {
						buf.push([
							'<br />',
							'<a href="' + this.url + '">',
							this.id,
							'</a>',
							' at ',
							this.committed_date,
							'<br />',
							'&nbsp;&nbsp;by ',
							'<a href="mailto:' + this.author.email + '">',
							this.author.name,
							'</a>',
							'<p>',
							this.message,
							'</p>'
						].join(''));
					});
					var content = $('<div/>').css({
						'background': '#eeeeee',
						'border': '1px black dotted',
						'overflow': 'hidden',
						'padding': '1em',
						'margin': '1em',
						'display': 'none'
						}).html(buf.join(''));
					$(commits).html('');
					$(commits).append(content);
					content.fadeIn('slow');
				});
				return false;
			}).appendTo(this);
		});
	});
});
