const actions = {
	SAVE_FORM: "SAVE_FORM",
	SAVE_FORM_SUCCESS: "SAVE_FORM_SUCCESS",

	GET_ALL_FORMS: "GET_ALL_FORMS",
	GET_ALL_FORMS_SUCCESS: "GET_ALL_FORMS_SUCCESS",

	GET_FORM_BY_ID: "GET_FORM_BY_ID",
	GET_FORM_BY_ID_SUCCESS: "GET_FORM_BY_ID_SUCCESS",

	SAVE_RESPONSE: "SAVE_RESPONSE",
	SAVE_RESPONSE_SUCCESS: "SAVE_RESPONSE_SUCCESS",

	GET_TOTAL_RESPONSE_COUNT: "GET_TOTAL_RESPONSE_COUNT",
	GET_TOTAL_RESPONSE_COUNT_SUCCESS: "GET_TOTAL_RESPONSE_COUNT_SUCCESS",

	saveForm: (payload = {}) => ({
		type: actions.SAVE_FORM,
		payload,
	}),

	saveFormSuccess: (payload = {}) => ({
		type: actions.SAVE_FORM_SUCCESS,
		payload,
	}),

	getForms: () => ({
		type: actions.GET_ALL_FORMS,
	}),

	getFormsSuccess: (payload = {}) => ({
		type: actions.GET_ALL_FORMS_SUCCESS,
		payload,
	}),

	getForm: (payload) => ({
		type: actions.GET_FORM_BY_ID,
		payload,
	}),

	getFormSuccess: (payload = {}) => ({
		type: actions.GET_FORM_BY_ID_SUCCESS,
		payload,
	}),

	saveResponse: (payload) => ({
		type: actions.SAVE_RESPONSE,
		payload,
	}),

	saveResponseSuccess: (payload = {}) => ({
		type: actions.SAVE_RESPONSE_SUCCESS,
		payload,
	}),

	getTotalResponseCount: () => ({
		type: actions.GET_TOTAL_RESPONSE_COUNT,
	}),

	getTotalResponseCountSuccess: (payload = {}) => ({
		type: actions.GET_TOTAL_RESPONSE_COUNT,
		payload,
	}),
};

export default actions;
