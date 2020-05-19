package	com.po;
public class Order {
	private int order_key;
	private String order_num;
	private int user_key;
	private int object_key;
	private byte order_type;
	private int order_amount;
	private String order_other;
	private String order_date;
	public void setOrder_key(int order_key){
		this.order_key = order_key;
	}
	public int getOrder_key(){
		return order_key;
	}
	public void setOrder_num(String order_num){
		this.order_num = order_num;
	}
	public String getOrder_num(){
		return order_num;
	}
	public void setUser_key(int user_key){
		this.user_key = user_key;
	}
	public int getUser_key(){
		return user_key;
	}
	public void setObject_key(int object_key){
		this.object_key = object_key;
	}
	public int getObject_key(){
		return object_key;
	}
	public void setOrder_type(byte order_type){
		this.order_type = order_type;
	}
	public byte getOrder_type(){
		return order_type;
	}
	public void setOrder_amount(int order_amount){
		this.order_amount = order_amount;
	}
	public int getOrder_amount(){
		return order_amount;
	}
	public void setOrder_other(String order_other){
		this.order_other = order_other;
	}
	public String getOrder_other(){
		return order_other;
	}
	public void setOrder_date(String order_date){
		this.order_date = order_date;
	}
	public String getOrder_date(){
		return order_date;
	}
}
