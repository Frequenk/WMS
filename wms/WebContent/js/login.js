//@author fyk

var USER
        $.ajax({
			url : "user/getAccount",
			type : "post",
			success : function(data){
				if(data != null){
					$("#userName").html(data.user_name);
					USER=data;
					   if(USER.user_order==0)
							$("#in_out_menu").hide();
					   if(USER.user_modify==0)
							$("#modify_power_menu").hide();
					   if(USER.user_user==0)
							$("#user_menu").hide();
					   if(USER.user_report==0)
							$("#report_menu").hide();	
					   if(USER.user_object==0)
							$("#wuliaoguanli").hide();	
				}
			},
			error : function(){
					$("#userName").html("无结果");
			}				
		});


