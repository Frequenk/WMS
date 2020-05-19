package	com.po;
public class Log {
	private int log_key;
	private int user_key;
	private String log_ip;
	private String log_detail;
	private String log_date;
	public void setLog_key(int log_key){
		this.log_key = log_key;
	}
	public int getLog_key(){
		return log_key;
	}
	public void setUser_key(int user_key){
		this.user_key = user_key;
	}
	public int getUser_key(){
		return user_key;
	}
	public void setLog_ip(String log_ip){
		this.log_ip = log_ip;
	}
	public String getLog_ip(){
		return log_ip;
	}
	public void setLog_detail(String log_detail){
		this.log_detail = log_detail;
	}
	public String getLog_detail(){
		return log_detail;
	}
	public void setLog_date(String log_date){
		this.log_date = log_date;
	}
	public String getLog_date(){
		return log_date;
	}
}
