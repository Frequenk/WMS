package com.dao.user;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.po.Ob;
import com.po.Order;
import com.po.Order2;
import com.po.User;
/**
 * @author hjh
 */
@Repository("userReportDao")
@Mapper
public interface UserReportDao {
	public List<Order2> selectorderlist(Map<String, Object> map);
	public List<Order2> selectallorderlist(int begin);
	public Integer selectallorderlistnum();
	public Integer selectorderlistnum(Map<String, Object> map);

}
