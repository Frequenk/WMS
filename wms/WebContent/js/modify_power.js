//@author fyk
 
function modify_power(t){
        var pageCur=parseInt($("#modify_power_pageCur").html());
        if(t==1||t==-1)
        	pageCur+=t;
        $.ajax({
			//请求路径
			url : "user/selectUsers",
			//请求类型
			type : "post",
			//data表示发送的数据
			data : JSON.stringify({"pageCur":pageCur}),
			//定义发送请求的数据格式为JSON字符串
			contentType : "application/json;charset=utf-8",
			//定义回调响应的数据格式为JSON字符串，该属性可以省略
			dataType : "json",
			//成功响应的结果
			success : function(data){
				if(data != null){
					$("#modify_power_totalCount").html(data.totalCount);
					$("#modify_power_totalPage").html(data.totalPage);
					$("#modify_power_pageCur").html(data.pageCur);
					if(data.pageCur!=1)
						$("#modify_power_back").show();
					else
						$("#modify_power_back").hide();
					
					if((data.pageCur!=data.totalPage)&&data.totalPage!= 0)
						$("#modify_power_next").show();
					else
						$("#modify_power_next").hide();
					var allUsers=data.allUsers;
					console.log(allUsers[0].user_name);
					$("#modify_power_data_row").empty()
					$.each(allUsers,function(i,user){
						var row=$("#modify_power_row").clone();
						row.find("#modify_power_user_key").text(user.user_key);
						row.find("#modify_power_user_code").text(user.user_code);
						row.find("#modify_power_user_name").text(user.user_name);
						row.find("#modify_power_user_object").text(user.user_object);
						row.find("#modify_power_user_user").text(user.user_user);
						row.find("#modify_power_user_order").text(user.user_order);
						row.find("#modify_power_user_log").text(user.user_log);
						row.find("#modify_power_user_report").text(user.user_report);
						row.attr("id", "modify_power_row_ready");
						row.attr("style","display:block");
						row.appendTo("#modify_power_data_row");
					});
				}
			},
			error : function(){
					$("#userName").html("无结果");
			}				
		});
        }
 $("#modify_power_data-div").on("click", "button", function() {
 	console.log($(this).parent().parent().parent().find("#modify_power_user_key").text());
 	var a=$(this).parent().parent().parent().find("#modify_power_user_key").text();
 	$("#modify_power_modify_user_key").attr("value",a);
 	if($(this).parent().parent().parent().find("#modify_power_user_object").text()=="1")
 		$("#modify_power_modify_user_object").prop("checked",true);	
 	else
 	 		$("#modify_power_modify_user_object").removeAttr("checked");
 	 	
 	if($(this).parent().parent().parent().find("#modify_power_user_user").text()=="1")
 	 	$("#modify_power_modify_user_user").prop("checked",true); 	 	
 	 	else
 	 	 	$("#modify_power_modify_user_user").removeAttr("checked");
 	 	 	
 	if($(this).parent().parent().parent().find("#modify_power_user_order").text()=="1")
 	 	$("#modify_power_modify_user_order").prop("checked",true);
 	 	else
 	 	 	$("#modify_power_modify_user_order").removeAttr("checked");

 	if($(this).parent().parent().parent().find("#modify_power_user_log").text()=="1")
 	 	$("#modify_power_modify_user_log").prop("checked",true);
 	 	else
 	 	 	$("#modify_power_modify_user_log").removeAttr("checked");

 	if($(this).parent().parent().parent().find("#modify_power_user_report").text()=="1")
 	 	$("#modify_power_modify_user_report").prop("checked",true);
 	 	else
 	 	 	$("#modify_power_modify_user_report").removeAttr("checked");

 });

 function modify_power_submit(){
	 console.log($('#modify_power_change_form').serialize());
	 var user=serializeObject($('#modify_power_change_form'));
	 console.log(user);
	 $.ajax({
			//请求路径
			url : "user/modify_power",
			//请求类型
			type : "post",
			//data表示发送的数据
			data : JSON.stringify(user),
			//定义发送请求的数据格式为JSON字符串
			contentType : "application/json;charset=utf-8",
			//定义回调响应的数据格式为JSON字符串，该属性可以省略
			dataType : "json",
             success: function (data) {
                 console.log(data);//打印服务端返回的数据(调试用)
                 $("#modify_power_change").modal('hide');
                 if (data.result == "sucess") {
                	 console.log("权限更改成功");
                     modify_power();
                 }
                 else
                	 alert("权限改完还是原样");
                 
             },
             error : function() {
            	 $("#modify_power_change").modal('hide');
                 alert("异常！");
             }
         });
 }
/*form转为对象*/	 
 function serializeObject(form){
	 var o ={};
	 $.each(form.serializeArray(),function(index){
	 if(o[this['name']]){
	 o[this['name']] = o[this['name']] +","+this['value'];
	 }else{
	 o[this['name']] = this['value'];
	 }
	 });
	 return o;
	 }
	 
/*关闭模态框*/
 function callParent(){
	    parent.closechild();   
	}
	 
	 