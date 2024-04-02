"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import EditProfile from "../Profile/EditProfile";

const Modal = ({heading, isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-900 opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed inset-0 flex items-center justify-center  pt-[20vh] pb-6 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="modal-container bg-white w-5/12  mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="flex p-4 border-b">
            <h2 className="text-2xl  flex-grow font-semibold">{heading}</h2>
            <span onClick={onClose}>
              <IoClose />
            </span>
          </div>
          <div className="p-4">
            <EditProfile closeModel={onClose}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
