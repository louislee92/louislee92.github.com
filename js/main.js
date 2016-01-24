/**
 * this javascript is for louislee92.com
 */

// hidden and show
function toggleShow(dti){
	$("div[data-toggle-id="+dti+"]").fadeIn(1500);
}

$(function(){


	// render template to dom element with data
	function renderTmplTo(url, data, container){
		$.get(url, function(tmpl){
			container.html(juicer(tmpl, data));
		}, "text");
	}

	// profile yaml object
	var profile;
	// get profile yaml an render it on template
	$.get("./data/profile.yaml", function(data){
		profile = jsyaml.load(data);
	}, "text").then(function(){
		console.log(profile);
		renderTmplTo("./tmpl/site-nav.juicer", profile, $("#site-nav"));
		renderTmplTo("./tmpl/page-header.juicer", profile, $("#page-header"));
		renderTmplTo("./tmpl/main-content.juicer", profile, $("#main-content"));
		renderTmplTo("./tmpl/site-footer.juicer", profile, $("#site-footer"));
	});
});