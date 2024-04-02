"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const Profile = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  // console.log('session: ',session);
  const [user, setUser] = useState({
    name: "",
    image: "",
    phone: "",
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setUser({
      image:session?.user?.image,
      name:session?.user?.name,
      phone:session?.user?.phone 
    })
  }, [session]);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className=" m-auto bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl  min-h-[40vh] pt-[20vh] px-8 pb-4 w-full sm:max-w-6xl sm:grid grid-cols-[1fr,6fr,1fr] items-center sticky -top-24">
        <div className="border-2 mr-6 border-zinc-900 rounded-full p-6 w-28 h-28">
          <img
            src={user && user?.image ? user.image : "/user-avatar.png"}
            width={72}
            height={72}
            alt="Avatar"
          />
        </div>
        <div className="grid">
          <h1 className="font-[900] uppercase text-2xl tracking-wider  text-primary">
            {user.name}
          </h1>
          <div>
            <span className="text-zinc-500 text-sm tracking-wide">
              {email}
            </span>
            <span className="text-zinc-500 text-sm tracking-wide">
              {user.phone}
            </span>
          </div>
        </div>
        <div>
          <button onClick={handleModal}>Edit Profile</button>
          <Modal
            heading={"EDIT PROFILE"}
            isOpen={modal}
            onClose={handleModal}
          />
        </div>
      </div>
      
    </>
  );
};

export default Profile;
