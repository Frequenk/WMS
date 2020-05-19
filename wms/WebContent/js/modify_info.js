//@author fyk

function modify_info(){
	$('#modify_info_user_key').val(USER.user_key);
	$('#modify_info_user_code').val(USER.user_code);
	$('#modify_info_user_name').val(USER.user_name);
	$('#modify_info_user_sex').val(USER.user_sex);
	$('#modify_info_user_birthday').val(USER.user_birthday);
	$('#modify_info_user_id').val(USER.user_id);
	$('#modify_info_user_native').val(USER.user_native);
	$('#modify_info_user_address').val(USER.user_address);
	$('#modify_info_user_tel').val(USER.user_tel);
	$('#modify_info_user_other').val(USER.user_other);
	$('#modify_info_user_create').val(USER.user_create);
	$('#modify_info_user_update').val(USER.user_update);
}
function modify_info_submit(){
	var formObject = {};
    var formArray =$("#modify_info_form").serializeArray();
    $.each(formArray,function(i,item){
        formObject[item.name] = item.value;
    });
    formObject["user_key"] = USER.user_key;
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
                if (data.result == "sucess") {
                	console.log("个人信息更改成功");
                    getAccount();
                }
                else
               	 alert("个人信息还是原样");
                
            },
            error : function() {
                alert("异常！");
            }
        });
}
function getAccount(){
	console.log("这里是getAccount");
	 $.ajax({
			url : "user/getAccount",
			type : "post",
			success : function(data){
				if(data != null){
					$("#userName").html(data.user_name);
					USER=data;
					   if(USER.user_order==0){
							console.log("USER.user_order:"+USER.user_order);
							$("#in_out_menu").hide();
					   }
				}
			},
			error : function(){
					$("#userName").html("无结果");
			}				
		});
}