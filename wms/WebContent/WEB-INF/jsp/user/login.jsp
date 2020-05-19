<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <base href="<%=basePath%>">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>用户登录</title>
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">  
	
	<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript">
	//确定按钮
	function tijiao(){
		document.forms[0].submit();
	}
	</script>
	<style>
	body {background-image:url('images/login_background.jpg');}
</style>
</head>
<body>
<script type="text/javascript">
</script>
    <form:form action="user/login" modelAttribute="user" method="post" class="form-horizontal" style="text-align: center">
         <div style="height: 420px;width: 370px;border-radius: 4px;border: rgba(183,183,183,0.5) solid 2px; position: absolute;right: 200px;top: 150px; padding: 40px;background:#FFF">
             <span class="lead" style="color: #9c9ac7;">用户登录</span>
             <form:input type="text" class="form-control" path="user_code" style="height: 40px;width: 280px; margin-top: 30px;" placeholder="员工代码" />
             <div class="text-left"><small style="color: red" id="account_tips"></small></div>
             <form:password  class="form-control" path="user_pwd" style="height: 40px;width: 280px;margin-top: 30px;" placeholder="密码" />
             <div class="text-left"><small style="color: red" id="pwd_tips"></small></div>
             <input type="button" class="btn btn-primary" style="height: 40px;width: 130px;border: rgba(185,176,243,0.63) solid 1px; margin: 30px 5px;" onclick="tijiao()" value="登录">
             <input type="reset" class="btn btn-primary" style="height: 40px;width: 130px;border: rgba(185,176,243,0.63) solid 1px; margin: 30px 5px;" value="重置"/>
             <a href="javascript:void(0)" title="管理员电话123">忘记密码</a>
             <div class="text-left"><small style="color: red" id="login_tips">${msg}</small></div>
             <!-- <a href="#">忘记密码</a> -->
         </div>
         
    </form:form>
</body>
</html>