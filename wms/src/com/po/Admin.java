package	com.po;
public class Admin {
	private int admin_key;
	private String admin_account;
	private String admin_pwd;
	public void setAdmin_key(int admin_key){
		this.admin_key = admin_key;
	}
	public int getAdmin_key(){
		return admin_key;
	}
	public void setAdmin_account(String admin_account){
		this.admin_account = admin_account;
	}
	public String getAdmin_account(){
		return admin_account;
	}
	public void setAdmin_pwd(String admin_pwd){
		this.admin_pwd = admin_pwd;
	}
	public String getAdmin_pwd(){
		return admin_pwd;
	}
}
