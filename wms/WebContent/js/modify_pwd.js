//@author fyk
    
	var flag1=0; 
	var flag2=0;
	var flag3=0;
	function modify_pwd_gogo(){
		if(flag1==1&&flag2==1&&flag3==1){
			$.ajax({
				//请求路径
				url : "user/modify_pwd",
				//请求类型
				type : "post",
				//data表示发送的数据
				data : JSON.stringify({user_pwd:$("#newPwd1").val()}),
				//定义发送请求的数据格式为JSON字符串
				contentType : "application/json;charset=utf-8",
				//定义回调响应的数据格式为JSON字符串，该属性可以省略
				dataType : "json",
				//成功响应的结果
				success : function(data){
					console.log(data);
					if(data.result=="sucess"){
						
						console.log("密码更改成功");	
					}
					else
						alert("密码未变动");
					$("#newPwd1").val("");
					$("#newPwd2").val("");
					$("#oldPwd").val("");
					$("#oldPwdDiv").html("");
				},
				error : function(){
					    alert("连接失败");
				}				
			});
				
			}
		else{
			alert("请先解决所有错误提示再提交");
		}
	}
$(document).ready(function() {
	$("#oldPwd").blur(function() {
		$("#oldpwdDiv").html("");
		var oldPwd = this.value;
		if (oldPwd == null || oldPwd == "") {
			$("#oldPwdDiv").html("密码不能为空！");
		} else{
			$.ajax({
				//请求路径
				url : "user/yanzhengpwd",
				//请求类型
				type : "post",
				//data表示发送的数据
				data : JSON.stringify({user_pwd:oldPwd}),
				//定义发送请求的数据格式为JSON字符串
				contentType : "application/json;charset=utf-8",
				//定义回调响应的数据格式为JSON字符串，该属性可以省略
				dataType : "json",
				//成功响应的结果
				success : function(data){
					if(data != null){
						flag1=1;
						$("#oldPwdDiv").html("旧密码正确");
					}
				},
				error : function(){
					flag1=0;
						$("#oldPwdDiv").html("旧密码错误");
				}				
			});
		}
	});//end of blur()
	$("#newPwd1").blur(function() {
		var newPwd1 = this.value;
		if (newPwd1 == null || newPwd1 == "") {
			$("#newPwd1Div").html("密码不能为空！");
			flag2=0;
		} else{
			$("#newPwd1Div").html("");
			flag2=1;
		}
		
	});
	$("#newPwd2").blur(function() {
		var newPwd1=document.getElementById("newPwd1").value;		
		var newPwd2 = this.value;
		$("#newPwd2").html("222");
		if (newPwd2 == null || newPwd2 == "") {
			$("#newPwd2Div").html("密码不能为空！");
			flag3=0;
		}else if(newPwd1!=newPwd2)  {
			$("#newPwd2Div").html("两次密码不一致");
			flag3=0;
		}
		else{
			$("#newPwd2Div").html("");
			flag3=1;
		}
	});
	
});