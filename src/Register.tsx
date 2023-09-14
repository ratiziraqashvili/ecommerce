import { useRef, useState } from "react";
import Logo from "./images/SHOPCO.svg";
import User from "./images/User.svg";
import { IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import { auth, provider } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import { login, selectUser } from "./store/features/userSlice";
import { useSelector } from "react-redux";
import Google from "./images/ggl.png"
import { useDispatch } from 'react-redux'

type Props = {};

function Register({}: Props) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const register = async (e: any) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        setError(null);
      } catch (err: any) {
        setError(err.message as string);
      }
    }
  };

  const signIn = async (e: any) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      try {
        const userCred = await signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        setError(null);
      } catch (err: any) {
        setError(err.message as string);
      }
    }
  };

  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then(({ user }) => {
        dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,    
        }))
    })
    .catch(error => alert(error.message))
  }

  const customFontStyle = {
    fontFamily: "Plus Jakarta Sans, sans-serif",
  };
  const user = useSelector(selectUser);
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <nav className="flex bg-white justify-between p-6 w-[100%]">
        <div className="flex gap-3 md:gap-9 xl:gap-24 lg:pl-20 items-center">
          <img
            className="w-[130px] 2xl:w-[170px] md:w-[159px] cursor-pointer"
            src={Logo}
            alt="Company Logo"
          />
        </div>
        <div className="flex gap-3">
          <IconButton>
            <img
              className="cursor-pointer 2xl:w-[28px]"
              src={User}
              alt="User"
            />
          </IconButton>
        </div>
      </nav>
      <form
        onSubmit={register}
        className="mt-32 max-w-md mx-auto flex flex-col gap-2"
      >
        {error && <p className="text-red-500">{error.slice(9)}</p>}
        <TextField
          inputRef={emailRef}
          label="Email"
          variant="outlined"
          className="w-full"
        />

        <TextField
          inputRef={passwordRef}
          label="Password"
          variant="outlined"
          type="password"
          className="w-full mt-5"
        />

        <button
          type="submit"
          onClick={signIn}
          className="bg-black text-white px-4 py-2 mt-5 rounded-md hover:bg-black/90"
        >
          Sign In
        </button>

        <button
          type="button"
          className="px-4 py-2 mt-5 mb-2 rounded-full flex items-center space-x-2 border-[1px] hover:bg-slate-50"
          onClick={signInWithGoogle}
        >
          <div className="flex items-center ml-auto mr-auto gap-3">
          <img className="w-[30px]" src={Google} alt="" />
          <span className="font-semibold" style={customFontStyle}>Sign In with Google</span> 
          </div>
        </button>

        <span>
          Don't have an account?
          <button
            onClick={register}
            className="ml-[5px] text-blue-500 cursor-pointer"
          >
            {" "}
            Sign Up
          </button>
        </span>
        <span className="text-sm text-gray-700 mt-4 block">
          Email:{" "}
          <span className="font-medium text-gray-900">example@gmail.com</span>
        </span>

        <span className="text-sm text-gray-700 mt-2 block">
          Password:{" "}
          <span className="font-medium text-gray-900">example123</span>
        </span>
      </form>
    </div>
  );
}

export default Register;
