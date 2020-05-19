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
import com.po.Order2;
import com.po.User;
import com.service.user.UserReportService;
import com.service.user.UserService;
/**
 * @author hjh
 */
@Controller
public class UserReportController extends UserBaseController{
	@Autowired
	private UserReportService userReportService;
	/*
	 * 显示orderlist
	 */
	@RequestMapping(value="/user/selectorderlist",produces="application/json;charset=UTF-8")
	@ResponseBody
	public List<Order2> selectorderlist(String year,String month,String nowpage) {
		List<Order2> order2list=userReportService.selectorderlist(year, month, nowpage);
		return order2list;
	}
	/*
	 * 显示所有order
	 */
	@RequestMapping(value="/user/selectallorderlist",produces="application/json;charset=UTF-8")
	@ResponseBody
	public List<Order2> selectallorderlist(String nowpage) {
		List<Order2> allorder2list=userReportService.selectallorderlist(nowpage);
		return allorder2list;
	}
	/*
	 * 得到所有查询结果的页数
	 */
	@RequestMapping(value="/user/selectallorderlistpagenum",produces="application/json;charset=UTF-8")
	@ResponseBody
	public int selectallorderlistpagenum() {
		int pagenum = userReportService.selectallorderlistpagenum();
		return pagenum;
	}
	/*
	 * 得到按月查询结果的页数
	 */
	@RequestMapping(value="/user/selectorderlistpagenum",produces="application/json;charset=UTF-8")
	@ResponseBody
	public int selectorderlistpagenum(String year,String month) {
		int pagenum = userReportService.selectorderlistpagenum(year, month);
		return pagenum;
	}

	

}
