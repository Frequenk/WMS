package com.service.user;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.po.Ob;
import com.po.Order2;
import com.po.User;
/**
 * @author hjh
 **/
public interface UserReportService {
	public List<Order2> selectorderlist(String year,String month, String nowpage);
	public List<Order2> selectallorderlist(String nowpage);
	public int selectallorderlistpagenum();
	public int selectorderlistpagenum(String year,String month);


}
