package com.service.user;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.po.Ob;
import com.po.User;
/**
 * @author fyk
 */
public interface UserPowerService {
	/*根据分页获取用户列表*/
	public Map<String, Object> selectUsers(Integer pageCur,HttpSession session);
	/*修改用户权限*/
	public Map<String, Object> modify_power(Map<String, Object> map);
}
