package memo;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.Memo;
import dao.MemoDAO;
import tool.Action;

public class MemoDisplayAction extends Action{
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		HttpSession session = request.getSession();
		
		MemoDAO dao = new MemoDAO();
		List<Memo> list = dao.search();
		
		session.setAttribute("list", list);
		
		return "memo-display.jsp";
		
		
		
	}
}