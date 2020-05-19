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
@Repository("userDao")
@Mapper
public interface UserDao {
	/*登录*/
	public User login(User user);
}
