/*@author hjh*/
var listtag = 0;
                                                var nowpage = 1;
                                                var maxpage = 0;
                                                var maxallpage = 0;
                                                
                                                $(document).on("click","#daysubmit",function() {
                                                	nowpage = 1;
                                                	listtag = 0;
                                                	var year = $("#year").val();
                                                	var month = $("#month").val();
                                                	$("#orderheader").empty();
                                                	var odh = "<div class='col-xs-3'>物料代码</div><div class='col-xs-3'>物料名</div><div class='col-xs-3'>1：进仓/0：出仓</div><div class='col-xs-3'>当月流量</div>"
                                    				$("#orderheader").append(odh);
                                                	$.ajax({
                                        				//请求路径
                                        				url : "user/selectorderlistpagenum",
                                        				//请求类型
                                        				type : "get",
                                        				//data表示发送的数据
                                        				traditional : true,
                                        				data : {
                                        					"year":year,
                                        					"month":month
                                        				},
                                        				//定义发送请求的数据格式为JSON字符串
                                        				contentType : "application/json;charset=utf-8",
                                        				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                        				dataType : "text",
                                        				async:false,
                                        				//成功响应的结果
                                        				success : function(data){
                                        					$("#orderpageallnum").text('共'+data+'页');
                                        					maxpage = data;
                                        				}
                                        			});
                                                	$.ajax({
                                        				//请求路径
                                        				url : "user/selectorderlist",
                                        				//请求类型
                                        				type : "get",
                                        				//data表示发送的数据
                                        				traditional : true,
                                        				data : {
                                        					"year":year,
                                        					"month":month,
                                        					"nowpage":nowpage
                                        				},
                                        				//定义发送请求的数据格式为JSON字符串
                                        				contentType : "application/json;charset=utf-8",
                                        				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                        				dataType : "text",
                                        				async:false,
                                        				//成功响应的结果
                                        				success : function(data){
                                        					$("#orderlist").empty();
                                        					$.each($.parseJSON(data),function(index,order){
                                        						var od="<div class='row'><div class='col-xs-3'>"+order.object_code+"</div><div class='col-xs-3'>"+order.object_name+"</div><div class='col-xs-3'>"+order.order_type+"</div><div class='col-xs-3'>"+order.order_amount+"</div></div>";
																$("#orderlist").append(od);

                                        					})	
                                        				},
                                        				error : function(){
                                        					alert("操作错误");
                                        				}
                                        			}); 
                                                	$("#orderpagenum").text('第'+nowpage+'页')
                                                })
                                               function selectallorder() {
                                                	nowpage = 1;
                                                	listtag = 1;
                                                	var year = $("#year").val();
                                                	var month = $("#month").val();
                                                	$("#orderheader").empty();
                                                	var odh = "<div class='col-xs-2'>单号</div><div class='col-xs-2'>操作人员代码</div><div class='col-xs-2'>操作人员</div><div class='col-xs-2'>物料代码</div><div class='col-xs-2'>物料名</div><div class='col-xs-1'>1:进仓/0:出仓</div><div class='col-xs-1'>数量</div>"
                                    				$("#orderheader").append(odh);
                                                	$.ajax({
                                        				//请求路径
                                        				url : "user/selectallorderlistpagenum",
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
                                        					$("#orderpageallnum").text('共'+data+'页');
                                        					maxallpage = data;
                                        				}
                                        			});
                                                	$.ajax({
                                        				//请求路径
                                        				url : "user/selectallorderlist",
                                        				//请求类型
                                        				type : "get",
                                        				//data表示发送的数据
                                        				traditional : true,
                                        				data : {
                                        					"nowpage":nowpage
                                        				},
                                        				//定义发送请求的数据格式为JSON字符串
                                        				contentType : "application/json;charset=utf-8",
                                        				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                        				dataType : "text",
                                        				async:false,
                                        				//成功响应的结果
                                        				success : function(data){
                                        					$("#orderlist").empty();
                                        					$.each($.parseJSON(data),function(index,order){
                                        						var od="<div class='row'><div class='col-xs-2'>"+order.order_num+"</div><div class='col-xs-2'>"+order.user_code+"</div><div class='col-xs-2'>"+order.user_name+"</div><div class='col-xs-2'>"+order.object_code+"</div><div class='col-xs-2'>"+order.object_name+"</div><div class='col-xs-1'>"+order.order_type+"</div><div class='col-xs-1'>"+order.order_amount+"</div></div>";
																$("#orderlist").append(od);

                                        					})
															
                                        					
                                        					
                                        				},
                                        				error : function(){
                                        					alert("操作错误");
                                        				}
                                        			}); 
                                                	$("#orderpagenum").text('第'+nowpage+'页')
                                                }
                                                $(document).on("click","#selectallorder",function() {
                                                	nowpage = 1;
                                                	listtag = 1;
                                                	var year = $("#year").val();
                                                	var month = $("#month").val();
                                                	$("#orderheader").empty();
                                                	var odh = "<div class='col-xs-2'>单号</div><div class='col-xs-2'>操作人员代码</div><div class='col-xs-2'>操作人员</div><div class='col-xs-2'>物料代码</div><div class='col-xs-2'>物料名</div><div class='col-xs-1'>1:进仓/0:出仓</div><div class='col-xs-1'>数量</div>"
                                    				$("#orderheader").append(odh);
                                                	$.ajax({
                                        				//请求路径
                                        				url : "user/selectallorderlistpagenum",
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
                                        					$("#orderpageallnum").text('共'+data+'页');
                                        					maxallpage = data;
                                        				}
                                        			});
                                                	$.ajax({
                                        				//请求路径
                                        				url : "user/selectallorderlist",
                                        				//请求类型
                                        				type : "get",
                                        				//data表示发送的数据
                                        				traditional : true,
                                        				data : {
                                        					"nowpage":nowpage
                                        				},
                                        				//定义发送请求的数据格式为JSON字符串
                                        				contentType : "application/json;charset=utf-8",
                                        				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                        				dataType : "text",
                                        				async:false,
                                        				//成功响应的结果
                                        				success : function(data){
                                        					$("#orderlist").empty();
                                        					$.each($.parseJSON(data),function(index,order){
                                        						var od="<div class='row'><div class='col-xs-2'>"+order.order_num+"</div><div class='col-xs-2'>"+order.user_code+"</div><div class='col-xs-2'>"+order.user_name+"</div><div class='col-xs-2'>"+order.object_code+"</div><div class='col-xs-2'>"+order.object_name+"</div><div class='col-xs-1'>"+order.order_type+"</div><div class='col-xs-1'>"+order.order_amount+"</div></div>";
																$("#orderlist").append(od);

                                        					})
															
                                        					
                                        					
                                        				},
                                        				error : function(){
                                        					alert("操作错误");
                                        				}
                                        			}); 
                                                	$("#orderpagenum").text('第'+nowpage+'页')
                                                })
                                                /*  下一页 */
                                                $(document).on("click","#downpage",function() {
                                                	if (listtag == 0){
                                                		if (nowpage < maxpage){
                                                			nowpage = nowpage + 1;
                                                		}
                                                		var year = $("#year").val();
                                                    	var month = $("#month").val();
                                                    	$("#orderheader").empty();
                                                    	var odh = "<div class='col-xs-3'>物料代码</div><div class='col-xs-3'>物料名</div><div class='col-xs-3'>1：进仓/0：出仓</div><div class='col-xs-3'>当月流量</div>"
                                        				$("#orderheader").append(odh);
                                                    	$.ajax({
                                            				//请求路径
                                            				url : "user/selectorderlist",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"year":year,
                                            					"month":month,
                                            					"nowpage":nowpage
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#orderlist").empty();
                                            					$.each($.parseJSON(data),function(index,order){
                                            						var od="<div class='row'><div class='col-xs-3'>"+order.object_code+"</div><div class='col-xs-3'>"+order.object_name+"</div><div class='col-xs-3'>"+order.order_type+"</div><div class='col-xs-3'>"+order.order_amount+"</div></div>";
    																$("#orderlist").append(od);

                                            					})	
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			}); 
                                                    	$("#orderpagenum").text('第'+nowpage+'页')
                                                    }else {
                                                    	if (nowpage < maxallpage){
                                                			nowpage = nowpage + 1;
                                                		}
                                                    	var year = $("#year").val();
                                                    	var month = $("#month").val();
                                                    	$("#orderheader").empty();
                                                    	var odh = "<div class='col-xs-2'>单号</div><div class='col-xs-2'>操作人员代码</div><div class='col-xs-2'>操作人员</div><div class='col-xs-2'>物料代码</div><div class='col-xs-2'>物料名</div><div class='col-xs-1'>1:进仓/0:出仓</div><div class='col-xs-1'>数量</div>"
                                        				$("#orderheader").append(odh);
                                                    	$.ajax({
                                            				//请求路径
                                            				url : "user/selectallorderlist",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"nowpage":nowpage
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#orderlist").empty();
                                            					$.each($.parseJSON(data),function(index,order){
                                            						var od="<div class='row'><div class='col-xs-2'>"+order.order_num+"</div><div class='col-xs-2'>"+order.user_code+"</div><div class='col-xs-2'>"+order.user_name+"</div><div class='col-xs-2'>"+order.object_code+"</div><div class='col-xs-2'>"+order.object_name+"</div><div class='col-xs-1'>"+order.order_type+"</div><div class='col-xs-1'>"+order.order_amount+"</div></div>";
    																$("#orderlist").append(od);

                                            					})
    															
                                            					
                                            					
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			}); 
                                                    	$("#orderpagenum").text('第'+nowpage+'页')
                                                    }
                                                })
                                                /*  上一页 */
                                                $(document).on("click","#uppage",function() {
                                                	if(nowpage > 1){
                                                		nowpage = nowpage - 1;
                                                	}
                                                	if (listtag == 0){
                                                		var year = $("#year").val();
                                                    	var month = $("#month").val();
                                                    	$("#orderheader").empty();
                                                    	var odh = "<div class='col-xs-3'>物料代码</div><div class='col-xs-3'>物料名</div><div class='col-xs-3'>1：进仓/0：出仓</div><div class='col-xs-3'>当月流量</div>"
                                        				$("#orderheader").append(odh);
                                                    	$.ajax({
                                            				//请求路径
                                            				url : "user/selectorderlist",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"year":year,
                                            					"month":month,
                                            					"nowpage":nowpage
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#orderlist").empty();
                                            					$.each($.parseJSON(data),function(index,order){
                                            						var od="<div class='row'><div class='col-xs-3'>"+order.object_code+"</div><div class='col-xs-3'>"+order.object_name+"</div><div class='col-xs-3'>"+order.order_type+"</div><div class='col-xs-3'>"+order.order_amount+"</div></div>";
    																$("#orderlist").append(od);

                                            					})	
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			}); 
                                                    	$("#orderpagenum").text('第'+nowpage+'页')
                                                    }else {
                                                    	var year = $("#year").val();
                                                    	var month = $("#month").val();
                                                    	$("#orderheader").empty();
                                                    	var odh = "<div class='col-xs-2'>单号</div><div class='col-xs-2'>操作人员代码</div><div class='col-xs-2'>操作人员</div><div class='col-xs-2'>物料代码</div><div class='col-xs-2'>物料名</div><div class='col-xs-1'>1:进仓/0:出仓</div><div class='col-xs-1'>数量</div>"
                                        				$("#orderheader").append(odh);
                                                    	$.ajax({
                                            				//请求路径
                                            				url : "user/selectallorderlist",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"nowpage":nowpage
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					$("#orderlist").empty();
                                            					$.each($.parseJSON(data),function(index,order){
                                            						var od="<div class='row'><div class='col-xs-2'>"+order.order_num+"</div><div class='col-xs-2'>"+order.user_code+"</div><div class='col-xs-2'>"+order.user_name+"</div><div class='col-xs-2'>"+order.object_code+"</div><div class='col-xs-2'>"+order.object_name+"</div><div class='col-xs-1'>"+order.order_type+"</div><div class='col-xs-1'>"+order.order_amount+"</div></div>";
    																$("#orderlist").append(od);

                                            					})
    															
                                            					
                                            					
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			}); 
                                                    	$("#orderpagenum").text('第'+nowpage+'页')
                                                    }
                                                })
