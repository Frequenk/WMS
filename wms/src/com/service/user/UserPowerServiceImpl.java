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
import com.dao.user.UserPowerDao;
import com.po.Ob;
import com.po.Order;
import com.po.User;
import com.utils.DateUtils;
/**
 * @author fyk
 */
@Service("userPowerService")
@Transactional
public class UserPowerServiceImpl implements UserPowerService {
	@Autowired
	private UserPowerDao userPowerDao;
	
	/*根据分页获取用户列表*/
	@Override
	public Map<String, Object> selectUsers(Integer pageCur,HttpSession session) {
		System.out.println("pageCur1:"+pageCur);
		List<User> allUsers;
		User user=(User)session.getAttribute("User");
		int temp=userPowerDao.selectCountUser(user);
		//session.setAttribute("totalCount", temp);
		int totalPage = 0;
		if (temp == 0) {
			totalPage = 0;//总页数
		} else {
			//返回大于或者等于指定表达式的最小整数
			totalPage = (int) Math.ceil((double) temp / 6);
		}
		if (pageCur == null) {
			pageCur = 1;
		}
		if ((pageCur - 1) * 6 > temp) {
			pageCur = pageCur - 1;
		}
		System.out.println("pageCur2:"+pageCur);
		//分页查询
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("startIndex", (pageCur - 1) * 6);//起始位置
		map.put("perPageSize", 6);//每页10个
		map.put("user_key", user.getUser_key());
		allUsers = userPowerDao.selectAllUserByPage(map);
		for(int i=0;i<allUsers.size();i++) {
			allUsers.get(i).setUser_pwd("");
		}
		map.clear();
		map.put("allUsers",allUsers);
		map.put("totalPage", totalPage);
		map.put("pageCur", pageCur);
		map.put("totalCount", temp);
		/*
		 * session.setAttribute("allUsers", allUsers); session.setAttribute("totalPage",
		 * totalPage); session.setAttribute("pageCur", pageCur);
		 */
		return map;

	}	
	/*修改用户权限*/
	@Override
	public Map<String, Object> modify_power(Map<String, Object> map) {
		User user=new User();
		if(map.get("user_object")!=null) {
			user.setUser_object(Byte.parseByte((String)map.get("user_object")));
		}
		else
			user.setUser_object((byte)0);
		
		if(map.get("user_user")!=null) {
			user.setUser_user(Byte.parseByte((String)map.get("user_user")));
		}
		else
			user.setUser_user((byte)0);
		
		if(map.get("user_order")!=null) {
			user.setUser_order(Byte.parseByte((String)map.get("user_order")));
		}
		else
			user.setUser_order((byte)0);
		
		if(map.get("user_log")!=null) {
			user.setUser_log(Byte.parseByte((String)map.get("user_log")));
		}
		else
			user.setUser_log((byte)0);
		
		if(map.get("user_report")!=null) {
			user.setUser_report(Byte.parseByte((String)map.get("user_report")));
		}
		else
			user.setUser_report((byte)0);
		
		user.setUser_key(Integer.parseInt((String)map.get("user_key")));
		int result=userPowerDao.modify_power(user);
		Map<String, Object> data=new HashMap<String, Object>();
		if(result>0) {
			data.put("result", "sucess");
			return data;
		}
		data.put("result", "error");
		return data;
			
	}
	
}
