import React from 'react';
import Modal from 'react-modal';
import UserDetailsForm from './UserDetailsForm';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UserDetailsModal = ({ isOpen, onRequestClose, onDetailsSubmit }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="User Details"
    >
    <div>
        <div className="modal-header bg-success text-white">
            <h5 className="modal-title">Enter Your Details</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onRequestClose}></button>
        </div>
        <div className="modal-body">
            <UserDetailsForm onDetailsSubmit={onDetailsSubmit} />
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary mt-2" onClick={onRequestClose}>Close</button>
      </div>
    </div>

    </Modal>
  );
};

export default UserDetailsModal;
