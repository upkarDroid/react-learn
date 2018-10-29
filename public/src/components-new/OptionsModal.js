import React from 'react';
import Modal from 'react-modal';

const OptionsModal = (props) => (
    <Modal isOpen={!!props.selectedOption} contentLabel="selected Option" 
    closeTimeoutMS={200}
    className="modal">
        <h3 className="modal__title"> Selected Option</h3>
        <p className="modal__body">{props.selectedOption}</p>
        <button className="button" onClick={props.closeModal}>Close Me</button>
    </Modal>
);

export default OptionsModal;