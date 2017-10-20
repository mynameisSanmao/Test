var request = require('request');
var cheerio = require("cheerio");
var fs = require('fs');
//var iconv = require('iconv-lite');
var reqUrl = 'http://fx.dameiz.com/app/index.php?i=2&c=entry&p=index&do=shop&m=sz_yi';
request({uri:reqUrl}, function(err, response, body) {
//	console.log(body.cover-page-index);
//	 var change_data = iconv.decode(body,'UTF-8'); 
	var $ = cheerio.load(body, {decodeEntities: false});//防止中文乱码
	var list = 'top_nav'
	savedContent($,list);//将内容存到本地
	
	var img = 'j-items-li';//将图片存到本地
	savedImg($,img);
})
//保存文字到本地
function savedContent($,con){
	$('.'+con+ ' li').each(function(index,item){
		var x = $(this).find('a').html();
		x+=x+'\n';
		fs.appendFile('test.txt',x,function(err){
			if(err){
				console.log(err)
			}
		})
	})
}
//保存图片到本地
function savedImg($,img){
	$('.'+img+' a img').each(function(index,item){
		var img_fliname=index+'.jpg';
		var img_src = $(this).attr('src');
		request(img_src).pipe(fs.createWriteStream('./img/'+img_fliname))
	})
}
