package com.rest.quiz.model;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class QuestionModel {
	Integer qstnId;
	String qstnDesc;
	String answerDesc;
	Boolean multipleFalg;
	ArrayList<OptionModel> options;
	
	public Integer getQstnId() {
		return qstnId;
	}
	public void setQstnId(Integer qstnId) {
		this.qstnId = qstnId;
	}
	public ArrayList<OptionModel> getOptions() {
		return options;
	}
	public void setOptions(ArrayList<OptionModel> options) {
		this.options = options;
	}
	public String getQstnDesc() {
		return qstnDesc;
	}
	public void setQstnDesc(String qstnDesc) {
		this.qstnDesc = qstnDesc;
	}
	public String getAnswerDesc() {
		return answerDesc;
	}
	public void setAnswerDesc(String answerDesc) {
		this.answerDesc = answerDesc;
	}
	public Boolean getMultipleFalg() {
		return multipleFalg;
	}
	public void setMultipleFalg(Boolean multipleFalg) {
		this.multipleFalg = multipleFalg;
	}
}
