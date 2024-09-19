"use client";

import { useState } from "react";
import { TSignInFlow } from "../types";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

export const AuthScreen = () => {
  const [state, setState] = useState<TSignInFlow>("signIn");
  return (
    <div className="h-screen flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
      </div>
    </div>
  );
};
