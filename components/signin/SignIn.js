"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import { signIn } from "next-auth/react";
import Credentials from "next-auth/providers/credentials";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  function handleInputSubmit(e) {
    const { name, value } = e.target;
    return setUser((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!user.email || !user.password) {
        setError("Please fill all the feilds");
        return;
      }
      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });
      if (res?.error) {
        setError("Check your Email and Password");
        setUser({email:'',password:''})
      } else {
        router.push("/");
        setError("");
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
      const form = e.target;
      form.reset();
    }
  };

  return (
    <section className="mt-[20vh] h-[100vh] ">
      <h6 className="text-center font-bold text-primary text-4xl">
        SIGN&nbsp;IN
      </h6>
      <form
        className="grid gap-4 max-w-sm mt-6 mx-auto "
        onSubmit={handleSubmit}
      >
        <div className="input">
          <input
            type="email"
            name="email"
            disabled={loading}
            value={user.email}
            placeholder="Email"
            onChange={handleInputSubmit}
          />
          <span>
            <HiAtSymbol />
          </span>
        </div>
        <div className="input">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            disabled={loading}
            value={user.password}
            placeholder="Password"
            onChange={handleInputSubmit}
          />
          <span onClick={(e) => setShowPass(!showPass)}>
            <HiFingerPrint />
          </span>
        </div>
        {error && <div className="text-red-600 text-xs ">{error}</div>}
        <button disabled={loading} type="submit">
          Sign&nbsp;In
        </button>
        <div className="my-4 text-gray-500 text-sm text-center ">(Or)</div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex justify-center gap-4"
        >
          <Image src="/google.svg" alt="GoogleLogo" width={24} height={24} />
          Sign in with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4 ">
          Don't have an account yet?&nbsp;
          <Link className=" font-medium text-primary" href={"/signup"}>
            Sign&nbsp;up &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
