import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { history } from "../../store/config";
import CustomInput from "../../components/CustomInput/CustomInput";
import formActions from "./../../store/actions/formActions";
import "./FormResponse.css";

const FormResponse = () => {
	let { id } = useParams();

	const dispatch = useDispatch();
	const { data: form } = useSelector((state) => state.form);
	const { action } = useSelector((state) => state.form);
	const [response, setResponse] = useState({});
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		dispatch(formActions.getForm(id));
	}, [id]);

	useEffect(() => {
		if (action === formActions.SAVE_RESPONSE_SUCCESS) {
			history.go(-1);
		}
	}, [action]);

	const saveResponse = () => {
		let filteredResponse = filterResponse();
		let finalResponseObj;
		if (Object.keys(filteredResponse).length) {
			finalResponseObj = {
				id,
				response: filteredResponse,
			};
			dispatch(formActions.saveResponse(finalResponseObj));
			setIsError(false);
		} else {
			setIsError(true);
		}
	};

	const filterResponse = () => {
		let filteredObj = { ...response };
		for (let key in filteredObj) {
			if (filteredObj.hasOwnProperty(key)) {
				if (
					filteredObj[key] == "" ||
					(typeof filteredObj[key] === "object" && Object.keys(filteredObj[key]).length <= 0)
				) {
					delete filteredObj[key];
				}
			}
		}
		return filteredObj;
	};

	const handleOnChange = (e, que, index = -1) => {
		let responseObj = { ...response };
		let ans;
		if (que.type === "1" || que.type === "3") {
			ans = e.target.value;
			responseObj[que.id] = ans;
		} else if (que.type === "2") {
			ans = e.target.checked;
			if (ans) {
				responseObj[que.id] = { ...responseObj[que.id], [index]: e.target.value };
			} else {
				delete responseObj[que.id][index];
			}
		}
		setResponse(responseObj);
	};

	return (
		<>
			<div className="form-container" onFocus={() => setIsError(false)}>
				{form.length > 0 && (
					<>
						<div className="form-header">
							<span className="response-form-title">{form[0].formJson.title}</span>
						</div>
						{form[0].formJson.body.map((que, index) => {
							return (
								<React.Fragment key={index}>
									<p className="question"> {`${que.id}. ${que.question}`} </p>
									<CustomInput que={que} onChange={(e, que, index) => handleOnChange(e, que, index)} />
								</React.Fragment>
							);
						})}
					</>
				)}

				<div className="form-footer">
					<button className="save-response-btn btn" onClick={() => saveResponse()}>
						Save Response
					</button>
				</div>
			</div>
			{isError && (
				<p className="error error-message">
					<span> Please enter response!!! </span>
				</p>
			)}
		</>
	);
};

export default FormResponse;
