package memo;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bean.Memo;
import dao.MemoDAO;
import tool.Action;



public class MemoAddAction extends Action{
public String execute(HttpServletRequest request, HttpServletResponse response)throws Exception {
		
		String title = request.getParameter("title");
		String content = request.getParameter("content");
		
		// 現在の日付を取得
        LocalDate currentDate = LocalDate.now();
        
        // フォーマットを指定して日付を文字列に変換
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        String formattedDate = currentDate.format(formatter);
        
        // 文字列を整数に変換
        int created = Integer.parseInt(formattedDate);
		
		Memo m = new Memo();
		
		m.setTitle(title);
		m.setContent(content);
		m.setCreated(created);
		MemoDAO  dao = new MemoDAO();
		
		dao.insert(m);
		
		
		return "index.jsp";
		
	}
}