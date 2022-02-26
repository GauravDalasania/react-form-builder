import ReactModal from "react-modal";
import "./Modal.css";

const Modal = ({ isOpen, customStyles, children }) => {
	ReactModal.setAppElement(document.createElement("div"));

	return (
		<ReactModal
			isOpen={isOpen}
			style={customStyles ?? {}}
			contentLabel="Add Question Modal"
			className="dialog"
			overlayClassName="dialog-overlay"
		>
			<div className="dialog-box">{children}</div>
		</ReactModal>
	);
};

export default Modal;
