package com.dao.user;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.po.Ob;
import com.po.Order;
import com.po.User;
/**
 * @author hjh
 */
@Repository("userOrderDao")
@Mapper
public interface UserOrderDao {
	/*获取物品列表*/
	public List<Ob> getobjectlist();
	public List<Ob> getobjectlistbyobject(String objectname);
	public int tianjiaobnumbyobnmandobmd(Ob ob);
	public int jianshaoobnumbyobnmandobmd(Ob ob);
	public int insertorder(Order order);
	public Ob selectobbyob(Ob ob);

}
