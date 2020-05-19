/* hjh */

                                                var i=0;
                                                
                                                $("#jinchucang").on("click", "span", function() {
                                                	$(this).parent().parent().remove();
                                                    i--;
                                                });
            
												$(document).on("click","#jinchucanganniu",function() {
													i++;
                                                	$("#jinchucang").append('<div class="row"><div class="col-xs-3 "><span>删除</span></div><div class="col-xs-3"><select class="form-control objectselect" style="width: 200px;margin-top: 15px;"></select></div><div class="col-xs-3"><select class="form-control modelselect" style="width: 200px;margin-top: 15px;"></select></div><div class="col-xs-3"><input class="form-control" type="text" placeholder="输入数量" style="margin-top: 15px;"></div></div>');
                                                	//$(".objectselect").empty();
													$.ajax({
																		//请求路径
														url : "user/objectlist",
																			//请求类型
														type : "post",
																			//data表示发送的数据
																//data : JSON.stringify({snum:snum}),
																//定义发送请求的数据格式为JSON字符串
														contentType : "application/json;charset=utf-8",
																			//定义回调响应的数据格式为JSON字符串，该属性可以省略
														dataType : "json",
																			//成功响应的结果
														success : function(data){
															if(data != null){
																$.each(data,function(j,ob){
																	var op="<option id='ob' value='"+data[j].object_name+"'>"+data[j].object_name+"</option>";
																	$("#jinchucang").children().eq(i-1).children().eq(1).children("select").append(op);
																})
															}else{
																alert("物料为空");
															}
														},
														error : function(){
															alert("发生错误");
														}
													});
												});
                                
                                                $(document).on("change",".objectselect",function() {
                                                	var modelselect = $(this).parent().parent().children().eq(2).children();
                                                	modelselect.empty();
                                                	var objectname=$(this).val();
                                            		$.ajax({
                                            				//请求路径
                                            			url : "user/model",
                                            				//请求类型
                                            			type : "post",
                                            				//data表示发送的数据
                                            			data : objectname,
                                            				//定义发送请求的数据格式为JSON字符串
                                            			contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            			dataType : "json",
                                            				//成功响应的结果
                                            			success : function(data){
                                            				if(data != null){
                                                        		$.each(data,function(i,ob){
																	var op="<option id='ob' value='"+data[i].object_model+"'>"+data[i].object_model+"</option>";
																	modelselect.append(op);
																})
                                            				}else{
                                            					alert("物料为空");
                                            				}
                                            			},
                                            			error : function(){
                                            				alert("发生错误2");
                                            			}
                                            		});
                                            	}); 
                                                
                                                $(document).on("click","#jinchucangtijiao",function() {
                                                	var jinchucang=$(this).parent().children().eq(1).children().eq(1).children().eq(1);
                                                	var jqdivnum = jinchucang.children().length;
                                                	var xuanzejinchucang = $("#xuanzejinchucang").find('option:selected').text();
                                                	var objectlist=[];
                                                	if(jqdivnum == 0){
                                                		alert("请添加物品");
                                                	}else{
                                                		for(i=0;i<jqdivnum;i++){
                                                    		//alert(jinchucang.children().eq(i).children().length);
                                                			var objectnameselect = $("#jinchucang").children().eq(i).children().eq(1);
                                                    		var objectname=objectnameselect.find('option:selected').text();
                                                    		var objectmodelselect = $("#jinchucang").children().eq(i).children().eq(2);
                                                    		var objectmodel=objectmodelselect.find('option:selected').text();
                                                    		var objectnum = $("#jinchucang").children().eq(i).children().eq(3).children().eq(0).val();
                                                    		objectlist.push(String(objectname));
                                                    		objectlist.push(String(objectmodel));
                                                    		objectlist.push(String(objectnum));
                                                    	}
                                                		var re =  /^(0|\+?[1-9][0-9]*)$/;
                                                		 if (!re.test(objectnum)) {
                                                		                alert("请输入正整数！");
                                                		            }
                                                		 else{
                                                		$.ajax({
                                            				//请求路径
                                            				url : "user/jinchucang",
                                            				//请求类型
                                            				type : "get",
                                            				//data表示发送的数据
                                            				traditional : true,
                                            				data : {
                                            					"objectlist":objectlist,
                                            					"xuanzejinchucang":xuanzejinchucang
                                            				},
                                            				//定义发送请求的数据格式为JSON字符串
                                            				contentType : "application/json;charset=utf-8",
                                            				//定义回调响应的数据格式为JSON字符串，该属性可以省略
                                            				dataType : "text",
                                            				async:false,
                                            				//成功响应的结果
                                            				success : function(data){
                                            					alert(data);
                                            					
                                            				},
                                            				error : function(){
                                            					alert("操作错误");
                                            				}
                                            			}); 
                                                	}
                                                	}
                                                	
                                                	
                                            		
                                            	}); 

