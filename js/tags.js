function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	vars[key] = value;
	});
	return vars;
}


function writeFilteredTagList(TagPosts, FilterTag) {
	document.writeln('<ul class="post-list">');
	for (var i=0; i<TagPosts.length; i++) {
	  p=TagPosts[i];
	  if (p.tags.indexOf(FilterTag)>-1) {
	    sListItemHTML = '  <li>\n  <span class="post-meta">' + p.date + '</span>\n  <span class="post-meta right">' + getPost_Tags(p.tags) + '</span>\n  <h2><a class="post-link" href=' + p.url + '>' + p.title + '</a></h2>';
	    document.writeln(sListItemHTML);}
	};
	document.writeln('</ul>');
}

function getPost_Tags(t) {
	var sListTagsHTML = '  <img src="../img/tag.png" /> ';
	for (var j=0; j<t.length; j++) {
	      sListTagsHTML += '<a class="post-meta" href="?t='+t[j]+'">'+t[j]+'</a>';
	      if (j<t.length-1) { sListTagsHTML += ', '}
	}
	return sListTagsHTML;
}