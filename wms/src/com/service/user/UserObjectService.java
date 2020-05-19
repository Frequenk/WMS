package com.service.user;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.po.Ob;
import com.po.User;
/**
 * @author hjh
 **/
public interface UserObjectService {
	public List<Ob> selectallobjectlist(String objectpage);
	public int selectobjectmaxpage();
	public List<Ob> selectallobjectlistbyname(String objectpage, String obname);
	public int selectobjectbynamemaxpage(String obname);
	public int insertobject(String ocode, String oname, String omodel, String ounit, int ostock, String oother);
	public int updateobject(String upocode, String uponame, String upomodel, int upostock,String upcode, String upname, String upmodel, int upstock);
	public int deleteobject(String upcode, String upname, String upmodel, int upstock);


}
