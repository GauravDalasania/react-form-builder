import { call, put } from "redux-saga/effects";
import {
	requestSaveForm,
	requestGetForms,
	requestGetFormById,
	requestSaveResponse,
	requestGetResponseCount,
} from "../requests/formRequests";
import formActions from "../../actions/formActions";

export function* handleSaveForm(action) {
	try {
		const response = yield call(requestSaveForm, action.payload);
		yield put(formActions.saveFormSuccess(response));
	} catch (error) {
		console.error(error);
	}
}

export function* handleGetForms() {
	try {
		const response = yield call(requestGetForms);
		const responseCount = yield call(requestGetResponseCount);
		const data = {
			response: response.data,
			responseCount: responseCount.data,
		};
		yield put(formActions.getFormsSuccess(data));
	} catch (error) {
		console.error(error);
	}
}

export function* handleGetFormById(action) {
	try {
		const response = yield call(requestGetFormById, action.payload);
		yield put(formActions.getFormSuccess(response.data));
	} catch (error) {
		console.error(error);
	}
}

export function* handleSaveResponse(action) {
	try {
		const response = yield call(requestSaveResponse, action.payload);
		yield put(formActions.saveResponseSuccess());
	} catch (error) {
		console.error(error);
	}
}
