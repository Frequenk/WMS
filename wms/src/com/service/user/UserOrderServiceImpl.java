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

import com.dao.user.UserOrderDao;
import com.po.Ob;
import com.po.Order;
import com.po.User;
import com.utils.DateUtils;
/**
 * @author hjh
 */
@Service("userOrderService")
@Transactional
public class UserOrderServiceImpl implements UserOrderService {
	@Autowired
	private UserOrderDao userOrderDao;	
	
	/**
	 * 获取物品列表
	 */
	@Override
	public List<Ob> getobjectlist() {
		List<Ob> ol = new LinkedList<Ob>();
		Ob ob=new Ob();
		ob.setObject_name("请选择");
		ol.add(ob);
		ol.addAll(userOrderDao.getobjectlist());
		System.out.println("objectlist:"+ol);
		return ol;
	}
	
	/**
	 * 获取物品类型
	 */
	@Override
	public List<Ob> getobjectlistbyobject(String objectname) {
		List<Ob> ol = new LinkedList<Ob>();
		ol=userOrderDao.getobjectlistbyobject(objectname);
		System.out.println("objectlist:"+ol);
		return ol;
	}
	
	/**
	 *提交订单
	 */
	@SuppressWarnings("finally")
	@Override
	public String jinchucang(String[] objectlist,String xuanzejinchucang, HttpSession session) {
		int i;
		Date date = new Date();
		User user = (User) session.getAttribute("User");
		Lock lock = new ReentrantLock();
		int len = objectlist.length; 
		int result1;
		int result2;
		String mag = null ;
		lock.lock();
		try {
			if ( xuanzejinchucang.equals("进仓")) {
				for ( i = 0 ; i < len/3; i++) {
					Ob ob1 = new Ob();
					Ob ob2 = new Ob();
					Order order = new Order();
					String objectname = objectlist[i*3];
					String objectmodel = objectlist[i*3+1];
					int objectnum = Integer.parseInt(objectlist[i*3+2]);
					ob1.setObject_name(objectname);
					ob1.setObject_model(objectmodel);
					ob1.setObject_stock(objectnum);
					ob2 = userOrderDao.selectobbyob(ob1);
					result1 = userOrderDao.tianjiaobnumbyobnmandobmd(ob1);
					System.out.println(ob2);
					order.setObject_key(ob2.getObject_key());
					order.setOrder_num(DateUtils.getordernumbydate(date));
					order.setUser_key(user.getUser_key());
					order.setOrder_type((byte)1);
					order.setOrder_amount(objectnum);
					order.setOrder_date(DateUtils.getFormatDate(date));
					result2 = userOrderDao.insertorder(order);
				}
				mag="入库成功";
				
			} else {
				for ( i = 0 ; i < len/3; i++) {
					Ob ob1 = new Ob();
					Ob ob2 = new Ob();
					Order order = new Order();
					String objectname = objectlist[i*3];
					String objectmodel = objectlist[i*3+1];
					int objectnum = Integer.parseInt(objectlist[i*3+2]);
					ob1.setObject_name(objectname);
					ob1.setObject_model(objectmodel);
					ob1.setObject_stock(objectnum);
					ob2 = userOrderDao.selectobbyob(ob1);
					if(objectnum>ob2.getObject_stock())
					{
						mag=objectname+"库余不足数";
						break;
					}
					result1 = userOrderDao.jianshaoobnumbyobnmandobmd(ob1);
					System.out.println(ob2);
					order.setObject_key(ob2.getObject_key());
					order.setOrder_num(DateUtils.getordernumbydate(date));
					order.setUser_key(user.getUser_key());
					order.setOrder_type((byte)0);
					order.setOrder_amount(objectnum);
					order.setOrder_date(DateUtils.getFormatDate(date));
					result2 = userOrderDao.insertorder(order);
					mag="出库成功";

				}
				
					
				
		    	
			}
			
		}catch (Exception e) {
	        
	    }finally {

	        lock.unlock();
	        System.out.println(mag);
	        return mag+"";
	    }
	}

	
	
}
