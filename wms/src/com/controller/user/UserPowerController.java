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
import com.service.user.UserPowerService;
import com.service.user.UserService;
/**
 * @author fyk
 */
@Controller
public class UserPowerController extends UserBaseController{
	@Autowired
	private UserPowerService userPowerService;
	/*根据分页获取用户列表*/
	@RequestMapping("user/selectUsers")
	@ResponseBody
	public Map<String, Object> selectUsers(@RequestBody Map<String, Object> map,HttpSession session) {
		Integer pageCur=(Integer)map.get("pageCur");
		return userPowerService.selectUsers(pageCur, session);
	}
	/*更改权限*/
	@RequestMapping("user/modify_power")
	@ResponseBody
	public Map<String, Object> modify_power(@RequestBody Map<String, Object> map) {
		return userPowerService.modify_power(map);
	}
	

}
