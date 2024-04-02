"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { MdOutlineEditOff } from "react-icons/md";
import Edit from "../icons/Edit";
import axios from "axios";
import toast from "react-hot-toast";
import UpdateImage from "./UpdateImage";

const EditProfile = ({closeModel}) => {
  const { data: session } = useSession();
  const [userName, setUserName] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    setImageSrc(session?.user?.image);
    setUserName(session?.user?.name);
    setPhone(session?.user?.phone);
  }, [session]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.put('/api/profile', {
        name: userName,
        image: imageSrc,
        phone: phone,
      });
      console.log(res);
      if (res.ok) {
        toast.success('Profile Updated');
      } else {
        toast.error('Updating Error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <UpdateImage/>
        <div className="input">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="User-Name"
            value={userName || ""}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Edit />
        </div>
        <div className="input">
          <input
            className="text-zinc-400"
            type="email"
            id="email"
            name="email"
            disabled={true}
            value={session?.user?.email || ""}
          />
          <MdOutlineEditOff />
        </div>
        <div className="input">
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Mobile-Number"
            value={phone || ""}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Edit />
        </div>
        <button onClick={closeModel} type="submit">Update</button>
      </form>
    </>
  );
};

export default EditProfile;
