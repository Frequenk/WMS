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
import com.service.user.UserObjectService;
import com.service.user.UserOrderService;
/**
 * @author hjh
 */
@Controller
public class UserObjectController extends UserBaseController {
	@Autowired
	private UserObjectService userObjectService;
	
	/*
	 * 根据页面显示所有物料
	 */
	@RequestMapping(value="/user/selectallobjectlist",produces="application/json;charset=UTF-8")
	@ResponseBody
	public List<Ob> selectallobjectlist(String objectpage) {
		List<Ob> allobjectlist=userObjectService.selectallobjectlist(objectpage);
		System.out.println(allobjectlist);
		return allobjectlist;
	}
	/*
	 * 查询object总页数
	 */
	@RequestMapping(value="/user/selectobjectmaxpage",produces="application/json;charset=UTF-8")
	@ResponseBody
	public int selectobjectmaxpage() {
		return userObjectService.selectobjectmaxpage();
	}
	/*
	 * 按条件查询
	 */
	@RequestMapping(value="/user/selectallobjectlistbyname",produces="application/json;charset=UTF-8")
	@ResponseBody
	public List<Ob> selectallobjectlistbyname(String objectpage,String obname) {
		List<Ob> allobjectlist=userObjectService.selectallobjectlistbyname(objectpage,obname);
		System.out.println(allobjectlist);
		return allobjectlist;
	}
	
	/*
	 * 查询按条件查询的总页数
	 */
	@RequestMapping(value="/user/selectobjectbynamemaxpage",produces="application/json;charset=UTF-8")
	@ResponseBody
	public int selectobjectbynamemaxpage(String obname) {
		return userObjectService.selectobjectbynamemaxpage(obname);
	}
	
	/*
	 * 添加物料
	 */
	@RequestMapping(value="/user/insertobject",produces="application/json;charset=UTF-8")
	@ResponseBody
	public int insertobject(String ocode,String oname,String omodel,String ounit,int ostock,String oother) {
		return userObjectService.insertobject(ocode,oname,omodel,ounit,ostock,oother);
	}
	
	/*
	 * 修改物料
	 */
	@RequestMapping(value="/user/updateobject",produces="application/json;charset=UTF-8")
	@ResponseBody
	public int updateobject(String upocode,String uponame,String upomodel,int upostock,String upcode,String upname,String upmodel,int upstock) {
		return userObjectService.updateobject(upocode,uponame,upomodel,upostock,upcode,upname,upmodel,upstock);
	}
	
	/*
	 * 删除物料
	 */
	@RequestMapping(value="/user/deleteobject",produces="application/json;charset=UTF-8")
	@ResponseBody
	public int deleteobject(String upcode,String upname,String upmodel,int upstock) {
		return userObjectService.deleteobject(upcode,upname,upmodel,upstock);
	}


}
