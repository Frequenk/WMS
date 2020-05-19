package com.controller.user;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.po.Ob;
import com.service.user.UserOrderService;
/**
 * @author hjh
 */
@Controller
public class UserOrderController extends UserBaseController {
	@Autowired
	private UserOrderService userOrderService;
	
	/**
	 * 获取物品列表
	 */
	@RequestMapping("/user/objectlist")
	@ResponseBody
	public List<Ob> objectlist() {
		return userOrderService.getobjectlist();
	}
	
	/**
	 * 获取物品类型
	 */
	@RequestMapping("/user/model")
	@ResponseBody
	public List<Ob> modellist(@RequestBody String objectname) {
		System.out.println(objectname);
		return userOrderService.getobjectlistbyobject(objectname);
	}
	
	/**
	 *提交订单
	 */
	@RequestMapping(value="/user/jinchucang",produces="application/json;charset=UTF-8")
	@ResponseBody
	public String jinchucang(String[] objectlist,String xuanzejinchucang, HttpSession session) {
		return userOrderService.jinchucang(objectlist, xuanzejinchucang,session);
	}

}
