import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import "./CreateForm.css";
import { useDispatch, useSelector } from "react-redux";
import formActions from "./../../store/actions/formActions";
import { history } from "./../../store/config";

const CreateForm = () => {
	const [formBody, setFormBody] = useState([]);
	const [formTitle, setFormTitle] = useState("New Form");
	const [question, setQuestion] = useState("");
	const [options, setOptions] = useState([]);
	const [questionType, setQuestionType] = useState(0);
	const [addQuestionModalVisible, setAddQuestionModalVisible] = useState(false);

	const dispatch = useDispatch();
	const { action } = useSelector((state) => state.form);

	const addQuestion = () => {
		setAddQuestionModalVisible(true);
	};

	const addNewQuestion = () => {
		setAddQuestionModalVisible(false);
		let formBodyArr = [...formBody];
		let questionObj = {
			id: formBodyArr.length + 1,
			type: questionType,
			question: question,
			options: options,
		};
		formBodyArr.push(questionObj);
		setFormBody(formBodyArr);
		resetQuestionModal();
	};

	const onQuestionTypeChange = (e) => {
		setQuestionType(e.target.value);
	};

	const questionInputChange = (e) => {
		setQuestion(e.target.value);
	};

	const optionInputChange = (e) => {
		let rawOptions = e.target.value;
		let optionsArr = [...rawOptions.trim().split("\n")];
		optionsArr = optionsArr.filter((item) => !!item);
		setOptions(optionsArr);
	};

	const saveForm = () => {
		const formJson = {
			title: formTitle,
			body: formBody,
		};
		dispatch(formActions.saveForm(formJson));
	};

	const resetQuestionModal = () => {
		setOptions([]);
		setQuestionType(0);
		setQuestion("");
	};

	const cancelNewQuestion = () => {
		resetQuestionModal();
		setAddQuestionModalVisible(false);
	};

	useEffect(() => {
		if (action === formActions.SAVE_FORM_SUCCESS) {
			history.back();
		}
	}, [action]);

	return (
		<div className="form-container">
			<div className="form-header">
				<input
					type="text"
					placeholder="Form Title"
					className="form-title"
					value={formTitle}
					onChange={(e) => setFormTitle(e.target.value)}
				/>
			</div>
			<div className="form-body">
				{formBody.map((que, index) => {
					return (
						<React.Fragment key={index}>
							<p className="question"> {`${que.id}. ${que.question}`} </p>
							{que.type == "1" && (
								<div key={que.id}>
									<textarea
										className={"question-text-input question-text-input-" + que.id}
										cols="60"
										rows="4"
										placeholder="Enter your answer here"
										value={""}
										readOnly={true}
									/>
								</div>
							)}
							{que.type == "2" && (
								<div key={que.id}>
									{que.options.map((opn, index) => {
										return (
											<div className={`option checkBox`} key={index}>
												<input
													type="checkbox"
													value={opn}
													key={index}
													checked={false}
													readOnly={true}
													className={`optionInput answer-checkbox-${que.id}-${index}`}
												/>
												{opn}
											</div>
										);
									})}
								</div>
							)}

							{que.type == "3" && (
								<div key={que.id}>
									{que.options.map((opn, index) => {
										return (
											<div className={`option radio `} key={index}>
												<input
													type="radio"
													value={opn}
													key={index}
													checked={false}
													readOnly={true}
													name={`answer-radio-${que.id}`}
													className={`optionInput answer-radio-${que.id}-${index}`}
												/>
												{opn}
											</div>
										);
									})}
								</div>
							)}
						</React.Fragment>
					);
				})}
			</div>
			<div className="form-footer">
				<button className="add-question-btn btn" onClick={() => addQuestion()}>
					Add Question
				</button>
				<button className="save-form-btn btn" onClick={() => saveForm()}>
					Save
				</button>
			</div>

			<Modal isOpen={addQuestionModalVisible}>
				<div className="new-question-container">
					<div className="new-question-header">
						Enter question:
						<input
							type="text"
							placeholder="Enter your question"
							className="new-question-input"
							value={question}
							onChange={(e) => questionInputChange(e)}
						/>
					</div>
					<div className="new-question-body">
						<div className="select-question-type-container">
							Select the answer type:
							<select className="select-question-type" onChange={(e) => onQuestionTypeChange(e)} defaultValue={0}>
								<option value="0" hidden>
									--Select--
								</option>
								<option value="1"> Text </option>
								<option value="2"> Checkbox </option>
								<option value="3"> Radio </option>
							</select>
						</div>
						<div className="answer-container">
							{questionType > 1 && (
								<>
									Enter Options (line seperated):
									<textarea
										className="options-input"
										cols="60"
										rows="4"
										placeholder="Enter your options here"
										onChange={(e) => optionInputChange(e)}
									/>
								</>
							)}
						</div>
					</div>
					<div className="add-new-question-btn-container">
						<button
							className="add-new-question-btn btn"
							onClick={() => addNewQuestion()}
							disabled={questionType <= 0 || question == "" || (questionType > 1 && options.length <= 0)}
						>
							Add
						</button>
						<button className="cancel-new-question-btn btn" onClick={() => cancelNewQuestion()}>
							Cancel
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default CreateForm;

const itemEnum = {
	1: "text",
	2: "checkBox",
	3: "radio",
};
