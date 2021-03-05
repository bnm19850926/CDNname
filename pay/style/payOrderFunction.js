// JavaScript Document
function disableRightClick(){
	//禁用鼠标右键
	return false;
}
//document.oncontextmenu=disableRightClick;
/**
 * 屏蔽按键刷新
 */
function keyDown(){
	if((window.event.altKey)&&((window.event.keyCode==37)||(window.event.keyCode==39))||(event.keyCode==116)
		||((event.ctrlKey)&&(event.keyCode==82))||((event.shiftKey)&&(event.keyCode==121))){ 
			event.keyCode = 0;   
			event.returnValue = false;
		} 
}
document.onkeydown = keyDown;
/**
 * 输入游戏帐号，并选择支付方式
 */
function subPay(payStyleId,subareaId){
	payStyleId = $("input[name='payStyle.payStyleId'][type='radio']:checked").val(); 
	subareaId = $("#subareaId").val();
	if(payStyleId==null){
		alert("请选择支付方式！");
	} else {
		document.pay.submit();
	}
}
/**
 * 选择几张卡提交
 */
function selCardNum(){
	var num = $("#cardNum option:selected").text();
	for(var i=5; i>0; i--){
		for(var f=1; f<=num;f++){
			if(i<=f){
				$("#cardInfo"+i+"").show();
			} else {
				$("#cardInfo"+i+"").hide();
			}
		}
	}
}

function toPayInfo()
{
	if(checkRole())
	{
		var parentId = $("#parentId").attr("value");
		//如果是点卡
		if(parentId=="13069164735000009") {
			if(checkDK()){
				document.pay.submit();
			} else {
				return;
			}
		} else {					//如果是网银
			var orderMoney = $("#orderMoney").attr("value");
			var minMoney = $("#idMinMoney").attr("value");
			if(orderMoney == "" || document.getElementById("orderMoney").selectedIndex == 0){
				alert("请输入或选择充值金额！");
				$("#orderMoney").focus();
			} else {
				document.pay.submit();
			}
		}
	}
	else
	{
		return;
	}
}

/**
 * 账号、联系方式
 * @returns {Boolean}
 */
function checkRole() {
	var gameRole = $("#gameRole").attr("value");
	var qgameRole = $("#qgameRole").attr("value");
	var isShowCon = $("#isShowCon").attr("value");
	if(gameRole==null || gameRole==""){
		alert("请输入游戏帐号");
		$("#gameRole").focus();
		return false;
	} else if(qgameRole==null || qgameRole==""){
		alert("请确认您输入的游戏帐号");
		$("#qgameRole").focus();
		return false;
	} else if(qgameRole!=gameRole){
		alert("两次帐号输入不一致，请重新输入！");
		$("#gameRole").attr("value","");
		$("#qgameRole").attr("value","");
		$("#gameRole").focus();
		return false;
	} else {
		if(isShowCon=="1"){
			var qq = $("#QQNum").attr("value");
			var phone = $("#mobileNum").attr("value");
			if(phone=="" || phone==null || !/^\d+$/.test(phone)){
				alert("请输入正确的联系方式！");
				$("#mobileNum").val("");
				$("#mobileNum").focus();
				return false;
			} else if(qq=="" || qq==null || !/^\d+$/.test(qq)) {
				alert("请输入正确的联系QQ！");
				$("#QQNum").val("");
				$("#QQNum").focus();
				return false;
			} else{
				return true;
			}
		} else if(isShowCon=="2"){
			var qq = $("#QQNum").attr("value");
			if(qq=="" || qq==null || !/^\d+$/.test(qq)) {
				alert("请输入正确的联系QQ！");
				$("#QQNum").val("");
				$("#QQNum").focus();
				return false;
			} else {
				return true;
			}
		} else if(isShowCon=="3"){
			var phone = $("#mobileNum").attr("value");
			if(phone=="" || phone==null || !/^\d+$/.test(phone)){
				alert("请输入正确的联系方式！");
				$("#mobileNum").val("");
				$("#mobileNum").focus();
				return false;
			} else {
				return true;
			}
		} else {
			return true;
		}
	}
}

function checkDK(){
	var str = "";
	var num = $("#cardNum option:selected").text();
	var carLength = $("#carLength").attr("value");
	var carPwdLength = $("#carPwdLength").attr("value");
	var payStyleId = $("#payStyleId").attr("value");
	for(var i=1; i<=num; i++) {
		var carNos = $("#carNo"+i+"").attr("value");
		var carPsws = $("#carPsw"+i+"").attr("value");
		if(payStyleId=="13069167762180001"){
			if(document.getElementById("orderMoney"+i+"").selectedIndex==0) {
				alert("请选择第"+i+"张卡的面值！");
				if(str == ""){
					str = "e";
				} else {
					str=str+"e";
				}
			} else if((carNos.length!=16 && carNos.length!=carLength) && carLength!=0) {
				alert("请正确输入第"+i+"张卡的"+carLength+"位点卡卡号！");
				$("#carNo"+i+"").focus();
				if(str == ""){
					str = "e";
				} else {
					str=str+"e";
				}
			} else if((carPsws=="" || carPsws.length!=carPwdLength) && carPwdLength!=0) {
				alert("请正确输入第"+i+"张卡的"+carPwdLength+"位点卡密码！");
				$("#carPsw"+i+"").focus;
				if(str == ""){
					str = "e";
				} else {
					str=str+"e";
				}
			} else {
				if(str == ""){
					str = "t";
				} else {
					str=str+"t";
				}
			}	
		} else {
			if(document.getElementById("orderMoney"+i+"").selectedIndex==0) {
				alert("请选择第"+i+"张卡的面值！");
				if(str == ""){
					str = "e";
				} else {
					str=str+"e";
				}
			} else if((carNos=="" || carNos.length!=carLength) && carLength!=0) {
				alert("请正确输入第"+i+"张卡的"+carLength+"位点卡卡号！");
				$("#carNo"+i+"").focus();
				if(str == ""){
					str = "e";
				} else {
					str=str+"e";
				}
			} else if((carPsws=="" || carPsws.length!=carPwdLength) && carPwdLength!=0) {
				alert("请正确输入第"+i+"张卡的"+carPwdLength+"位点卡密码！");
				$("#carPsw"+i+"").focus;
				if(str == ""){
					str = "e";
				} else {
					str=str+"e";
				}
			} else {
				if(str == ""){
					str = "t";
				} else {
					str=str+"t";
				}
			}
		}
	}
	if(str.indexOf("e")<0){
		return true;
	} else {
		return false;
	}
}