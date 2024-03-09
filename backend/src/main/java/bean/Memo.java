package bean;

public class Memo implements java.io.Serializable{
	
	private int id;
	private String title;
	private String context;
	private int created;
	
	public int getId() {
		return id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public String getContent() {
		return context;
	}
	
	public int getCreated() {
		return created;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public void setContent(String context) {
		this.context = context;
	}
	
	public void setCreated(int created) {
		this.created = created;
	}
	
}