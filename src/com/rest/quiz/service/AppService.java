package com.rest.quiz.service;

import java.util.ArrayList;

import com.rest.quiz.database.DatabaseClass;
import com.rest.quiz.model.OptionModel;
import com.rest.quiz.model.QAModel;
import com.rest.quiz.model.QuestionModel;

public class AppService {
	
	public ArrayList<QuestionModel> getAllQAs(){
		QAModel qaModel=new QAModel();
		
		DatabaseClass dbClass= new DatabaseClass();		
		
		return dbClass.getQOptions();
	}

	public void verifyAnswers(ArrayList<QuestionModel> sAnswers) {
		for(QuestionModel obj:sAnswers )
		{
			int qstnId= obj.getQstnId();
			ArrayList<OptionModel> selectedOptions= obj.getOptions();
			Boolean multiSelectFlag= obj.getMultipleFalg();
			OptionModel option=new OptionModel();
			/*if(!multiSelectFlag){
				option=selectedOptions.get(0);
				if(option.getOptionId()=="1")
					
			}*/
		}
			
	}

}
