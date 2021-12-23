const CustomInput = ({ que, onChange }) => {
	return (
		<div className="custom-input-wrapper">
			{que.type == "1" && (
				<div key={que.id}>
					<textarea
						className={"question-text-input question-text-input-" + que.id}
						cols="60"
						rows="4"
						placeholder="Enter your answer here"
						onChange={(e) => onChange(e, que)}
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
									onChange={(e) => onChange(e, que, index)}
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
									onChange={(e) => onChange(e, que, index)}
									name={`answer-radio-${que.id}`}
									className={`optionInput answer-radio-${que.id}-${index}`}
								/>
								{opn}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default CustomInput;
