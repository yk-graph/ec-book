"use client";

import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      ログアウト
    </button>
  );
};

export default SignOut;
