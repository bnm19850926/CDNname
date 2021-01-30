jQuery(function($)
{
	$("#loginUserName").focus();

	$("#toReg").click(function()
	{
		location.href="/gamemanager/toUserReg.html";
	});
});
/**
 * 检查商户
 * @returns {Boolean}
 */
function chkUser()
{
	var userName=$("#idUserName").val();
	if(userName=="")
	{
		alert("请输入商户账号");
		$("#idUserName").focus();
		return false;
	}
	else if(chkCn(userName))
	{
		alert("商户账号不能使用中文");
		$("#idUserName").select();
		return false;
	}

	var pwd=$("#idPwd").val();
	if(pwd=="")
	{
		alert("请输入商户密码");
		$("#idPwd").focus();
		return false;
	}

	var againPwd=$("#idAgainPwd").val();
	if(againPwd=="")
	{
		alert("请输入确认密码");
		$("#idAgainPwd").focus();
		return false;
	}

	if(pwd!=againPwd)
	{
		alert("您输入的两次密码不一致");
		$("#idAgainPwd").select();
		return false;
	}

	var bank=$("#idBank").val();
	if(bank!="财付通"&&bank!="支付宝")
	{
		var openingBank=$("#idOpeningBank").val();
		if(openingBank=="")
		{
			$("#idOpeningBank").focus();
			alert("请输入开户银行");
			return false;
		}
	}

	var bankUser=$("#idBankUser").val();
	if(bankUser=="")
	{
		if(bank=="财付通"||bank=="支付宝")
		{
			alert("请输入收款人");
		}
		else
		{
			alert("请输入开户姓名");
		}
		$("#idBankUser").focus();
		return false;
	}

	var bankAccount=$("#idBankAccount").val();
	if(bankAccount=="")
	{
		if(bank=="财付通")
		{
			alert("请输入QQ账号");
		}
		else if(bank=="支付宝")
		{
			alert("请输入支付宝账号");
		}
		else
		{
			alert("请输入银行账号");
		}
		$("#idBankAccount").focus();
		return false;
	}
	return true;
}
function subLogin()
{
	var userName=$("#loginUserName").val();
	var userPwd=$("#userPwd").val();
	if(userName==""||userPwd=="")
	{
		alert("请确认用户名和密码已输入");
		$("#loginUserName").focus();
		return false;
	}

	return true;
}
function changeBank()
{
	var bank=$("#idBank").val();
	if(bank=="财付通"||bank=="支付宝")
	{
		$("#li_openingBank").hide();
		$("#li_bankUser").html("收款人：");
		if(bank=="财付通")
			$("#li_bankAccount").html("ＱＱ账号：");
		else
			$("#li_bankAccount").html("支付宝账号：");
	}
	else
	{
		$("#li_openingBank").show();
		$("#li_bankUser").html("开户姓名：");
		$("#li_bankAccount").html("银行账号：");
	}
}
function changeUserType()
{
	var userType=$("#idUserType").val();
	if(userType==1)
	{
		$("#li_dailiUser").show();
		$("#li_gameId").show();
		$("#li_linesId").show();
		$("#li_payStylePath").hide();
		$("#div_fencheng").show();
		$("#div_dailifencheng").hide();
	}
	else
	{
		$("#li_dailiUser").hide();
		$("#li_gameId").hide();
		$("#li_linesId").hide();
		$("#li_payStylePath").show();
		$("#div_fencheng").hide();
		$("#div_dailifencheng").show();
	}
}
function changeGameId()
{
	var allName=$("#idGameId option:selected").text();
	if(allName=="魔域")
		$("#li_moyuLimit").show();
	else
		$("#li_moyuLimit").hide();
}