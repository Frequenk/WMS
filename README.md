# WMS
仓库管理系统

前后端分离，前端用Boostrap+JQuery，后端用SSM，数据库用MySQL
桌面应用程序用Electron


详细设计

自动升级功能
两种方案：（待选择）
（1）提示用户手动下载新版本替换旧版本
（2）请求用户授权，程序自动替换新版本

客户端要求：
（1）要求WEB服务器加桌面程序的方式实现
（2）通信使用RAS加密

物料进出仓模块
1.进出仓表：
进出仓单号、进出仓日期、操作人员代码、备注、物料代码、进仓数量、出仓数量

2.进出仓程序可以和多物料进出仓程序合并：
（1）前端选操作人员和物料代码用下拉框选择。
（2）单号要自己编规则。(日期加随机数)
（3）前端选日期用日期控件(日期有仓管选的日期和订单提交日期两种日期，数据库用时间戳表示)
（4）出仓时需要对库存进行判断，提示
（5）进出仓操作需要添加事务回滚
（6）进出仓操作不能同时存在于一个单号中（添加进出仓标识，判断该单号属于哪种）

用户登录与权限设计
（1）每个菜单项都做一个权限标识，管理员以此控制操作人员权限
（2）用户登录程序，用户登录后，根据权限显示相应菜单
（3）用户授权程序*，有授权权限的用户可以给其他没有授权权限的用户授权

统计程序与报表打印
（1）按物料统计进出仓流量（遍历进出仓表）
（2）计算流动量最小的物料
（3）按月份打印进出单表，打印进出仓单，按物料打印仓库账本（进出仓的历史记录，遍历进出仓表）
（4）统计进出仓数量，用图形表示
（5）按月份打印进出仓单表
（6）打印仓库账本程序，给定年份和物料，打印物料代码、名称、规格、计量单位、各日期的进仓、出仓和库存量

人员档案的管理、物料档案管理

1.人员档案输入
（1）人员代码、姓名、性别、出生日期、身份证号、籍贯、家庭住址、联系电话、其它情况。
（2）程序主页
（3）人员档案表的中英文信息)”来命名。其中人员代码不能为空，性别必须用“男”、“女” 选择方式，出生日期必须用日期控件来控制。修改、删除程序在执行修改删除操作前，都必须进行记录定位操作,所以必须有相应的查询程序，可以借用查询程序来完成记录定位。人员档案的增加、修改、删除程序也可以用三个程序名，分别编程。身份证号码最后一位可以为数字或X，必须使用正则表达式进行验证。
（4）人员档案查询，可以模糊查询

2.物料档案输入
（1）物料代码、物料名称、规格型号、计量单位、库存数量、备注等字段。
（2）物料档案的增加、修改、删除程序
物料表，客户端输入时要求物料代码不为空，计量单位可以选择“件、套、公斤、吨、升、米、毫米、个”等，计量单位并可以输入其它单位名，库存数量默认为0。
