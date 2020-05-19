package com.dao.user;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.po.Ob;
import com.po.Order;
import com.po.User;
/**
 * @author fyk
 */
@Repository("userInfoDao")
@Mapper
public interface UserInfoDao {
	/*验证user旧密码是否正确*/
	public User yanzhengpwd(User user);
	/*修改密码*/
	public int modify_pwd(User user);
	/*修改个人信息*/
	public int modify_info(User user);
	/*获取当前登录账号*/
	public User getAccount(User user);
	/*添加用户*/
	public int add_user(User user);
	/*根据名字查询用户*/
	public List<User> search_user(User user);
}
