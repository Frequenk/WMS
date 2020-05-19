package com.service.user;

import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;

import com.dao.user.UserDao;
import com.po.Ob;
import com.po.Order;
import com.po.User;
import com.utils.DateUtils;
/**
 * @author fyk
 */
@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	/*登录*/
	@Override
	public String login( User user, Model model, HttpSession session) {
		User a;
		a=userDao.login(user);
		
		if( a!= null ) {
			System.out.println("用户"+a.getUser_name()+"登录成功");
			a.setUser_pwd("");
			session.setAttribute("User", a);
			return "user/main";
		}
		model.addAttribute("msg", "账号或密码错误");
		return "user/login";
	}
	

	
	
	
}
