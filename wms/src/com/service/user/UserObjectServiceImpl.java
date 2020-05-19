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

import com.dao.user.UserObjectDao;
import com.dao.user.UserOrderDao;
import com.po.Ob;
import com.po.Order;
import com.po.User;
import com.utils.DateUtils;
/**
 * @author hjh
 */
@Service("userObjectService")
@Transactional
public class UserObjectServiceImpl implements UserObjectService {
	@Autowired
	private UserObjectDao userObjectDao;	
	/*
	 * 查询orderlist页数
	 */
	@Override
	public List<Ob> selectallobjectlist(String objectpage){
		int begin = (Integer.parseInt(objectpage)-1)*7;
		return userObjectDao.selectallobjectlist(begin);
	}
	/*
	 * 查询orderlist页数
	 */
	@Override
	public int selectobjectmaxpage(){
		int num = userObjectDao.selectobjectmaxpage();
		int pagenum = num / 7;
		if (num % 7 > 0) {
			pagenum=pagenum+1;
		}
		return pagenum;
	}
	
	/*
	 * 按条件查询
	 */
	@Override
	public List<Ob> selectallobjectlistbyname(String objectpage, String obname){
		int begin = (Integer.parseInt(objectpage)-1)*7;
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("begin", begin);
		map.put("obname", obname);
		return userObjectDao.selectallobjectlistbyname(map);
	}
	
	/*
	 * 查询按条件查询的总页数
	 */
	@Override
	public int selectobjectbynamemaxpage(String obname) {
		int num = userObjectDao.selectobjectbynamemaxpage(obname);
		int pagenum = num / 7;
		if (num % 7 > 0) {
			pagenum=pagenum+1;
		}
		return pagenum;
	}
	
	/*
	 * 添加物料
	 */
	@Override
	public int insertobject(String ocode, String oname, String omodel, String ounit, int ostock, String oother){
		Ob ob = new Ob();
		Date date = new Date();
		ob.setObject_code(ocode);
		ob.setObject_name(oname);
		ob.setObject_model(omodel);
		ob.setObject_unit(ounit);
		ob.setObject_stock(ostock);
		ob.setObject_other(oother);
		ob.setObject_create(DateUtils.getFormatDate(date));
		ob.setObject_update(DateUtils.getFormatDate(date));
		return userObjectDao.insertobject(ob);
	}
	
	/*
	 * 修改物料
	 */
	@Override
	public int updateobject(String upocode, String uponame, String upomodel, int upostock,String upcode, String upname, String upmodel, int upstock){
		Ob ob1 = new Ob();
		Ob ob2 = new Ob();
		Date date = new Date();
		HashMap<String,Object> map = new HashMap<String, Object>();
		ob1.setObject_code(upocode);
		ob1.setObject_name(uponame);
		ob1.setObject_model(upomodel);
		ob1.setObject_stock(upostock);
		ob1.setObject_update(DateUtils.getFormatDate(date));
		ob2.setObject_code(upcode);
		ob2.setObject_name(upname);
		ob2.setObject_model(upmodel);
		ob2.setObject_stock(upstock);
		System.out.println(ob1);
		System.out.println(ob2);
		map.put("ob1", ob1);
		map.put("ob2", ob2);
		return userObjectDao.updateobject(map);
	}
	/*
	 * 修改物料
	 */
	@Override
	public int deleteobject(String upcode, String upname, String upmodel, int upstock){
		Ob ob = new Ob();
		ob.setObject_code(upcode);
		ob.setObject_name(upname);
		ob.setObject_model(upmodel);
		ob.setObject_stock(upstock);
		return userObjectDao.deleteobject(ob);
	}


	
	
}
