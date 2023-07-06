import Link from "next/link";
import React from "react";
import Input from "../components/UI/Input";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg py-4 px-8 rounded-lg">
        <h2 className="text-lg md:text-2xl font-bold">Register</h2>
        {/* <p className="mt-4 mb-2">Login</p> */}
        <form>
          <div className="mt-8">
            <Input
              //ref={userNameRef}
              type="text"
              id="userName"
              placeholder="enterYourUserName"
              required={true}
            />

            <Input
              //ref={emailRef}
              type="email"
              id="email"
              placeholder="enterYourEmail"
              required={true}
              //title={title === "login" ? "test@info.co" : undefined}
            />

            <Input
              // ref={passwordRef}
              type="password"
              id="password"
              placeholder="enterYourPassword"
              //title={title === "login" ? "123456" : undefined}
              required={true}
            />
          </div>

          <button
            type="submit"
            className="bg-palette-primary w-full py-4 rounded-lg text-palette-side text-xl shadow-lg"
          >
            login
          </button>
        </form>
        <Link href={`/login`} className="block my-4">
          <span className="text-sm text-palette-mute">
            already Have An Account
          </span>
          <span className="text-cyan-500"></span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
