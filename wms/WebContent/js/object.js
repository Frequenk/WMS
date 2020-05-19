//@author hjh
/* 页面加载时执行的函数
                                                	获取第一页（6条）物料信息 */
                                                	var objectpage=1;
                                                	var objectmaxpage=1;
                                                	$("#wuliaoguanli").click(function(){ 
                                                		$("#selectinput").val("");

                                                		objectlisttag = 0;
                                                		/* 获取物料信息 */
                                                		$.ajax({
                                            				//请求路径
                                            				url : "user/selectallobjectlist",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"objectpage":objectpage
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#objectbody").empty();
                                            					$.each($.parseJSON(data),function(index,ob){
                                            						var ojb="<div class='row'><div class='col-xs-1 '>"+ob.object_code+"</div><div class='col-xs-1'>"+ob.object_name+"</div><div class='col-xs-1'>"+ob.object_model+"</div><div class='col-xs-1'>"+ob.object_stock+"</div><div class='col-xs-2'>"+ob.object_create+"</div><div class='col-xs-2'>"+ob.object_update+"</div><div class='col-xs-2'>"+ob.object_exist+"</div><div class='col-xs-2'><button class='btn btn-success btn-xs' data-toggle='modal' data-target='#object_change' style='margin-top:20px'>修改</button><button class='btn btn-danger btn-xs' data-toggle='modal' data-target='#object_delete' style='margin-top:20px'>删除</button></div></div>";
                                                					$("#objectbody").append(ojb);

                                            					})
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			}); 
                                                		$("#objectpage").text('第'+objectpage+'页');
                                                		/* 获取物料总页数 */
                                                		$.ajax({
                                            				//请求路径
                                            				url : "user/selectobjectmaxpage",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#objectallpage").text('共'+data+'页');
                                            					objectmaxpage=data;
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			});
                                                	}); 
                                                	/*  下一页 */
                                                    $(document).on("click","#objectdownpage",function() {
                                                    	if (objectpage < objectmaxpage){
                                                    		objectpage = objectpage + 1;
                                                    	}
                                                    	if(objectlisttag == 0){
                                                    	$.ajax({
                                                				//请求路径
                                                			url : "user/selectallobjectlist",
                                                				//请求类型
                                                			type : "get",
                                                				//data表示发送的数据
                                                			traditional : true,
                                                			data : {
                                                				"objectpage":objectpage
                                                			},
                                                				//定义发送请求的数据格式为JSON字符串
                                                			contentType : "application/json;charset=utf-8",
                                                				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                                			dataType : "text",
                                                			async:false,
                                                				//成功响应的结果
                                                			success : function(data){
                                                				$("#objectbody").empty();
                                            					$.each($.parseJSON(data),function(index,ob){
                                            						var ojb="<div class='row'><div class='col-xs-1 '>"+ob.object_code+"</div><div class='col-xs-1'>"+ob.object_name+"</div><div class='col-xs-1'>"+ob.object_model+"</div><div class='col-xs-1'>"+ob.object_stock+"</div><div class='col-xs-2'>"+ob.object_create+"</div><div class='col-xs-2'>"+ob.object_update+"</div><div class='col-xs-2'>"+ob.object_exist+"</div><div class='col-xs-2'><button class='btn btn-success btn-xs' data-toggle='modal' data-target='#object_change' style='margin-top:20px'>修改</button><button class='btn btn-danger btn-xs' data-toggle='modal' data-target='#object_delete' style='margin-top:20px'>删除</button></div></div>";
                                                					$("#objectbody").append(ojb);

                                            					})	
                                                			},
                                                			error : function(){
                                                				alert("操作错误");
                                                			}
                                                		}); 
                                                    	}else{
                                                    		var obname = $("#selectinput").val();
                                                    		$.ajax({
                                                				//请求路径
                                                				url : "user/selectallobjectlistbyname",
                                                				//请求类型
                                                				type : "get",
                                                				//data表示发送的数据
                                                				traditional : true,
                                                				data : {
                                                					"objectpage":objectpage,
                                                					"obname":obname
                                                				},
                                                				//定义发送请求的数据格式为JSON字符串
                                                				contentType : "application/json;charset=utf-8",
                                                				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                                				dataType : "text",
                                                				async:false,
                                                				//成功响应的结果
                                                				success : function(data){
                                                					$("#objectbody").empty();
                                                					$.each($.parseJSON(data),function(index,ob){
                                                						var ojb="<div class='row'><div class='col-xs-1 '>"+ob.object_code+"</div><div class='col-xs-1'>"+ob.object_name+"</div><div class='col-xs-1'>"+ob.object_model+"</div><div class='col-xs-1'>"+ob.object_stock+"</div><div class='col-xs-2'>"+ob.object_create+"</div><div class='col-xs-2'>"+ob.object_update+"</div><div class='col-xs-2'>"+ob.object_exist+"</div><div class='col-xs-2'><button class='btn btn-success btn-xs' data-toggle='modal' data-target='#object_change' style='margin-top:20px'>修改</button><button class='btn btn-danger btn-xs' data-toggle='modal' data-target='#object_delete' style='margin-top:20px'>删除</button></div></div>";
                                                    					$("#objectbody").append(ojb);

                                                					})
                                                				},
                                                				error : function(){
                                                					alert("操作错误");
                                                				}
                                                			});
                                                    	}
                                                        $("#objectpage").text('第'+objectpage+'页');
                                                    })
                                                    /*  上一页 */
                                                    $(document).on("click","#objectuppage",function() {
                                                    	if(objectpage > 1){
                                                    		objectpage = objectpage - 1;
                                                    	}
                                                    	if(objectlisttag == 0){
                                                    	$.ajax({
                                                				//请求路径
                                                			url : "user/selectallobjectlist",
                                                				//请求类型
                                                			type : "get",
                                                				//data表示发送的数据
                                                			traditional : true,
                                                			data : {
                                                				"objectpage":objectpage
                                                			},
                                                				//定义发送请求的数据格式为JSON字符串
                                                			contentType : "application/json;charset=utf-8",
                                                				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                                			dataType : "text",
                                                			async:false,
                                                				//成功响应的结果
                                                			success : function(data){
                                                				$("#objectbody").empty();
                                            					$.each($.parseJSON(data),function(index,ob){
                                            						var ojb="<div class='row'><div class='col-xs-1 '>"+ob.object_code+"</div><div class='col-xs-1'>"+ob.object_name+"</div><div class='col-xs-1'>"+ob.object_model+"</div><div class='col-xs-1'>"+ob.object_stock+"</div><div class='col-xs-2'>"+ob.object_create+"</div><div class='col-xs-2'>"+ob.object_update+"</div><div class='col-xs-2'>"+ob.object_exist+"</div><div class='col-xs-2'><button class='btn btn-success btn-xs' data-toggle='modal' data-target='#object_change' style='margin-top:20px'>修改</button><button class='btn btn-danger btn-xs' data-toggle='modal' data-target='#object_delete' style='margin-top:20px'>删除</button></div></div>";
                                                					$("#objectbody").append(ojb);

                                            					})	
                                                			},
                                                			error : function(){
                                                				alert("操作错误");
                                                			}
                                                		});
                                                    }else{
                                                		var obname = $("#selectinput").val();
                                                		$.ajax({
                                            				//请求路径
                                            				url : "user/selectallobjectlistbyname",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"objectpage":objectpage,
                                            					"obname":obname
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#objectbody").empty();
                                            					$.each($.parseJSON(data),function(index,ob){
                                            						var ojb="<div class='row'><div class='col-xs-1 '>"+ob.object_code+"</div><div class='col-xs-1'>"+ob.object_name+"</div><div class='col-xs-1'>"+ob.object_model+"</div><div class='col-xs-1'>"+ob.object_stock+"</div><div class='col-xs-2'>"+ob.object_create+"</div><div class='col-xs-2'>"+ob.object_update+"</div><div class='col-xs-2'>"+ob.object_exist+"</div><div class='col-xs-2'><button class='btn btn-success btn-xs' class='objectxiugai' data-toggle='modal' data-target='#object_change' style='margin-top:20px'>修改</button><button class='btn btn-danger btn-xs' data-toggle='modal' data-target='#object_delete' style='margin-top:20px'>删除</button></div></div>";
                                                					$("#objectbody").append(ojb);

                                            					})
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			});
                                                	}
                                                        $("#objectpage").text('第'+objectpage+'页');
                                                    })
                                                    
                                                    
                                                	/* 搜索物料 */
                                                	$("#selectbutton").click(function(){ 
                                                		objectlisttag = 1;
                                                		/* 获取物料信息 */
                                                		var obname = $("#selectinput").val();
                                                		objectpage=1;
                                                		objectmaxpage=1;
                                                		$.ajax({
                                            				//请求路径
                                            				url : "user/selectallobjectlistbyname",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"objectpage":objectpage,
                                            					"obname":obname
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#objectbody").empty();
                                            					$.each($.parseJSON(data),function(index,ob){
                                            						var ojb="<div class='row'><div class='col-xs-1 '>"+ob.object_code+"</div><div class='col-xs-1'>"+ob.object_name+"</div><div class='col-xs-1'>"+ob.object_model+"</div><div class='col-xs-1'>"+ob.object_stock+"</div><div class='col-xs-2'>"+ob.object_create+"</div><div class='col-xs-2'>"+ob.object_update+"</div><div class='col-xs-2'>"+ob.object_exist+"</div><div class='col-xs-2'><button class='btn btn-success btn-xs' data-toggle='modal' data-target='#object_change' style='margin-top:20px'>修改</button><button class='btn btn-danger btn-xs' data-toggle='modal' data-target='#object_delete' style='margin-top:20px'>删除</button></div></div>";
                                                					$("#objectbody").append(ojb);

                                            					})
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			}); 
                                                		$("#objectpage").text('第'+objectpage+'页');
                                                		
                                                		/* 获取物料总页数 */
                                                		$.ajax({
                                            				//请求路径
                                            				url : "user/selectobjectbynamemaxpage",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"obname":obname
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#objectallpage").text('共'+data+'页');
                                            					objectmaxpage=data;
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			});
                                                	}); 
                                                	
                                                	/* 提交新建物料 */
                                                	$("#insertobjectsubmit").click(function(){
                                                		var ocode = $("#ocode").val();
                                                		var oname = $("#oname").val();
                                                		var omodel = $("#omodel").val();
                                                		var ounit = $("#ounit").val();
                                                		var ostock = $("#ostock").val();
                                                		var oother = $("#oother").val();
                                                		var re =  /^(0|\+?[1-9][0-9]*)$/;
                                                		if (ocode == ""){
                                                			alert("请输入物料代码");
                                                		}else if(oname == ""){
                                                			alert("请输入物料名");
                                                		}else if(omodel == ""){
                                                			alert("请输入物料类型");
                                                		}else if(ounit == ""){
                                                			alert("请输入物料单位");
                                                		}else if(ostock == ""){
                                                			alert("请输入物料数量");
                                                		}else if (!re.test(ostock)) {
                                    		                alert("请输入正整数！");
                                    		            }else{
                                                			if(oother == ""){
                                                				oother = "无";
                                                    		}
                                                			$.ajax({
                                                				//请求路径
                                                				url : "user/insertobject",
                                                				//请求类型
                                                				type : "get",
                                                				//data表示发送的数据
                                                				traditional : true,
                                                				data : {
                                                					"ocode":ocode,
                                                					"oname":oname,
                                                					"omodel":omodel,
                                                					"ounit":ounit,
                                                					"ostock":ostock,
                                                					"oother":oother
                                                				},
                                                				//定义发送请求的数据格式为JSON字符串
                                                				contentType : "application/json;charset=utf-8",
                                                				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                                				dataType : "text",
                                                				async:false,
                                                				//成功响应的结果
                                                				success : function(data){
                                                					if(data != null){
                                                						alert("物料添加成功");
                                                					}
                                                	                $("#addObject").modal('hide');

                                                				},
                                                				error : function(){
                                                					alert("操作错误");
                                                	                $("#addObject").modal('hide');

                                                				}
                                                			});
                                                		}
                                                	})
                                                	
                                                	/* 获取list上的物料 */
                                                	var upcode;
                                                	var upname;
                                                	var upmodel;
                                                	var upstock;
                                                	$("#objectbody").on("click",".btn",function(){
                                                		parent = $(this).parent().parent();
                                                		upcode = parent.children().eq(0).text();
                                                		upname = parent.children().eq(1).text();
                                                		upmodel = parent.children().eq(2).text();
                                                		upstock = parent.children().eq(3).text();
                                                		$("#upocode").val("");
                                                		$("#uponame").val("");
                                                		$("#upomodel").val("");
                                                		$("#upostock").val("");
                                                	})
                                                	
                                                	$("#updateobjectsubmit").click(function(){
                                                		var upocode = $("#upocode").val();
                                                		var uponame = $("#uponame").val();
                                                		var upomodel = $("#upomodel").val();
                                                		var upostock = $("#upostock").val();
                                                		var re =  /^(0|\+?[1-9][0-9]*)$/;
                                                		if (upocode == upcode && uponame == upname && upomodel == upmodel && upostock == upstock){
                                                			alert("物料信息未发生变动");
                                                		}else{
                                                			if (!re.test(upostock)) {
                                        		                alert("请输入正整数！");
                                        		            }else{
                                                			if(upocode == ""){
                                                				upocode = upcode;
                                                			}
                                                			if(uponame == ""){
                                                				uponame = upname;
                                                			}
                                                			if(upomodel == ""){
                                                				upomodel = upmodel;
                                                			}
                                                			if(upostock == ""){
                                                				upostock = upstock;
                                                			}
                                                			$.ajax({
                                                				//请求路径
                                                				url : "user/updateobject",
                                                				//请求类型
                                                				type : "get",
                                                				//data表示发送的数据
                                                				traditional : true,
                                                				data : {
                                                					"upocode":upocode,
                                                					"uponame":uponame,
                                                					"upomodel":upomodel,
                                                					"upostock":upostock,
                                                					"upcode":upcode,
                                                					"upname":upname,
                                                					"upmodel":upmodel,
                                                					"upstock":upstock
                                                					
                                                				},
                                                				//定义发送请求的数据格式为JSON字符串
                                                				contentType : "application/json;charset=utf-8",
                                                				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                                				dataType : "text",
                                                				async:false,
                                                				//成功响应的结果
                                                				success : function(data){
                                                					if(data != null){
                                                						alert("物料修改成功");
                                                					}
                                                				},
                                                				error : function(){
                                                					alert("发生错误");
                                                				}
                                                			});
                                                		}
                                                		$("#object_change").modal('hide');
                                                		objectlisttag = 0;
                                                		/* 获取物料信息 */
                                                		$.ajax({
                                            				//请求路径
                                            				url : "user/selectallobjectlist",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"objectpage":objectpage
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#objectbody").empty();
                                            					$.each($.parseJSON(data),function(index,ob){
                                            						var ojb="<div class='row'><div class='col-xs-1 '>"+ob.object_code+"</div><div class='col-xs-1'>"+ob.object_name+"</div><div class='col-xs-1'>"+ob.object_model+"</div><div class='col-xs-1'>"+ob.object_stock+"</div><div class='col-xs-2'>"+ob.object_create+"</div><div class='col-xs-2'>"+ob.object_update+"</div><div class='col-xs-2'>"+ob.object_exist+"</div><div class='col-xs-2'><button class='btn btn-success btn-xs' data-toggle='modal' data-target='#object_change' style='margin-top:20px'>修改</button><button class='btn btn-danger btn-xs' data-toggle='modal' data-target='#object_delete' style='margin-top:20px'>删除</button></div></div>";
                                                					$("#objectbody").append(ojb);

                                            					})
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			}); 
                                                		$("#objectpage").text('第'+objectpage+'页');
                                                		}
                                                	})
                                                	
                                                	/* 删除物料 */
                                                	$(document).on("click","#deleteobject",function(){
                                                		$.ajax({
                                            				//请求路径
                                            				url : "user/deleteobject",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"upcode":upcode,
                                            					"upname":upname,
                                            					"upmodel":upmodel,
                                            					"upstock":upstock
                                            					
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					if(data != null){
                                            						alert("删除物料成功");
                                            					}
                                            				},
                                            				error : function(){
                                            					alert("发生错误");
                                            				}
                                            			});
                                                		$("#object_delete").modal('hide');
                                                		objectlisttag = 0;
                                                		/* 获取物料信息 */
                                                		$.ajax({
                                            				//请求路径
                                            				url : "user/selectallobjectlist",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"objectpage":objectpage
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#objectbody").empty();
                                            					$.each($.parseJSON(data),function(index,ob){
                                            						var ojb="<div class='row'><div class='col-xs-1 '>"+ob.object_code+"</div><div class='col-xs-1'>"+ob.object_name+"</div><div class='col-xs-1'>"+ob.object_model+"</div><div class='col-xs-1'>"+ob.object_stock+"</div><div class='col-xs-2'>"+ob.object_create+"</div><div class='col-xs-2'>"+ob.object_update+"</div><div class='col-xs-2'>"+ob.object_exist+"</div><div class='col-xs-2'><button class='btn btn-success btn-xs' data-toggle='modal' data-target='#object_change' style='margin-top:20px'>修改</button><button class='btn btn-danger btn-xs' data-toggle='modal' data-target='#object_delete' style='margin-top:20px'>删除</button></div></div>";
                                                					$("#objectbody").append(ojb);

                                            					})
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			}); 
                                                		$("#objectpage").text('第'+objectpage+'页');
                                                	})
     function add_object_formreset(){
    $('#add_object_form').trigger("reset");
}