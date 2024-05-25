"use client";

import { signIn } from "next-auth/react";

const SignInWithGithub = () => {
  return (
    <button
      className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center w-full"
      onClick={() => signIn("github", { callbackUrl: "/" })}
    >
      Githubでログイン
    </button>
  );
};

export default SignInWithGithub;
