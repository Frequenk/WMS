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
public interface UserService {
	/*登录*/
	public String login(User user, Model model, HttpSession session);

}
