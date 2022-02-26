import formActions from "../actions/formActions";
const initState = {
	data: {},
	totalResponses: {},
	action: null,
};

export default (state = initState, action) => {
	switch (action.type) {
		case formActions.SAVE_FORM_SUCCESS:
			return {
				...state,
				data: action.payload,
				action: action.type,
			};

		case formActions.GET_ALL_FORMS_SUCCESS:
			return {
				...state,
				data: action.payload.response,
				totalResponses: action.payload.responseCount,
				action: action.type,
			};
		case formActions.GET_FORM_BY_ID_SUCCESS:
			return {
				...state,
				data: action.payload,
				action: action.type,
			};
		case formActions.SAVE_RESPONSE_SUCCESS:
			return {
				...state,
				action: action.type,
			};
		case formActions.GET_TOTAL_RESPONSE_COUNT_SUCCESS:
			return {
				...state,
				totalResponses: action.payload,
				action: action.type,
			};
		default:
			return state;
	}
};
