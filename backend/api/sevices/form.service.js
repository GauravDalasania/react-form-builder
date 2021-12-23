const { v4: uuidv4 } = require("uuid");
const { readFileSync, writeFileSync } = require("fs");

const FORM_DATA_FILE_URL = "./data/forms.json";
const FORM_RESPONSE_FILE_URL = "./data/responses.json";

const saveFormData = (formJson) => {
	try {
		const url = uuidv4();
		const date = new Date().toLocaleString();
		const data = readFileSync(FORM_DATA_FILE_URL);
		let dataJson = JSON.parse(data);
		dataJson.push({ url, formJson, date });
		writeFileSync(FORM_DATA_FILE_URL, JSON.stringify(dataJson));
		return url;
	} catch (e) {
		console.error(e);
	}
};

const getAllForms = () => {
	try {
		return JSON.parse(readFileSync(FORM_DATA_FILE_URL));
	} catch (e) {
		console.error(e);
	}
};

const getFormById = (id) => {
	try {
		const response = JSON.parse(readFileSync(FORM_DATA_FILE_URL));
		const requiredForm = response.filter((form) => form.url == id);
		return requiredForm;
	} catch (error) {
		console.error(error);
	}
};

const saveResponse = (responseJson) => {
	try {
		const data = readFileSync(FORM_RESPONSE_FILE_URL);
		let responseFileJson = JSON.parse(data);
		const { id, response } = responseJson;
		if (responseFileJson[id]) {
			let len = Object.keys(responseFileJson[id]).length;
			console.log(len, "LEN");
			responseFileJson[id] = { ...responseFileJson[id], [len]: response };
		} else {
			responseFileJson[id] = { 0: response };
		}
		writeFileSync(FORM_RESPONSE_FILE_URL, JSON.stringify(responseFileJson));
	} catch (error) {
		console.error(error);
	}
};

const getTotalResponseCount = () => {
	try {
		const data = readFileSync(FORM_RESPONSE_FILE_URL);
		let responseFileJson = JSON.parse(data);
		let responseCount = {};
		for (let key in responseFileJson) {
			if (responseFileJson.hasOwnProperty(key)) {
				responseCount[key] = Object.keys(responseFileJson[key]).length;
			}
		}
		return responseCount;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	saveFormData,
	getAllForms,
	getFormById,
	saveResponse,
	getTotalResponseCount,
};
