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
import com.dao.user.UserInfoDao;
import com.po.Ob;
import com.po.Order;
import com.po.User;
import com.utils.DateUtils;
/**
 * @author fyk
 */
@Service("userInfoService")
@Transactional
public class UserInfoServiceImpl implements UserInfoService {
	@Autowired
	private UserInfoDao userInfoDao;
	/*验证user旧密码是否正确*/
	public User yanzhengpwd(User user, HttpSession session) {
		User u=(User)session.getAttribute("User");
		user.setUser_key(u.getUser_key());
		return userInfoDao.yanzhengpwd(user);
	}
	
	/*修改密码*/
	public Map<String, Object> modify_pwd(User user, HttpSession session) {
		User u=(User)session.getAttribute("User");
		user.setUser_key(u.getUser_key());
		int result=userInfoDao.modify_pwd(user);
		
		Map<String, Object> data=new HashMap<String, Object>();
		if(result>0) {
			data.put("result", "sucess");
			return data;
		}
		data.put("result", "error");
		return data;
	
	
	}
	/*修改个人信息*/
	public Map<String, Object> modify_info(User user, HttpSession session) {
		/*
		 * User u=(User)session.getAttribute("User"); user.setUser_key(u.getUser_key());
		 */
		user.setUser_update(DateUtils.getFormatDate(new Date()));
		System.out.println("这里是modify_info  serviceIml，user："+user.toString());
		int result=userInfoDao.modify_info(user);
		
		Map<String, Object> data=new HashMap<String, Object>();
		if(result>0) {
			data.put("result", "sucess");
			return data;
		}
		data.put("result", "error");
		return data;		
	}
	/*获取当前登录账号*/
	@Override
	public User getAccount(HttpSession session) {
		User user=(User)session.getAttribute("User");
		User a;
		a=userInfoDao.getAccount(user);
		if( a!= null ) {
			a.setUser_pwd("");
			session.setAttribute("User", a);
		}
		return a;
	}
	/*添加用户*/
	public Map<String, Object>  add_user(User user){
		String nowDate=DateUtils.getFormatDate(new Date());
		user.setUser_create(nowDate);
		user.setUser_update(nowDate);
		int result=userInfoDao.add_user(user);
		Map<String, Object> data=new HashMap<String, Object>();
		if(result>0) {
			data.put("result", "sucess");
			return data;
		}
		data.put("result", "error");
		return data;
	}
	/*根据名字搜索用户*/
	public Map<String, Object> search_user(User user,HttpSession session){		
		List<User> allUsers;
		Map<String, Object> map = new HashMap<String, Object>();
		User u=(User)session.getAttribute("User");
		user.setUser_key(u.getUser_key()); 
		if(user.getUser_name()==""||user.getUser_name()==null) {
			map.put("allUsers",null);
			return map;
		}
		allUsers=userInfoDao.search_user(user);
		for(int i=0;i<allUsers.size();i++) {
			allUsers.get(i).setUser_pwd("");
		}
		map.put("allUsers",allUsers);
		return map;
	}
}
