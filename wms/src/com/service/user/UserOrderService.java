package com.service.user;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.po.Ob;
import com.po.User;
/**
 * @author hjh
 **/
public interface UserOrderService {
	/* 获取物品列表*/
	public List<Ob> getobjectlist();	
	/*获取物品类型*/
	public List<Ob> getobjectlistbyobject(String objectname);	
	/*提交订单*/
	public String jinchucang(String[] objectlist,String xuanzejinchucang, HttpSession session);

}
