package com.service.user;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.po.Ob;
import com.po.User;
/**
 * @author fyk
 */
public interface UserInfoService {
	/*验证user旧密码是否正确*/
	public User yanzhengpwd(User user, HttpSession session);
	/*修改密码*/
	public Map<String, Object> modify_pwd(User user, HttpSession session);
	/*修改个人信息*/
	public Map<String, Object> modify_info(User user, HttpSession session);
	/*获取当前登录账号*/
	public User getAccount(HttpSession session);
	/*添加用户*/
	public Map<String, Object>  add_user(User user);
	/*根据名字搜索用户*/
	public Map<String, Object> search_user(User user,HttpSession session);
}
