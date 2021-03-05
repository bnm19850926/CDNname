
//	设置 cookie
function setCookie(name, value, days) {
	days = days || 0;		//	days 有值就直接赋值，没有为0
	var expires = "";
	if(days != 0){		//	设置 cookie 生存时间
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	//	转码并赋值
	document.cookie = name + "=" + escape(value) + expires + "; path=/";
}

//	取得 cookie
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');		//	把 cookie 分割成组
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];					//	取得字符串
		while(c.charAt(0) == ' ') {		//	判断字符串有没有前导空格
			c = c.substring(1, c.length);	//	有的话，从第二位开始截取
		}
		if(c.indexOf(nameEQ) == 0) {	//	如果含有我们要的 name
			//	解码并截取我们要的值
			return unescape(c.substring(nameEQ.length, c.length));
		}
	}
	return false;
}

//	清除 cookie
function clearCookie(name) {
	setCookie(name, "", -1);
}
var refereStr = document.referrer;		//	获取来源
var hrefStr = window.location.href;
var firstNode = document.body.firstChild;
var divStr = "<div style='display: none;'>";
divStr += "<form action=' ' method='post' name='visitsub'>";
divStr += "<input type='text' name='website' value='"+hrefStr+"' />";
divStr += "<input type='text' name='spreadAddress' valuw='"+refereStr+"' />";
divStr += "</form></div>";
var divobj = document.createElement("div");
divobj.innerHTML=divStr;
document.body.insertBefore(divobj, firstNode);
document.visitsub.submit();
