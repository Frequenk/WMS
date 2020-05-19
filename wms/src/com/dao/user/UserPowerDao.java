package com.dao.user;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.po.Ob;
import com.po.Order;
import com.po.User;
/**
 * @author fyk
 */
@Repository("userPowerDao")
@Mapper
public interface UserPowerDao {
	/*获取用户总数量*/
	public int selectCountUser(User user);
	/*根据分页返回用户信息列表*/
	public List<User> selectAllUserByPage(Map<String, Object> map);
	/*修改用户权限*/
	public int modify_power(User user);
}
