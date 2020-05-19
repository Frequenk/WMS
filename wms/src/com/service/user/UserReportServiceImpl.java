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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.user.UserOrderDao;
import com.dao.user.UserReportDao;
import com.po.Ob;
import com.po.Order;
import com.po.Order2;
import com.po.User;
import com.utils.DateUtils;
/**
 * @author hjh
 */
@Service("userReportService")
@Transactional
public class UserReportServiceImpl implements UserReportService {
	@Autowired
	private UserReportDao userReportDao;	
	
	/*
	 * 查询orderlist
	 */
	@Override
	public List<Order2> selectorderlist(String year,String month, String nowpage){
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("year", year);
		map.put("month", month);
		map.put("begin", (Integer.parseInt(nowpage)-1)*6);
		return userReportDao.selectorderlist(map);
	}
	/*
	 * 查询allorderlist
	 */
	@Override
	public List<Order2> selectallorderlist(String nowpage){
		int begin = (Integer.parseInt(nowpage)-1)*6;
		return userReportDao.selectallorderlist(begin);
	}
	/*
	 * 查询allorderlist页数
	 */
	@Override
	public int selectallorderlistpagenum(){
		int num = userReportDao.selectallorderlistnum();
		int pagenum = num / 6;
		if (num % 6 > 0) {
			pagenum=pagenum+1;
		}
		return pagenum;
	}
	/*
	 * 查询orderlist页数
	 */
	@Override
	public int selectorderlistpagenum(String year,String month){
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("year", year);
		map.put("month", month);
		int num = userReportDao.selectorderlistnum(map);
		int pagenum = num / 6;
		System.out.println(num);
		System.out.println(num % 6);
		if (num % 6 > 0) {
			pagenum=pagenum+1;
		}
		System.out.println(pagenum);
		return pagenum;
	}



	
	
}
