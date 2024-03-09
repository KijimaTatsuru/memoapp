	package dao;
	
	import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import bean.Memo;
	
	public class MemoDAO extends DAO{
		
		public List<Memo> search() throws Exception {
			
			List<Memo> list = new ArrayList<>();
			Connection con = getConnection();
			PreparedStatement st = con.prepareStatement("select title, content, created from memo");
			
			ResultSet rs = st.executeQuery();
			
			
			while(rs.next()) {
				
				Memo m = new Memo();
				
				m.setTitle(rs.getString("title"));
				m.setContent(rs.getString("content"));
				
				java.sql.Date createdDate = rs.getDate("created");
                if (createdDate != null) {
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
                    String dateString = sdf.format(createdDate);
                    int numericDate = Integer.parseInt(dateString);
                    m.setCreated(numericDate);
                } else {
                    m.setCreated(0);
                }
				
				list.add(m);
			}
			
			st.close();
			con.close();
			
			return list;
		}
		
		public int insert(Memo m) throws Exception{
			
			Connection con = getConnection();
			
			PreparedStatement st = con.prepareStatement("insert into memo (id, title, content, created) values (null,?, ?, ?)");
			st.setString(1, m.getTitle());
			st.setString(2, m.getContent());
			st.setInt(3, m.getCreated()); // 修正: 現在の日付をセット
			
			int line =st.executeUpdate();
	
			st.close();
			con.close();
			
			
			return line;
			
		}
		
	}