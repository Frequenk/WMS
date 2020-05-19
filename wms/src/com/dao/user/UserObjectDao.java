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
@Repository("userObjectDao")
@Mapper
public interface UserObjectDao {
	public List<Ob> selectallobjectlist(int begin);
	public int selectobjectmaxpage();
	public List<Ob> selectallobjectlistbyname(Map<String, Object> map);
	public int selectobjectbynamemaxpage(String obname);
	public int insertobject(Ob ob);
	public int updateobject(Map<String, Object> map);
	public int deleteobject(Ob ob);


}
