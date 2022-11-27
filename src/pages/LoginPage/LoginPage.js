import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import "./LoginPage.scss";

function LoginPage() {
  const [loginEmail, setLoginEmail] = useState(undefined);
  const [loginPassword, setLoginPassword] = useState(undefined);
  const [login, setLogin] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

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

  // Email login
  const logIn = async () => {
    try {
      const newUser = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      if (loginPassword?.length >= 6 && loginPassword?.length >= 6) {
        setLogin(true);
      }
    } catch (error) {
      setEmailErr(true);
    }
  };

  return (
    <>
      {login && <Navigate to="/" />}
      <div className="login-page flex w-full overflow-y-hidden bg-[#31353f]">
        <div className="login-page-inner w-1/2 items-center justify-center bg-[#31353F]">
          <div className="relative top-10">
            <h1 className="ml-10 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
              Welcome Back...
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

          <div className="w-full" type="submit" action="">
            <div className="mt-10 flex items-center justify-center">
              <hr class="my-8 h-1 w-2/5 rounded-xl border-0 bg-gray-700" />
              <h6 className="mx-4 text-gray-400">or</h6>
              <hr class="my-8 h-1 w-2/5 border-0  bg-gray-700" />
            </div>

            <div className="my-1/3 w-full text-center">
              <h2 className="ml-10 text-left text-gray-300">Email</h2>
              <input
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setLoginEmail(e.target.value)}
                className="my-4 h-12 w-11/12 cursor-text rounded-lg border-2 border-gray-600 border-l-gray-700 bg-gray-700 pl-4 pr-2 text-white placeholder-gray-400 outline-none duration-100 hover:border-2 hover:border-sky-500 focus:border-blue-500 focus:ring-blue-500"
              />

              <h2 className="ml-10 text-left text-gray-300">Password</h2>
              <input
                placeholder="••••••••"
                type="password"
                onChange={(e) => setLoginPassword(e.target.value)}
                className="my-4 h-12 w-11/12 cursor-text rounded-lg border-2 border-gray-600 border-l-gray-700 bg-gray-700 pl-4 pr-2 text-white placeholder-gray-400 outline-none duration-100 hover:border-2 hover:border-sky-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-around">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="mr-3 cursor-pointer border-2 border-gray-300 bg-gray-50 pl-4 pr-2 text-gray-900 outline-none duration-100 hover:border-2 hover:border-sky-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                  />
                  <h6 className="text-gray-300">Remember me</h6>
                </div>

                <div className="font-semibold text-blue-600 transition-all hover:text-blue-700">
                  <button>Forgot Password?</button>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={logIn}
                className="my-6 mx-auto w-11/12 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Sign in to your account
              </button>
            </div>
            <h4 className={emailErr ? "ml-8 text-red-500" : "hidden"}>
              Invalid email, try again or just signup!
            </h4>
            <h4 className={passwordErr ? "ml-8 text-red-500" : "hidden"}>
              *Password must contain 6 characters.
            </h4>
          </div>

          <Link to="/signup-page">
            <div className="signup-page-link mb-4 flex items-center">
              <h6 className="ml-8 mr-4 text-gray-400">
                Don't have an account?
              </h6>
              <button className="text-blue-600 hover:text-blue-700">
                Sign up
              </button>
            </div>
          </Link>
        </div>

        <div className="login-page-img h-screen w-1/2 bg-[#31353F]">
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

export default LoginPage;
