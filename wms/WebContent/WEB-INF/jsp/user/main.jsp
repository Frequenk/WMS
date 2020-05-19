<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<base href="<%=basePath%>"/>
<!doctype html>
<html lang="ch">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="左右结构项目，属于大人员的社交工具">
        <meta name="keywords" content="左右结构项目 社交 占座 ">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="format-detection" content="telephone=no">
        <title>仓库管理系统</title>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/common.css" />
        <link rel="stylesheet" type="text/css" href="css/slide.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="css/flat-ui.min.css" />
        <link rel="stylesheet" type="text/css" href="css/jquery.nouislider.css">
        <link rel="stylesheet" type="text/css" href="css/fyk.css">
    </head>

    <body>
        <div id="wrap">
            <!-- 左侧菜单栏目块 -->
            <div class="leftMeun" id="leftMeun">
                <div id="logoDiv">
                    <p id="logoP"><img id="logo" alt="左右结构项目" src="images/logo.png"><span>仓库管理系统</span></p>
                </div>
                <div id="personInfor">
                    <p id="userName">账号名</p>
                    <p>
                        <a href="user/exit">退出登录</a>
                    </p>
                </div>
                <div class="meun-title">工作区</div>
                <div class="meun-item meun-item-active"  href="#main" aria-controls="main" role="tab" data-toggle="tab"><img src="images/icon_house.png">首页</div>
                <div class="meun-item" href="#modify_power" onclick="modify_power()" aria-controls="modify_power" role="tab" data-toggle="tab" id="modify_power_menu"><img src="images/icon_chara_grey.png">修改权限</div>
                <div class="meun-item" href="#user" onclick="user()" aria-controls="user" role="tab" data-toggle="tab" id="user_menu"><img src="images/icon_user_grey.png">用户管理</div>
                <div class="meun-item" href="#object" aria-controls="object" role="tab" data-toggle="tab" id="wuliaoguanli"><img src="images/icon_char_grey.png">物料管理</div>
				<div class="meun-item" href="#in_out" aria-controls="in_out" role="tab" data-toggle="tab" id="in_out_menu"><img src="images/icon_source_grey.png">进出仓管理</div>
                <div class="meun-item" href="#report" onclick="selectallorder()" aria-controls="report" role="tab" data-toggle="tab" id="report_menu"><img src="images/icon_rule_grey.png">报表查看</div>
                <div class="meun-title">个人中心</div>
             	<div class="meun-item" href="#modify_info" onclick="modify_info()" aria-controls="modify_info" role="tab" data-toggle="tab"><img src="images/icon_card_grey.png">个人信息</div>
             	<div class="meun-item" href="#modify_pwd" aria-controls="modify_pwd" role="tab" data-toggle="tab"><img src="images/icon_change_grey.png">修改密码</div>
            </div>
            <!-- 右侧具体内容栏目 -->
            <div id="rightContent">
                <a class="toggle-btn" id="nimei">
                    <i class="glyphicon glyphicon-align-justify"></i>
                </a>
                <!-- Tab panes -->
                <div class="tab-content">
                    <!-- 首页模块 -->
                    <div role="tabpanel" class="tab-pane active" id="main">

                        <div class="check-div">
                            <h1 style="display : inline">这里是一无是处的首页</h1>
                        </div>
                	 </div>
                    <!-- 权限管理模块 -->
                     <div role="tabpanel" class="tab-pane" id="modify_power">

                        <div class="check-div">
                            <h1 style="display : inline">权限管理</h1>
                        </div>
                        <div class="data-div" id="modify_power_data-div">
                            <div class="row tableHeader text-center">
                                <div class="col-xs-1">
                                   序号
                                </div>
                                <div class="col-xs-1">
                                    编码
                                </div>
                                <div class="col-xs-1">
                                   姓名
                                </div>
                                <div class="col-xs-1">
                                   管理物料
                                </div>
                                <div class="col-xs-1">
                                   管理员工
                                </div>
                                <div class="col-xs-1">
                                  进出仓
                                </div>
                                <div class="col-xs-1">
                                   查看日志
                                </div>
                                <div class="col-xs-1">
                                  查看报表
                                </div>
                                <div class="col-xs-3">
                                
                                </div>
                            </div>
                            
                            <div class="tablebody text-center" id="modify_power_row" style="display:none">
                                <div class="row">
                                	<div class="col-xs-1" id="modify_power_user_key"></div>
                                    <div class="col-xs-1" id="modify_power_user_code"></div>
                                    <div class="col-xs-1" id="modify_power_user_name"></div>
                                    <div class="col-xs-1" id="modify_power_user_object"></div>
                            		<div class="col-xs-1" id="modify_power_user_user"></div>
                            		<div class="col-xs-1" id="modify_power_user_order"></div>
                            		<div class="col-xs-1" id="modify_power_user_log"></div>
                            		<div class="col-xs-1" id="modify_power_user_report"></div>
                            	    <div class="col-xs-2"></div>
                            <div class="col-xs-2">
                               
                                <button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteSource" style="visibility:hidden";>删除</button>
                                 <button class="btn btn-success btn-xs" id=modify_power_change_button" data-toggle="modal" data-target="#modify_power_change">修改</button>
                            </div>
                        </div>
                        </div>
                        <div id=modify_power_data_row>
                    </div>

                </div>
                <!--页码块-->
                <footer class="footer">
                <tr>
				<td colspan="6" align="right">					
					共<span id="modify_power_totalCount"></span>条记录&nbsp;&nbsp;					
					共<span id="modify_power_totalPage"></span>页&nbsp;&nbsp;
					第<span id="modify_power_pageCur"></span>页&nbsp;&nbsp;
					<a id="modify_power_back" onclick="modify_power(-1)">上一页</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="modify_power_next" onclick="modify_power(1)">下一页</a>
				</td>
			</tr> 
                </footer>
                <!--修改权限弹出窗口-->
                <div class="modal fade" id="modify_power_change" role="dialog" aria-labelledby="gridSystemModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="gridSystemModalLabel">修改权限</h4>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <form class="form-horizontal" id="modify_power_change_form">
                                    	<input type="text"  name="user_key" id="modify_power_modify_user_key" style="display:none"/> 
                                        <div class="form-group ">
                                            <label for="sName" class="col-xs-4 control-label"><h5 style="font-weight:normal;">管理物料</h5></label>
                                            <div class="col-xs-6 ">
                                                 	<div class="slideThree">  
     													 <input type="checkbox" value="1" id="modify_power_modify_user_object" name="user_object" checked />
     													 <label for="modify_power_modify_user_object"></label>
   													 </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sLink" class="col-xs-4 control-label"><h5 style="font-weight:normal;">管理员工</h5></label>
                                            <div class="col-xs-6 ">
                                               <div class="slideThree">  
     													 <input type="checkbox" value="1" id="modify_power_modify_user_user" name="user_user" checked />
     													 <label for="modify_power_modify_user_user"></label>
   													 </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sOrd" class="col-xs-4 control-label"><h5 style="font-weight:normal;">进出仓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5></label>
                                            <div class="col-xs-6">
                                                <div class="slideThree">  
     													 <input type="checkbox" value="1" id="modify_power_modify_user_order" name="user_order" checked />
     													 <label for="modify_power_modify_user_order"></label>
   													 </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sOrd" class="col-xs-4 control-label"><h5 style="font-weight:normal;">查看日志</h5></label>
                                            <div class="col-xs-6">
                                                <div class="slideThree">  
     													 <input type="checkbox" value="1" id="modify_power_modify_user_log" name="user_log" checked />
     													 <label for="modify_power_modify_user_log"></label>
   													 </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sOrd" class="col-xs-4 control-label"><h5 style="font-weight:normal;">查看报表</h5></label>
                                            <div class="col-xs-6">
                                                <div class="slideThree">  
     													 <input type="checkbox" value="1" id="modify_power_modify_user_report" name="user_report" checked />
     													 <label for="modify_power_modify_user_report"></label>
   													 </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-xs btn-white" data-dismiss="modal">取 消</button>
                                <button type="button"  onclick="modify_power_submit()" class="btn btn-xs btn-green">保 存</button>
                            </div>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- /.modal -->



            </div>
             		<!-- 物料进出仓模块 -->
                    <div role="tabpanel" class="tab-pane" id="in_out">
                    <div class="check-div">
                            <h1 style="display : inline">进出仓管理</h1>
                        </div>
						<form role="form">
  							<div class="form-group">
  								<label for="name" style="width: 100px;margin-left: 20px;">选择进出仓</label>
    							<select id="xuanzejinchucang" class="form-control" style="width: 100px;margin-left: 20px;">
      								<option>进仓</option>
      								<option>出仓</option>
    							</select>
    						</div>
    						<div class="data-div">
                            <div class="row tableHeader">
                                <div class="col-xs-3 ">
                                    编码
                                </div>
                                <div class="col-xs-3">
                                    物料名
                                </div>
                                <div class="col-xs-3">
                                    型号
                                </div>
                                <div class="col-xs-3">
                                    数量
                                </div>
                            </div>
                            <div class="tablebody" id="jinchucang">
							</div>
						</div>
					</form>
					<div style="width:100%;">
						<button class="btn btn-default btn-lg btn-block" id="jinchucanganniu" style="width:400px;margin:0 auto;font-size: 28px;">  +  </button>
					</div>
					&nbsp;<button class="btn btn-default btn-lg" id="jinchucangtijiao"> 提交 </button>
					
            </div>            	                 		                    
		            <!--用户管理模块-->
		            <div role="tabpanel" class="tab-pane" id="user">
		                <div class="check-div form-inline">
		                    <div class="col-xs-3">
		                        <button class="btn btn-yellow btn-xs" onclick="add_user_form_reset()" data-toggle="modal" data-target="#addUser">添加用户 </button>
		                    </div>
		                    <div class="col-xs-4">
		                        <input type="text" class="form-control input-sm" placeholder="输入用户姓名搜索" id="search_user_name">
		                        <button class="btn btn-white btn-xs " onclick="search_user()">查 询 </button>
		                        <button class="btn btn-white btn-xs " onclick="user()">查 询 所有用户</button>
		                    </div>
		                </div>
		                <div class="data-div" id="user_data-div">
                            <div class="row tableHeader text-center">
                                <div class="col-xs-1">
                                   序号
                                </div>
                                <div class="col-xs-1">
                                    编码
                                </div>
                                <div class="col-xs-1">
                                   姓名
                                </div>
                                <div class="col-xs-1">
                                   性别
                                </div>
                                <div class="col-xs-1">
                                   生日
                                </div>
                                <div class="col-xs-1">
                                  籍贯
                                </div>
                                <div class="col-xs-1">
                                  手机
                                </div>
                                <div class="col-xs-2">
                                   修改日期
                                </div>
                                <div class="col-xs-1"></div>
                            </div>
                            
                            <div class="tablebody text-center" id="user_row" style="display:none">
                                <div class="row">
                                	<div class="col-xs-1" id="user_user_key"></div>
                                    <div class="col-xs-1" id="user_user_code"></div>
                                    <div class="col-xs-1" id="user_user_name"></div>
                                    <div class="col-xs-1" id="user_user_sex"></div>
                            		<div class="col-xs-1" id="user_user_birthday"></div>
                            		<div class="col-xs-1" id="user_user_native"></div>
                            		<div class="col-xs-1" id="user_user_tel"></div>
                            		<div class="col-xs-2" id="user_user_update"></div>
                            		<div class="col-xs-1"></div>
                            		<div style="display:none;" id=user_user_id></div>
                            		<div style="display:none;" id=user_user_address></div>
                            		<div style="display:none;" id=user_user_create></div>
                            		<div style="display:none;" id=user_user_other></div>
                            	    
                            <div class="col-xs-2">
                                 <button class="btn btn-success btn-xs" id=user_change_button" data-toggle="modal" data-target="#user_change">修改</button>
                                <button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#delete_user" >删除</button>
                            </div>
                        </div>
                        </div>
                        <div id=user_data_row>
                    </div>

                </div>
                <!--页码块-->
                <footer class="footer" id="user_footer">
                <tr>
				<td colspan="6" align="right">					
					共<span id="user_totalCount"></span>条记录&nbsp;&nbsp;					
					共<span id="user_totalPage"></span>页&nbsp;&nbsp;
					第<span id="user_pageCur"></span>页&nbsp;&nbsp;
					<a id="user_back" onclick="user(-1)">上一页</a>&nbsp;&nbsp;&nbsp;&nbsp;
					<a id="user_next" onclick="user(1)">下一页</a>
				</td>
			</tr> 
                </footer>
		
		                <!--弹出添加用户窗口-->
		                <div class="modal fade" id="addUser" role="dialog" aria-labelledby="gridSystemModalLabel">
		                    <div class="modal-dialog" role="document" style="width: 840px;">
		                        <div class="modal-content">
		                            <div class="modal-header">
		                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		                                <h4 class="modal-title" id="gridSystemModalLabel">添加用户</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="container-fluid">
		                                    <form class="form-horizontal" id="add_user_form">
		                                        <div class="form-group" style="display:none;">
                        </div>
                        <div class="form-group">
                             <label for="user_user_code" class="col-xs-2 control-label">编码：</label>
                            <div class="col-xs-3">
                                <input type="" class="form-control input-sm duiqi" name="user_code" id="user_add_user_code" placeholder="" style="margin-top: 7px; color: #50616d">
                            </div>
                             <label for="user_add_user_pwd" class="col-xs-2 control-label">密码：</label>
                            <div class="col-xs-3">
                                <input type="" class="form-control input-sm duiqi" name="user_pwd" id="user_add_user_pwd" placeholder="" style="margin-top: 7px; color: #50616d">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user_user_name" class="col-xs-2 control-label">姓名：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_name" id="user_add_user_name" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="user_user_sex" class="col-xs-2 control-label">性别：</label>
                            <div class="col-xs-2">
                            	<select class="form-control input-sm" name="user_sex" id="user_add_user_sex" >
      									<option>男</option>
      									<option>女</option>
   								 </select>
                                <!-- <input type=""  class="form-control input-sm duiqi" name="user_sex" id="user_add_user_sex" placeholder="" style="margin-top: 7px;"> -->
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user_user_birthday" class="col-xs-2 control-label">生日：</label>
                            <div class="col-xs-3">
                                <input type="" class="form-control input-sm duiqi" name="user_birthday" id="user_add_user_birthday" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="user_user_id" class="col-xs-2 control-label">身份证号：</label>
                            <div class="col-xs-3">
                                <input type="" class="form-control input-sm duiqi" name="user_id" id="user_add_user_id" placeholder="" style="margin-top: 7px;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user_user_native" class="col-xs-2 control-label">籍贯：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_native" id="user_add_user_native" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="user_user_address" class="col-xs-2 control-label">家庭住址：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_address" id="user_add_user_address" placeholder="" style="margin-top: 7px;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user_user_tel" class="col-xs-2 control-label">手机：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_tel" id="user_add_user_tel" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="user_user_other" class="col-xs-2 control-label">备注：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_other" id="user_add_user_other" placeholder="" style="margin-top: 7px;">
                            </div>
                        </div>
		                                    </form>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                                <button type="button" class="btn btn-xs btn-white" data-dismiss="modal">取 消</button>
		                                <button type="button" onclick="add_user_submit()" class="btn btn-xs btn-green">保 存</button>
		                            </div>
		                        </div>
		                        <!-- /.modal-content -->
		                    </div>
		                    <!-- /.modal-dialog -->
		                </div>
		                <!-- /.modal -->
		
		                <!--弹出修改用户窗口-->
		                <div class="modal fade" id="user_change" role="dialog" aria-labelledby="gridSystemModalLabel" >
		                    <div class="modal-dialog" role="document" style="width: 840px;">
		                        <div class="modal-content">
		                            <div class="modal-header">
		                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		                                <h4 class="modal-title" id="gridSystemModalLabel">修改用户</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="container-fluid">
		                                     <form class="form-horizontal" id="modify_user_form">
		                  
		                   <div class="form-group" style="display:none;">
                            <label for="user_modify_user_key_value" class="col-xs-2 control-label" style="display:none;">序号：</label>
                            <div class="col-xs-3" style="display:none;">
                                <input id="user_modify_user_key_value" name="user_key" style="display:none;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user_modify_user_key" class="col-xs-2 control-label">序号：</label>
                            <div class="col-xs-3">
                                <input type="" disabled class="form-control input-sm duiqi" name="user_key" id="user_modify_user_key"  placeholder="" style="margin-top: 7px; color: #50616d">
                            </div>
                             <label for="user_modify_user_code" class="col-xs-2 control-label">编码：</label>
                            <div class="col-xs-3">
                                <input type="" disabled class="form-control input-sm duiqi" name="user_code" id="user_modify_user_code" placeholder="" style="margin-top: 7px; color: #50616d">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user_modify_user_name" class="col-xs-2 control-label">姓名：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_name" id="user_modify_user_name" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="user_modify_user_sex" class="col-xs-2 control-label">性别：</label>
                            <div class="col-xs-2">
                            	<select class="form-control input-sm" name="user_sex" id="user_modify_user_sex">
      									<option>男</option>
      									<option>女</option>
   							 	</select>
                                <!-- <input type=""  class="form-control input-sm duiqi" name="user_sex" id="user_modify_user_sex" placeholder="" style="margin-top: 7px;"> -->
                            </div>
                            
                        </div>
                        <div class="form-group">
                            <label for="user_modify_user_birthday" class="col-xs-2 control-label">生日：</label>
                            <div class="col-xs-3">
                                <input type="" class="form-control input-sm duiqi" name="user_birthday" id="user_modify_user_birthday" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="user_modify_user_id" class="col-xs-2 control-label">身份证号：</label>
                            <div class="col-xs-3">
                                <input type="" class="form-control input-sm duiqi" name="user_id" id="user_modify_user_id" placeholder="" style="margin-top: 7px;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user_modify_user_native" class="col-xs-2 control-label">籍贯：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_native" id="user_modify_user_native" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="user_modify_user_address" class="col-xs-2 control-label">家庭住址：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_address" id="user_modify_user_address" placeholder="" style="margin-top: 7px;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user_modify_user_tel" class="col-xs-2 control-label">手机：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_tel" id="user_modify_user_tel" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="user_modify_user_other" class="col-xs-2 control-label">备注：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_other" id="user_modify_user_other" placeholder="" style="margin-top: 7px;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="user_modify_user_create" class="col-xs-2 control-label">创建日期：</label>
                            <div class="col-xs-3">
                                <input type="" disabled class="form-control input-sm duiqi" name="user_create" id="user_modify_user_create" placeholder="" style="margin-top: 7px; color: #50616d">
                            </div>
                            <label for="user_modify_user_update" class="col-xs-2 control-label">更改日期：</label>
                            <div class="col-xs-3">
                                <input type="" disabled class="form-control input-sm duiqi" name="user_update" id="user_modify_user_update" placeholder="" style="margin-top: 7px; color: #50616d">
                            </div>
                        </div>
                        
                    </form>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                                <button type="button" class="btn btn-xs btn-white" data-dismiss="modal">取 消</button>
		                                <button type="button"  onclick="modify_user_submit()" class="btn btn-xs btn-green">保 存</button>
		                            </div>
		                        </div>
		                        <!-- /.modal-content -->
		                    </div>
		                    <!-- /.modal-dialog -->
		                </div>
		                <!-- /.modal -->
		
		                <!--弹出删除用户警告窗口-->
		                <div class="modal fade" id="delete_user" role="dialog" aria-labelledby="gridSystemModalLabel">
		                    <div class="modal-dialog" role="document">
		                        <div class="modal-content">
		                            <div class="modal-header">
		                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		                                <h4 class="modal-title" id="gridSystemModalLabel">提示</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="container-fluid">
		                                    确定要删除该用户？删除后不可恢复！
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                                <button type="button" class="btn btn-xs btn-white" data-dismiss="modal">取 消</button>
		                                <button type="button" onclick="delete_user_submit()" class="btn  btn-xs btn-danger">确定删除</button>
		                            </div>
		                        </div>
		                        <!-- /.modal-content -->
		                    </div>
		                    <!-- /.modal-dialog -->
		                </div>
		                <!-- /.modal -->
		
		            </div>
					<!-- 物料管理模块 -->
					<div role="tabpanel" class="tab-pane" id="object">
                <div class="check-div form-inline">
                    <div class="col-xs-3">
                        <button class="btn btn-yellow btn-xs" onclick="add_object_formreset()" data-toggle="modal" data-target="#addObject" style="margin-top:20px">添加物料</button>
                    </div>
                    <div class="col-xs-4">
                        <input type="text" class="form-control input-sm" placeholder="输入物料名" id="selectinput">
                        <button class="btn btn-white btn-xs " id="selectbutton"> 查 询 </button>
                    </div>
                </div>
                <div class="data-div">
                    <div class="row tableHeader">
                        <div class="col-xs-1 ">
                            物料代码
                        </div>
                        <div class="col-xs-1">
                            物料名
                        </div>
                        <div class="col-xs-1">
                            物料类型
                        </div>
                        <div class="col-xs-1">
                            库余量
                        </div>
                        <div class="col-xs-2">
                            创建时间
                        </div>
                        <div class="col-xs-2">
                            修改时间
                        </div>
                        <div class="col-xs-2">
                1:存在
                        </div>
                        <div class="col-xs-2">
                	操作
                        </div>
                    </div>
                    <div class="tablebody" id="objectbody">
                    </div>

                </div>
                <footer class="footer">
                    <ul class="pagination">
                        <li class="gray" id="objectpage">
                            第-页
                        </li>
                        <li class="gray" id="objectallpage">
                           共-页
                        </li>
                        <li class="gray" >
                            <a style="color:rgb(154,164,175)" id="objectuppage">上一页</a>
                        </li>
                        <li class="gray" >
                            <a style="color:rgb(154,164,175)" id="objectdownpage">下一页</a>
                        </li>
                    </ul>
                </footer>

                <!--弹出添加物料窗口-->
                <div class="modal fade" id="addObject" role="dialog" aria-labelledby="gridSystemModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="gridSystemModalLabel">添加物料</h4>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <form class="form-horizontal" id="add_object_form">
                                        <div class="form-group ">
                                            <label for="sName" class="col-xs-3 control-label">物料代码：</label>
                                            <div class="col-xs-8 ">
                                                <input type="text" class="form-control input-sm duiqi" id="ocode" placeholder="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sLink" class="col-xs-3 control-label">物料名：</label>
                                            <div class="col-xs-8 ">
                                                <input type="text" class="form-control input-sm duiqi" id="oname" placeholder="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sOrd" class="col-xs-3 control-label">物料类型：</label>
                                            <div class="col-xs-8">
                                                <input type="text" class="form-control input-sm duiqi" id="omodel" placeholder="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sKnot" class="col-xs-3 control-label">物料单位：</label>
                                            <div class="col-xs-8">
                                                <input type="text" class="form-control input-sm duiqi" id="ounit" placeholder="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sKnot" class="col-xs-3 control-label">物料数量：</label>
                                            <div class="col-xs-8">
                                                <input type="text" class="form-control input-sm duiqi" id="ostock" placeholder="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sKnot" class="col-xs-3 control-label">物料备注：</label>
                                            <div class="col-xs-8">
                                                <input type="text" class="form-control input-sm duiqi" id="oother" placeholder="">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-xs btn-white" data-dismiss="modal">取 消</button>
                                <button type="button" class="btn btn-xs btn-green" id="insertobjectsubmit">保 存</button>
                            </div>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- /.modal -->

                <!--弹出修改物料窗口-->
                <div class="modal fade" id="object_change" role="dialog" aria-labelledby="gridSystemModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="gridSystemModalLabel">修改物料</h4>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <form class="form-horizontal">
                                        <div class="form-group ">
                                            <label for="sName" class="col-xs-3 control-label">物料代码：</label>
                                            <div class="col-xs-8 ">
                                                <input type="text" class="form-control input-sm duiqi" id="upocode" placeholder="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sLink" class="col-xs-3 control-label">物料名：</label>
                                            <div class="col-xs-8 ">
                                                <input type="text" class="form-control input-sm duiqi" id="uponame" placeholder="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sOrd" class="col-xs-3 control-label">物料类型：</label>
                                            <div class="col-xs-8">
                                                <input type="text" class="form-control input-sm duiqi" id="upomodel" placeholder="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="sKnot" class="col-xs-3 control-label">物料数量：</label>
                                            <div class="col-xs-8">
                                                <input type="text" class="form-control input-sm duiqi" id="upostock" placeholder="">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-xs btn-white" data-dismiss="modal">取 消</button>
                                <button type="button" class="btn btn-xs btn-green" id="updateobjectsubmit">保 存</button>
                            </div>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- /.modal -->

                <!--弹出删除用户警告窗口-->
                <div class="modal fade" id="object_delete" role="dialog" aria-labelledby="gridSystemModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="gridSystemModalLabel">提示</h4>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    确定要删除该物料？删除后不可恢复！
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-xs btn-white" data-dismiss="modal">取 消</button>
                                <button type="button" class="btn  btn-xs btn-danger" id="deleteobject">确 定</button>
                            </div>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- /.modal -->

            </div>

		          	<!-- 报表模块 -->
		           <div role="tabpanel" class="tab-pane" id="report">

                <div class="check-div form-inline">
                    <div class="col-lg-2 col-xs-2">
                        <label for="paixu">年份:&nbsp;</label>
                        <select class="form-control" id="year">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>
                    <div class="col-lg-2 col-xs-2" >
                        <label for="paixu">月份:&nbsp;</label>
                        <select class="form-control" id="month">
                            <option value="1">一月</option>
                            <option value="2">二月</option>
                            <option value="3">三月</option>
                            <option value="4">四月</option>
                            <option value="5">五月</option>
                            <option value="6">六月</option>
                            <option value="7">七月</option>
                            <option value="8">八月</option>
                            <option value="9">九月</option>
                            <option value="10">十月</option>
                            <option value="11">十一月</option>
                            <option value="12">十二月</option>
                        </select>
                    </div>
                    <div class="col-lg-1 col-xs-1" style="padding-top: 22px;">
                        <button class="btn btn-white btn-xs " id="daysubmit"> 按 月 查 询 </button>
                    </div>
                    
                    <div class="col-lg-1 col-xs-1" style="padding-top: 22px;">
                        <button class="btn btn-white btn-xs " id="selectallorder"> 查 询流水 </button>
                    </div>
                </div>
                <div class="data-div">
                    <div class="row tableHeader" id="orderheader">
                
                    </div>
                    <div class="tablebody" id="orderlist">

                    </div>

                </div>
                <!--页码块-->
                <footer class="footer">
                    <ul class="pagination">
                        <li class="gray" id="orderpagenum">
                            第-页
                        </li>
                        <li class="gray" id="orderpageallnum">
                           共-页
                        </li>
                        <li class="gray" >
                            <a style="color:rgb(154,164,175)" id="uppage">上一页</a>
                        </li>
                        <li class="gray" >
                            <a style="color:rgb(154,164,175)" id="downpage">下一页</a>
                        </li>
                    </ul>
                </footer>
            </div>
		            <!-- 修改个人信息模块 -->
		            <div role="tabpanel" class="tab-pane" id="modify_info">
                <div class="check-div">
                            <h1 style="display : inline">个人信息</h1>
                </div>
                <div style="padding: 50px 0;margin-top: 50px;background-color: #fff; text-align: right;width: 840px;margin: 50px auto;">
                    <form class="form-horizontal" id="modify_info_form">
                        <div class="form-group">
                            <label for="modify_info_user_key" class="col-xs-2 control-label">序号：</label>
                            <div class="col-xs-3">
                                <input type="" disabled class="form-control input-sm duiqi" name="user_key" id="modify_info_user_key"  placeholder="" style="margin-top: 7px; color: #50616d">
                            </div>
                             <label for="modify_info_user_code" class="col-xs-2 control-label">编码：</label>
                            <div class="col-xs-3">
                                <input type="" disabled class="form-control input-sm duiqi" name="user_code" id="modify_info_user_code" placeholder="" style="margin-top: 7px; color: #50616d">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="modify_info_user_name" class="col-xs-2 control-label">姓名：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_name" id="modify_info_user_name" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="modify_info_user_sex" class="col-xs-2 control-label">性别：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_sex" id="modify_info_user_sex" placeholder="" style="margin-top: 7px;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="modify_info_user_birthday" class="col-xs-2 control-label">生日：</label>
                            <div class="col-xs-3">
                                <input type="" class="form-control input-sm duiqi" name="user_birthday" id="modify_info_user_birthday" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="modify_info_user_id" class="col-xs-2 control-label">身份证号：</label>
                            <div class="col-xs-3">
                                <input type="" class="form-control input-sm duiqi" name="user_id" id="modify_info_user_id" placeholder="" style="margin-top: 7px;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="modify_info_user_native" class="col-xs-2 control-label">籍贯：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_native" id="modify_info_user_native" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="modify_info_user_address" class="col-xs-2 control-label">家庭住址：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_address" id="modify_info_user_address" placeholder="" style="margin-top: 7px;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="modify_info_user_tel" class="col-xs-2 control-label">手机：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_tel" id="modify_info_user_tel" placeholder="" style="margin-top: 7px;">
                            </div>
                            <label for="modify_info_user_other" class="col-xs-2 control-label">备注：</label>
                            <div class="col-xs-3">
                                <input type=""  class="form-control input-sm duiqi" name="user_other" id="modify_info_user_other" placeholder="" style="margin-top: 7px;">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="modify_info_user_create" class="col-xs-2 control-label">创建日期：</label>
                            <div class="col-xs-3">
                                <input type="" disabled class="form-control input-sm duiqi" name="user_create" id="modify_info_user_create" placeholder="" style="margin-top: 7px; color: #50616d">
                            </div>
                            <label for="modify_info_user_update" class="col-xs-2 control-label">更改日期：</label>
                            <div class="col-xs-3">
                                <input type="" disabled class="form-control input-sm duiqi" name="user_update" id="modify_info_user_update" placeholder="" style="margin-top: 7px; color: #50616d">
                            </div>
                        </div>
                        <div class="form-group text-right">
                            <div class="col-xs-offset-4 col-xs-5" >
                                <button type="button" onclick="modify_info_submit()" class="btn btn-xs btn-green">保存</button>
                            </div>
                        </div>
                        
                    </form>
                    
                </div>

            </div><!-- 修改个人信息结束 -->
		            <!-- 修改密码模块 -->
		            <div role="tabpanel" class="tab-pane" id="modify_pwd">
                <div class="check-div">
                            <h1 style="display : inline">修改密码</h1>
                </div>
                <div style="padding: 50px 0;margin-top: 50px;background-color: #fff; text-align: right;width: 420px;margin: 50px auto;">
                    <form class="form-horizontal" id="modify_pwd_form">
                        <div class="form-group">
                            <label for="sKnot" class="col-xs-3 control-label">原密码：</label>
                            <div class="col-xs-2">
                                <input type="" class="form-control input-sm duiqi" name="oldPwd" id="oldPwd"  placeholder="" style="margin-top: 7px;">
                            </div>
                            <div id="oldPwdDiv" class="col-xs-5 control-label" ></div>
                        </div>
                        <div class="form-group">
                            <label for="sKnot" class="col-xs-3 control-label">新密码：</label>
                            <div class="col-xs-2">
                                <input type="" class="form-control input-sm duiqi" name="newPwd1" id="newPwd1" placeholder="" style="margin-top: 7px;">
                            </div>
                            <div id="newPwd1Div" class="col-xs-5 control-label" ></div>
                        </div>
                        <div class="form-group">
                            <label for="sKnot" class="col-xs-3 control-label">重复密码：</label>
                            <div class="col-xs-2">
                                <input type="" class="form-control input-sm duiqi" name="newPwd2" id="newPwd2" placeholder="" style="margin-top: 7px;">
                            </div>
                            <div id="newPwd2Div" class="col-xs-5 control-label"></div>
                        </div>
                        <div class="form-group text-right">
                            <div class="col-xs-offset-3 col-xs-4" >
                                <button type="reset" class="btn btn-xs btn-white">取 消</button>
                                <button type="button" onclick="modify_pwd_gogo()" class="btn btn-xs btn-green">保存</button>
                            </div>
                        </div>
                        
                    </form>
                    
                </div>

            </div><!-- 修改密码结束 -->
            
           
        </div>
    </div>
</div>

<script src="js/login.js"></script>
<script src="js/out_in.js"> </script>
<script src="js/left_menu.js"> </script>
<script src="js/modify_power.js"> </script>
<script src="js/report.js"> </script>
<script src="js/modify_pwd.js"> </script>
<script src="js/modify_info.js"> </script>
<script src="js/user.js"> </script>
<script src="js/object.js"> </script>
</body>

</html>