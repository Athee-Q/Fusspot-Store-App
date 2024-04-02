"use client";

import { useState } from "react";
import { RiImageEditLine } from "react-icons/ri";

const UpdateImage = () => {
  const [imageSrc, setImageSrc] = useState();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex gap-4 items-center mx-auto ">
        <div className="border-2 border-zinc-200 rounded-full p-6 w-28 h-28">
      <img  src={imageSrc} alt="Avatar" />
      </div>
      <label
        className="flex items-center justify-center gap-2 border top-[50%] left-[50%] t text-xs py-1 px-2 rounded-lg"
        htmlFor="fileInput"
      >
        <input
          className="hidden"
          type="file"
          id="fileInput"
          name="imageFile"
          onChange={handleChange}
        />
        <span>Edit</span>
        <RiImageEditLine />
      </label>
    </div>
  );
};

export default UpdateImage;
