
// gallery START
$(document).ready(function(){
    $('.venobox').venobox();
});
// gallery end


// $(".welcome").fadeOut(2000).fadeIn(2000).fadeOut(2000).fadeIn(2000).fadeOut(2000);





// carrousel start
(function(){
//If you want to include more images, add the link name and URL of the image in the array list below.
	let images_list = [
		{"url":"https://html-generator.com/uploads/images/2021/11/22/44344OXXIOTIQ3A.jpg","name":"44344OXXIOTIQ3A.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/46121C4XO0MBBJ5.jpg","name":"46121C4XO0MBBJ5.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/47075SAFG9ZNK9O.jpg","name":"47075SAFG9ZNK9O.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/480009P2F6C42DB.jpg","name":"480009P2F6C42DB.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/49045503TEXRFJV.jpg","name":"49045503TEXRFJV.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/49856OLRS069QB2.jpg","name":"49856OLRS069QB2.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/510862JY1SL1U9Y.jpg","name":"510862JY1SL1U9Y.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/53215XPOOHUTE0G.jpg","name":"53215XPOOHUTE0G.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/54055SGXISH5KRE.jpg","name":"54055SGXISH5KRE.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/54995XLAJVOAJFP.jpg","name":"54995XLAJVOAJFP.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/71261XP4R_RLZAV.jpg","name":"71261XP4R_RLZAV.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/72380ZTUBXQBRRU.jpg","name":"72380ZTUBXQBRRU.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/73122XJQOWHLOI0.jpg","name":"73122XJQOWHLOI0.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/74117ZE5FGKYIMR.jpg","name":"74117ZE5FGKYIMR.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/752995DBP3YAFUD.jpg","name":"752995DBP3YAFUD.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/774165SA5U4ICY1.jpg","name":"774165SA5U4ICY1.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/79032_KCWQBJ2SI.jpg","name":"79032_KCWQBJ2SI.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2021/11/22/80019TMYEB15606.jpg","name":"80019TMYEB15606.jpg","link":""}
	];

	let slider_id = document.querySelector("#ClientsSlider");

	// append all images
	let dots_div = "";
	let images_div = "";
	for (let i = 0; i < images_list.length; i++) {
		// if no link without href="" tag
		let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
		images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:block"':'')+'>'+
						'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
					 '</a>';
	}
	slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
	let slide_index = 0;

	let images = slider_id.querySelectorAll(".hcg-slides");
	function showSlides() {
		if (slide_index > images.length-1) {
			slide_index = 0;
		}
		if (slide_index < 0) {
			slide_index = images.length-1;
		}
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = "none";
			if (i == slide_index) {
				images[i].style.display = "block";
			}
		}
	}

	setInterval(function(){
		slide_index++;
		showSlides();
	}, 2000);

})();


// carrousel End
