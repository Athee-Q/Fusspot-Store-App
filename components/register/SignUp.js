"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiFingerPrint, HiAtSymbol, HiOutlineUser } from "react-icons/hi";
import UpdateImage from "../Profile/UpdateImage";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState({ pass: false, cpass: false });
  const router = useRouter();

  


  function handleInputChange(e) {
    const { name, value } = e.target;
    return setUser((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      if (user.password !== confirmPassword) {
        setLoading(false);
        setError("Enter your password correctly");
        return;
      }

      if (!user.name || !user.email || !user.password) {
        setLoading(false);
        setError("Please fill all the feilds");
        return;
      }
      const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(user.email)) {
        setLoading(false);
        setError("invalid email id");
        return;
      }
      const res = await axios.post("/api/signup", user);

      if (res?.status === 400) {
        setLoading(false);
        setError("User Already Exists");
      }
      if (res?.status === 200 || res?.status === 201) {
        setLoading(false);
        setError("");
        router.push("/signin");
      }
    } catch (error) {
      setLoading(false);
      setError("");
      return;
    } finally {
      setUser({
        name: "",
        email: "",
        password: "",
      });
      setConfirmPassword("");
    }
  }

  return (
    <section className="mt-[20vh] h-[100vh]">
      <h6 className="text-center font-bold text-primary text-4xl">REGISTER</h6>

      <form
        className="grid gap-4 max-w-sm mt-6 mx-auto"
        onSubmit={handleSubmit}
      >
        <UpdateImage/>
        <div className="input">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            disabled={loading}
            value={user.name}
            onChange={handleInputChange}
          />
          <span>
            <HiOutlineUser />
          </span>
        </div>
        <div className="input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            disabled={loading}
            value={user.email}
            onChange={handleInputChange}
          />
          <span>
            <HiAtSymbol />
          </span>
        </div>

        <div className="input">
          <input
            type={showPass.pass ? "text" : "password"}
            name="password"
            placeholder="Password"
            disabled={loading}
            value={user.password}
            onChange={handleInputChange}
          />
          <span
            onClick={(e) => setShowPass({ ...showPass, pass: !showPass.pass })}
          >
            <HiFingerPrint />
          </span>
        </div>
        <div className="input">
          <input
            type={showPass.cpass ? "text" : "password"}
            name="cpassword"
            placeholder="Confirm Password"
            disabled={loading}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            onClick={(e) =>
              setShowPass({ ...showPass, cpass: !showPass.cpass })
            }
          >
            <HiFingerPrint />
          </span>
        </div>
        {error && <div className="text-red-600 text-xs">{error}</div>}

        <button disabled={loading} type="submit">
          {!loading ? "Register" : "Processing..."}
        </button>

        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?&nbsp;
          <Link href="/signin" passHref>
            <span className="text-primary font-medium">Sign In &raquo;</span>
          </Link>
        </div>
      </form>
    </section>
  );
};
export default SignUp;
