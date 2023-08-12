import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4">
        <div className="modal-content text-center">
          <button
            className="modal-close absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            x
          </button>
          <div className="mb-4">
            <svg
              className="w-8 h-8 mx-auto mb-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 100 20 10 10 0 000-20zM6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xl font-semibold">
              The estimated value of the property is:
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
