package	com.po;
public class User {
	private int user_key;
	private String user_code;
	private String user_pwd;
	private String user_name;
	private String user_sex;
	private String user_birthday;
	private String user_id;
	private String user_native;
	private String user_address;
	private String user_tel;
	private String user_other;
	private byte user_modify;
	private byte user_object;
	private byte user_user;
	private byte user_order;
	private byte user_log;
	private byte user_report;
	private String user_create;
	private String user_update;
	private byte user_exist;
	public void setUser_key(int user_key){
		this.user_key = user_key;
	}
	public int getUser_key(){
		return user_key;
	}
	public void setUser_code(String user_code){
		this.user_code = user_code;
	}
	public String getUser_code(){
		return user_code;
	}
	public void setUser_pwd(String user_pwd){
		this.user_pwd = user_pwd;
	}
	public String getUser_pwd(){
		return user_pwd;
	}
	public void setUser_name(String user_name){
		this.user_name = user_name;
	}
	public String getUser_name(){
		return user_name;
	}
	public void setUser_sex(String user_sex){
		this.user_sex = user_sex;
	}
	public String getUser_sex(){
		return user_sex;
	}
	public void setUser_birthday(String user_birthday){
		this.user_birthday = user_birthday;
	}
	public String getUser_birthday(){
		return user_birthday;
	}
	public void setUser_id(String user_id){
		this.user_id = user_id;
	}
	public String getUser_id(){
		return user_id;
	}
	public void setUser_native(String user_native){
		this.user_native = user_native;
	}
	public String getUser_native(){
		return user_native;
	}
	public void setUser_address(String user_address){
		this.user_address = user_address;
	}
	public String getUser_address(){
		return user_address;
	}
	public void setUser_tel(String user_tel){
		this.user_tel = user_tel;
	}
	public String getUser_tel(){
		return user_tel;
	}
	public void setUser_other(String user_other){
		this.user_other = user_other;
	}
	public String getUser_other(){
		return user_other;
	}
	public void setUser_modify(byte user_modify){
		this.user_modify = user_modify;
	}
	public byte getUser_modify(){
		return user_modify;
	}
	public void setUser_object(byte user_object){
		this.user_object = user_object;
	}
	public byte getUser_object(){
		return user_object;
	}
	public void setUser_user(byte user_user){
		this.user_user = user_user;
	}
	public byte getUser_user(){
		return user_user;
	}
	public void setUser_order(byte user_order){
		this.user_order = user_order;
	}
	public byte getUser_order(){
		return user_order;
	}
	public void setUser_log(byte user_log){
		this.user_log = user_log;
	}
	public byte getUser_log(){
		return user_log;
	}
	public void setUser_report(byte user_report){
		this.user_report = user_report;
	}
	public byte getUser_report(){
		return user_report;
	}
	public void setUser_create(String user_create){
		this.user_create = user_create;
	}
	public String getUser_create(){
		return user_create;
	}
	public void setUser_update(String user_update){
		this.user_update = user_update;
	}
	public String getUser_update(){
		return user_update;
	}
	public void setUser_exist(byte user_exist){
		this.user_exist = user_exist;
	}
	public byte getUser_exist(){
		return user_exist;
	}
	@Override
	public String toString() {
		return "User [user_key=" + user_key + ", user_code=" + user_code + ", user_pwd=" + user_pwd + ", user_name="
				+ user_name + ", user_sex=" + user_sex + ", user_birthday=" + user_birthday + ", user_id=" + user_id
				+ ", user_native=" + user_native + ", user_address=" + user_address + ", user_tel=" + user_tel
				+ ", user_other=" + user_other + ", user_modify=" + user_modify + ", user_object=" + user_object
				+ ", user_user=" + user_user + ", user_order=" + user_order + ", user_log=" + user_log
				+ ", user_report=" + user_report + ", user_create=" + user_create + ", user_update=" + user_update
				+ ", user_exist=" + user_exist + "]";
	}
	
}
