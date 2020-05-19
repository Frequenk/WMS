package com.controller.user;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.po.Admin;
import com.po.Ob;
import com.po.User;
import com.service.user.UserInfoService;
import com.service.user.UserService;
/**
 * @author fyk
 */
@Controller
public class UserInfoController {
	@Autowired
	private UserInfoService userInfoService;
	/*验证user旧密码是否正确*/
	@RequestMapping("/user/yanzhengpwd")
	@ResponseBody
	public User yanzhengpwd(@RequestBody User user,HttpSession session) {
		return userInfoService.yanzhengpwd(user,session);
	}
	/*更改密码*/
	@RequestMapping("/user/modify_pwd")
	@ResponseBody
	public Map<String, Object> modify_pwd(@RequestBody User user,HttpSession session) {
		return userInfoService.modify_pwd(user, session);
	}
	/*更改个人信息*/
	@RequestMapping("/user/modify_info")
	@ResponseBody
	public Map<String, Object> modify_info(@RequestBody User user,HttpSession session) {
		return userInfoService.modify_info(user, session);
	}
	
	/*获取当前登录用户*/
	@RequestMapping("user/getAccount")
	@ResponseBody
	public User getAccount(HttpSession session) {
		return userInfoService.getAccount(session);
	}
	/*添加用户*/
	@RequestMapping("/user/add_user")
	@ResponseBody
	public Map<String, Object> add_user(@RequestBody User user,HttpSession session) {
		System.out.println(user.toString());
		return userInfoService.add_user(user);
	}
	/*根据名字搜索用户*/
	@RequestMapping("/user/search_user")
	@ResponseBody
	public Map<String, Object> search_user(@RequestBody User user,HttpSession session) {
		System.out.println(user.toString());
		return userInfoService.search_user(user,session);
	}
}
