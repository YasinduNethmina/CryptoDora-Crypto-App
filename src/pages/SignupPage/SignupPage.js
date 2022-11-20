import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase-config";

function SignupPage() {
  const [registerEmail, setRegisterEmail] = useState(undefined);
  const [registerPassword, setRegisterPassword] = useState(undefined);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [login, setLogin] = useState(false);

  // Google Auth
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Email Register
  const register = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      if (registerPassword?.length >= 6 && registerEmail?.length >= 6) {
        setLogin(true);
      }
    } catch (error) {
      setEmailErr(true);
    }
  };

  useEffect(() => {
    if (registerPassword || registerPassword?.length < 6) {
      setPasswordErr(true);
    } else if (registerPassword?.length >= 6) {
      setPasswordErr(false);
    }
  }, [registerPassword]);

  return (
    <>
      {login && <Navigate to="/" />}
      <div className="signupPage flex w-full overflow-y-hidden bg-[#31353f]">
        <div className="w-1/2 items-center justify-center bg-[#31353F]">
          <div className="relative top-10">
            <h1 className="ml-10 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
              Create New Account...
            </h1>

            <div className="mt-8 flex justify-center">
              <div>
                <button
                  onClick={signInWithGoogle}
                  type="button"
                  className="dark:focus:ring-[#4285F4]/55 mr-2 mt-4 inline-flex items-center justify-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
                >
                  <svg
                    className="mr-2 -ml-1 h-4 w-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Sign in with Google
                </button>

                <Link to="/">
                  <button className="dark:focus:ring-[#22c55e]/55 mx-auto mt-4 flex justify-center rounded-lg bg-[#22c55e] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#16a34a]/90 focus:outline-none focus:ring-4 focus:ring-[#16a34a]/50">
                    Demo Login
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full" type="submit">
            <div className="mt-10 flex items-center justify-center">
              <hr class="my-8 h-1 w-2/5 rounded-xl border-0 bg-gray-200 dark:bg-gray-700" />
              <h6 className="mx-4 text-gray-400">or</h6>
              <hr class="my-8 h-1 w-2/5 border-0 bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="my-1/4 w-full text-center">
              <h2 className="ml-10 text-left text-gray-300">Email</h2>
              <input
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="my-4 h-12 w-11/12 cursor-text rounded-lg border-2 border-gray-300 bg-gray-50 pl-4 pr-2 text-gray-900 outline-none duration-100 hover:border-2 hover:border-sky-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
              />

              <h2 className="ml-10 text-left text-gray-300">Password</h2>
              <input
                placeholder="••••••••"
                type="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="my-4 h-12 w-11/12 cursor-text rounded-lg border-2 border-gray-300 bg-gray-50 pl-4 pr-2 text-gray-900 outline-none duration-100 hover:border-2 hover:border-sky-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
              />
            </div>

            <div className="mx-6 my-4 flex justify-around">
              <div className="mt-4 flex items-start">
                <h6 className="text-gray-300">
                  By signing up, you are creating an account, and you agree to
                  CryptoDora's Terms of Use and Privacy Policy.
                </h6>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={register}
                className="my-6 mx-auto w-11/12 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Create your account
              </button>
            </div>
            <h4 className={emailErr ? "ml-8 text-red-500" : "hidden"}>
              Already registerd or invalid email, try again!
            </h4>
            <h4 className={passwordErr ? "ml-8 text-red-500" : "hidden"}>
              *Password must contain 6 characters.
            </h4>
          </div>

          <div className="absolute bottom-6 flex items-center">
            <h6 className="my-4 ml-8 mr-4 text-gray-400">
              Already have an account?
            </h6>
            <Link to="/login-page">
              <button className="text-blue-600 hover:text-blue-700">
                Login here
              </button>
            </Link>
          </div>
        </div>
        <div className="h-screen w-1/2">
          <img
            className="mt-8 h-screen skew-y-2 bg-cover"
            src={require("../../assets/images/login-img.jpg")}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default SignupPage;
