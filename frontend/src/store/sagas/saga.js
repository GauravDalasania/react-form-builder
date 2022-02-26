import { takeLatest } from "redux-saga/effects";
import { handleGetForms, handleSaveForm, handleGetFormById, handleSaveResponse } from "./handler/formHandler";
import formActions from "../actions/formActions";

export function* watcherSaga() {
	yield takeLatest(formActions.SAVE_FORM, handleSaveForm);
	yield takeLatest(formActions.GET_ALL_FORMS, handleGetForms);
	yield takeLatest(formActions.GET_FORM_BY_ID, handleGetFormById);
	yield takeLatest(formActions.SAVE_RESPONSE, handleSaveResponse);
}
