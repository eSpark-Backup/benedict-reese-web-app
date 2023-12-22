import React from "react";

const NewModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white ml-[300px] p-8 w-6/12 2xl:w-7/12 rounded-md">
            {" "}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default NewModal;
