package com.rest.quiz;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.rest.quiz.model.QAModel;
import com.rest.quiz.model.QuestionModel;
import com.rest.quiz.service.AppService;

@Path("/fetchQA")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class quizResource {
	@GET	
	public ArrayList<QuestionModel> fetchQAs()
	{
		
		AppService service= new AppService();
		
		return service.getAllQAs();
		
	}
	@POST	
	public void submittedQAs(ArrayList<QuestionModel> sAnswers)
	{
		AppService service= new AppService();		
		service.verifyAnswers(sAnswers);
		//return list;
		
	}

}
