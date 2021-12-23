import axios from "axios";

const API_BASE_URL = "http://localhost:3001/";

export const requestSaveForm = (formJson) => {
	return axios.request({
		method: "post",
		url: API_BASE_URL + "saveForm/",
		data: formJson,
	});
};

export const requestGetForms = () => {
	return axios.request({
		method: "get",
		url: API_BASE_URL + "getForms/",
	});
};

export const requestGetFormById = (id) => {
	return axios.request({
		method: "get",
		params: {
			id,
		},
		url: API_BASE_URL + "getFormById/",
	});
};

export const requestSaveResponse = (responseJson) => {
	return axios.request({
		method: "post",
		url: API_BASE_URL + "saveResponse/",
		data: responseJson,
	});
};

export const requestGetResponseCount = () => {
	return axios.request({
		method: "get",
		url: API_BASE_URL + "getTotalResponseCount/",
	});
};
