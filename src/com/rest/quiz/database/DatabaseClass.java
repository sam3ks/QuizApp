package com.rest.quiz.database;

import java.util.ArrayList;

import com.rest.quiz.model.OptionModel;
import com.rest.quiz.model.QuestionModel;

public class DatabaseClass {
	
	/*public ArrayList<QuestionModel> getAllQuestions()
	{
		ArrayList<QuestionModel> qList= new ArrayList<QuestionModel>();
		
		QuestionModel qstn1= new QuestionModel();
		qstn1.setQstnId(1);
		qstn1.setQstnDesc("FirstQuestion");
		qstn1.setMultipleFalg(new Boolean("Y"));
		qList.add(qstn1);
		
		QuestionModel qstn2= new QuestionModel();
		qstn2.setQstnId(2);
		qstn2.setQstnDesc("Second Question");
		qstn2.setMultipleFalg(new Boolean("N"));
		qList.add(qstn2);
		
		QuestionModel qstn3= new QuestionModel();
		qstn3.setQstnId(3);
		qstn3.setQstnDesc("Third Question");
		qstn3.setMultipleFalg(new Boolean("N"));
		qList.add(qstn3);
		return qList;
	}*/
	public ArrayList<OptionModel> getAllOptions()
	{
		ArrayList<OptionModel> qList= new ArrayList<OptionModel>();
		
		OptionModel opt1= new OptionModel();
		opt1.setQstnId(1);
		opt1.setOptionId(1);	
		opt1.setOptionDesc("OPTION 1");
		qList.add(opt1);
		OptionModel opt2= new OptionModel();
		opt2.setQstnId(1);
		opt2.setOptionId(2);	
		opt2.setOptionDesc("OPTION 2");
		qList.add(opt2);
		
		return qList;
	}
	public ArrayList<QuestionModel> getQOptions()
	{
		ArrayList<QuestionModel> qList= new ArrayList<QuestionModel>();
		ArrayList<OptionModel> options = new ArrayList<OptionModel>();
		QuestionModel qModel= new QuestionModel();
		OptionModel opt1= new OptionModel();
		qModel.setQstnId(1);
		qModel.setQstnDesc("FIRST QSTN");
		opt1.setOptionId(1);	
		opt1.setOptionDesc("OPTION 1");
		options.add(opt1);		
		OptionModel opt2= new OptionModel();
		opt2.setOptionId(2);	
		opt2.setOptionDesc("Second qstn");
		qModel.setOptions(options);
		qList.add(qModel);
		return qList;
	}
}
