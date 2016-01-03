
$(document).ready(function(){
	// dom elements
	
	// append logos
	var logos_string = "";
	for(var i = 0; i < logo_data.length; i++){
		logos_string += "<div>"+
					  "<a target='_blank' href='"+logo_data[i].url+"'>"+
					  "<img title='"+logo_data[i].name+"' style='width: 100%;' src='"+logo_data[i].src+"'></a></div>";
	}
	$("#logos").append(logos_string);
	console.log(bm_data);
	// append bookmarks
	var bookmarks_string = "";
	for(var i = 0; i < bm_data.length; i++){
		bookmarks_string += '<div class="category">'+
		'<div><h4><i class="'+bm_data[i].icon+'"></i> '+bm_data[i].cateName+'</h4></div>'+
		'<div class="grid">';
			
		for(var j = 0; j < bm_data[i].bookmarks.length; j++){
			bookmarks_string += '<a href="'+bm_data[i].bookmarks[j].url+'" target="_blank">';
			if(bm_data[i].bookmarks[j].icon != undefined){
				bookmarks_string += '<i style="color: green" class="'+bm_data[i].bookmarks[j].icon+'"></i>&nbsp;'+bm_data[i].bookmarks[j].title+'</a>';
			}else{
				bookmarks_string += '<img src="'+bm_data[i].bookmarks[j].url+'/favicon.ico"/>&nbsp;'+bm_data[i].bookmarks[j].title+'</a>';
			}
		}
		bookmarks_string += '</div></div>';
	}
	$("#content").append(bookmarks_string);
});