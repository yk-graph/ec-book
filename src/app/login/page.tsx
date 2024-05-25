import SignInWithGithub from "@/components/SignInWithGithub";
import { getProviders, signIn } from "next-auth/react";

export default async function Login() {
  const providers = await getProviders();

  return (
    <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            アカウントにログイン
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <SignInWithGithub />
          {/* <form>
            <label>
              メールアドレス:
              <input className="text-gray-900" type="email" name="email" />
            </label>
            <label>
              パスワード:
              <input
                className="text-gray-900"
                type="password"
                name="password"
              />
            </label>
            {!state && (
              <div className="text-red-500">
                メールアドレスかパスワードが違います。
              </div>
            )}
            <button>ログイン</button>
          </form> */}
        </div>
      </div>
    </div>
  );
}
