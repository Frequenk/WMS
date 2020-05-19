//@author fyk
//载入用户管理页面
function user(t){
		$("#user_footer").show();
		$("#search_user_name").val("");
        var pageCur=parseInt($("#user_pageCur").html());
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
					$("#user_totalCount").html(data.totalCount);
					$("#user_totalPage").html(data.totalPage);
					$("#user_pageCur").html(data.pageCur);
					if(data.pageCur!=1)
						$("#user_back").show();
					else
						$("#user_back").hide();
					
					if((data.pageCur!=data.totalPage)&&data.totalPage!= 0)
						$("#user_next").show();
					else
						$("#user_next").hide();
					var allUsers=data.allUsers;
					console.log(allUsers[0].user_name);
					$("#user_data_row").empty()
					$.each(allUsers,function(i,user){
						var row=$("#user_row").clone();
						row.find("#user_user_key").text(user.user_key);
						row.find("#user_user_code").text(user.user_code);
						row.find("#user_user_name").text(user.user_name);
						row.find("#user_user_sex").text(user.user_sex);
						row.find("#user_user_birthday").text(user.user_birthday);
						row.find("#user_user_id").text(user.user_id);
						row.find("#user_user_native").text(user.user_native);
						row.find("#user_user_address").text(user.user_address);
						row.find("#user_user_tel").text(user.user_tel);
						row.find("#user_user_other").text(user.user_other);
						row.find("#user_user_create").text(user.user_create);
						row.find("#user_user_update").text(user.user_update);
						row.attr("id", "user_row_ready");
						row.attr("style","display:block");
						row.appendTo("#user_data_row");
					});
				}
			},
			error : function(){
					alert("error");
			}				
		});
        }
$("#user_data-div").on("click", "button", function() {
 	$("#user_modify_user_key_value").prop("value",$(this).parent().parent().parent().find("#user_user_key").text());
 	$("#user_modify_user_key").prop("value",$(this).parent().parent().parent().find("#user_user_key").text());
 	$("#user_modify_user_code").prop("value",$(this).parent().parent().parent().find("#user_user_code").text());
 	$("#user_modify_user_name").prop("value",$(this).parent().parent().parent().find("#user_user_name").text());
 	$("#user_modify_user_sex").prop("value",$(this).parent().parent().parent().find("#user_user_sex").text());
 	$("#user_modify_user_birthday").prop("value",$(this).parent().parent().parent().find("#user_user_birthday").text());
 	$("#user_modify_user_id").prop("value",$(this).parent().parent().parent().find("#user_user_id").text());
 	$("#user_modify_user_native").prop("value",$(this).parent().parent().parent().find("#user_user_native").text());
 	$("#user_modify_user_address").prop("value",$(this).parent().parent().parent().find("#user_user_address").text());
 	$("#user_modify_user_tel").prop("value",$(this).parent().parent().parent().find("#user_user_tel").text());
 	$("#user_modify_user_other").prop("value",$(this).parent().parent().parent().find("#user_user_other").text());
 	$("#user_modify_user_create").prop("value",$(this).parent().parent().parent().find("#user_user_create").text());
 	$("#user_modify_user_update").prop("value",$(this).parent().parent().parent().find("#user_user_update").text());
 	console.log($("#user_modify_user_name").attr("value"));
 });

//修改用户
function modify_user_submit(){
	console.log("这里是modify_user_submit()");
	var formObject = {};
    var formArray =$("#modify_user_form").serializeArray();
    $.each(formArray,function(i,item){
        formObject[item.name] = item.value;
    });
    formObject["user_exist"] = "1";
    console.log(JSON.stringify(formObject));
	 $.ajax({
			//请求路径
			url : "user/modify_info",
			//请求类型
			type : "post",
			//data表示发送的数据
			data : JSON.stringify(formObject),
			//定义发送请求的数据格式为JSON字符串
			contentType : "application/json;charset=utf-8",
			//定义回调响应的数据格式为JSON字符串，该属性可以省略
			dataType : "json",
            success: function (data) {
                console.log(data);//打印服务端返回的数据(调试用)
                $("#user_change").modal('hide');
                if (data.result == "sucess") {
                	alert("个人信息更改成功");
                    user();
                }
                else
               	 alert("个人信息还是原样");
                
            },
            error : function() {
                $("#user_change").modal('hide');
                alert("异常！");
            }
        });
}
//删除用户
function delete_user_submit(){
	console.log("这里是delete_user_submit()");
	var formObject = {};
    var formArray =$("#modify_user_form").serializeArray();
    $.each(formArray,function(i,item){
        formObject[item.name] = item.value;
    });
    formObject["user_exist"] = "0";
    console.log(JSON.stringify(formObject));
	 $.ajax({
			//请求路径
			url : "user/modify_info",
			//请求类型
			type : "post",
			//data表示发送的数据
			data : JSON.stringify(formObject),
			//定义发送请求的数据格式为JSON字符串
			contentType : "application/json;charset=utf-8",
			//定义回调响应的数据格式为JSON字符串，该属性可以省略
			dataType : "json",
            success: function (data) {
                console.log(data);//打印服务端返回的数据(调试用)
                $("#delete_user").modal('hide');
                if (data.result == "sucess") {
                	console.log("删除用户成功");
                    user();
                }
                else
               	 alert("删除用户失败");
                
            },
            error : function() {
                $("#delete_user").modal('hide');
                alert("异常！");
            }
        });
}
//添加用户
function add_user_submit(){
	console.log("这里是add_user_submit()");
	var formObject = {};
    var formArray =$("#add_user_form").serializeArray();
    $.each(formArray,function(i,item){
        formObject[item.name] = item.value;
    });
    console.log(JSON.stringify(formObject));
	 $.ajax({
			//请求路径
			url : "user/add_user",
			//请求类型
			type : "post",
			//data表示发送的数据
			data : JSON.stringify(formObject),
			//定义发送请求的数据格式为JSON字符串
			contentType : "application/json;charset=utf-8",
			//定义回调响应的数据格式为JSON字符串，该属性可以省略
			dataType : "json",
            success: function (data) {
                console.log(data);//打印服务端返回的数据(调试用)
                $("#addUser").modal('hide');
                if (data.result == "sucess") {
                    alert("用户添加成功");
                    user(); 
                }
                else
               	 alert("用户添加不成功");
                
            },
            error : function() {
                $("#addUser").modal('hide');
                alert("异常！");
            }
        });
}
//重置添加用户表单
function add_user_form_reset(){
    $('#add_user_form').trigger("reset");
}
//搜索用户
function search_user(){
	$("#user_footer").hide();
	console.log("这里是search_user()");
	console.log("JSON.stringify({'user_name':$('#search_user_name')}):"+JSON.stringify({"user_name":$("#search_user_name").val()}));
    $.ajax({
		//请求路径
		url : "user/search_user",
		//请求类型
		type : "post",
		//data表示发送的数据
		data : JSON.stringify({"user_name":$("#search_user_name").val()}),
		//定义发送请求的数据格式为JSON字符串
		contentType : "application/json;charset=utf-8",
		//定义回调响应的数据格式为JSON字符串，该属性可以省略
		dataType : "json",
		//成功响应的结果
		success : function(data){
			if(data != null){
				var allUsers=data.allUsers;
				$("#user_data_row").empty()
				$.each(allUsers,function(i,user){
					var row=$("#user_row").clone();
					row.find("#user_user_key").text(user.user_key);
					row.find("#user_user_code").text(user.user_code);
					row.find("#user_user_name").text(user.user_name);
					row.find("#user_user_sex").text(user.user_sex);
					row.find("#user_user_birthday").text(user.user_birthday);
					row.find("#user_user_id").text(user.user_id);
					row.find("#user_user_native").text(user.user_native);
					row.find("#user_user_address").text(user.user_address);
					row.find("#user_user_tel").text(user.user_tel);
					row.find("#user_user_other").text(user.user_other);
					row.find("#user_user_create").text(user.user_create);
					row.find("#user_user_update").text(user.user_update);
					row.attr("id", "user_row_ready");
					row.attr("style","display:block");
					row.appendTo("#user_data_row");
				});
			}
		},
		error : function(){
				alert("error");
		}				
	});
    }