package com.validator;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;




/*
 * @Component public class GoodsValidator implements Validator{
 * 
 * @Autowired private ReserveDao reserveeDao;
 * 
 * @Override public boolean supports(Class<?> klass) { //
 * Ҫ��֤��Model������ֵΪfalse����֤�� return Reserve.class.isAssignableFrom(klass);
 * }
 * 
 * @Override public void validate(Object object, Errors errors) {
 * 
 * int r_c_id=(int)object; if(r_c_id==4) errors.rejectValue("r_c_id", "inn");
 * 
 * Reserve r1=(Reserve)object; List<Reserve> r2= reserveeDao.yanzheng(r1);
 * System.out.println(r2.size()); if(r2.size()!=0) errors.rejectValue("r_c_id",
 * "inn");
 * 
 * Reserve goods = (Reserve)object;//objectҪ��֤�Ķ���
 * //goods.gname.required�Ǵ�����Ϣ�����ļ��еı���
 * ValidationUtils.rejectIfEmpty(errors, "gname", "goods.gname.required");
 * ValidationUtils.rejectIfEmpty(errors, "gdescription",
 * "goods.gdescription.required"); if(goods.getGprice() > 100 ||
 * goods.getGprice() < 0){ errors.rejectValue("gprice", "gprice.invalid"); }
 * Date goodsDate = goods.getGdate(); //��ϵͳʱ��֮�� if(goodsDate != null &&
 * goodsDate.after(new Date())){ errors.rejectValue("gdate", "gdate.invalid"); }
 * } }
 */
