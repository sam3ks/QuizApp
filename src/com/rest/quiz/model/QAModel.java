package com.rest.quiz.model;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
@XmlRootElement
public class QAModel {

	public QuestionModel getQuestion() {
		return question;
	}
	public void setQuestion(QuestionModel question) {
		this.question = question;
	}
	ArrayList<OptionModel> options= new ArrayList<OptionModel>();
	QuestionModel question= new QuestionModel();
	public ArrayList<OptionModel> getOptions() {
		return options;
	}
	public void setOptions(ArrayList<OptionModel> options) {
		this.options = options;
	}
	
}
