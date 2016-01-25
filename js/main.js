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
		if(url instanceof Object){
			url.before(juicer(url.html(), data));
		}else{
			$.get(url, function(tmpl){
				container.append(juicer(tmpl, data));
			}, "text");
		}
	}

	// profile yaml object
	var profile;
	// get profile yaml an render it on template
	$.get("./data/profile.yaml", function(data){
		profile = jsyaml.load(data);
	}, "text").then(function(){
		//console.log(profile);
		//console.log("##"+$("template#navigation").html());
		renderTmplTo($("template#navigation"), profile, null);
		renderTmplTo("./tmpl/index.juicer", profile, $("#container"));
	});

	// router

});