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
import com.service.user.UserService;
/**
 * @author fyk
 */
@Controller
public class UserController {
	@Autowired
	private UserService userService;
	/*前往登录页面*/
	@RequestMapping("/user")
	public String toLogin(@ModelAttribute User user) {
		return "user/login";		
	}
	/*登录*/
	@RequestMapping("/user/login")
	public String login(@ModelAttribute User user, Model model, HttpSession session) {
		return userService.login(user, model, session);
	}
	/*注销*/
	@RequestMapping("/user/exit")
	public String exit(@ModelAttribute User user,HttpSession session) {
		session.invalidate();
		return "user/login";
	}

	

}
