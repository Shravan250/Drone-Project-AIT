import { useState } from "react";
import Google from "../assets/google.svg";

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSignIn = (provider) => {
    console.log(`Signing in with ${provider}`);
    alert(`Signing in with ${provider}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-[10px] text-center">Sign in</h2>
        <p className="text-gray-400 text-center">
          Welcome, please sign in to continue.
        </p>

        <div className="mt-6">
          <button
            className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
            onClick={() => handleSignIn("Google")}
          >
            <img src={Google} className="h-5 w-5 mr-2" alt="Google" />
            Sign In With Google
          </button>
        </div>

        <div className="my-6 flex items-center justify-center">
          <span className="w-full border-t border-gray-600"></span>
          <span className="mx-3 text-gray-400">or</span>
          <span className="w-full border-t border-gray-600"></span>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm my-[5px]">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-400 text-sm my-[5px]">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4 text-blue-500" />
            <label className="ml-2 text-gray-400">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
