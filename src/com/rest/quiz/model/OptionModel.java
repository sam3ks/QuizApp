package com.rest.quiz.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class OptionModel {
	Integer optionId;
	Integer qstnId;
	String optionDesc;
	Boolean validFlag;
	public Integer getOptionId() {
		return optionId;
	}
	public void setOptionId(Integer optionId) {
		this.optionId = optionId;
	}
	public Integer getQstnId() {
		return qstnId;
	}
	public void setQstnId(Integer qstnId) {
		this.qstnId = qstnId;
	}
	public String getOptionDesc() {
		return optionDesc;
	}
	public void setOptionDesc(String optionDesc) {
		this.optionDesc = optionDesc;
	}
	public Boolean getValidFlag() {
		return validFlag;
	}
	public void setValidFlag(Boolean validFlag) {
		this.validFlag = validFlag;
	}
	
	
}
