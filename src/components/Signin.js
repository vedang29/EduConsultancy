import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../services/user-service"; // Import the signin function
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleLogo from "../assets/Google.png";
import FacebookLogo from "../assets/Facebook.png";
import ArtImage from "../assets/Art.jpg";
import { useAuth } from "../hooks/useAuth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth(); // Access login function from AuthContext
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await signin({ email, password });
      toast.success("Signed in successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      // Call login to set user in context and localStorage
      login(response.token);

      // Immediately redirect to home
      navigate("/home", { replace: true });
    } catch (error) {
      toast.error(error.message || "Sign-in failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl h-screen mx-auto flex justify-around">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col w-[320px] justify-center">
          <div className="text-3xl font-semibold mb-4">Welcome Back! 👋</div>
          <div>
            <div className="text-md mb-2">Unlock Your Path to Success.</div>
            <div className="text-md">Sign In to Begin Your Educational Journey.</div>
          </div>

          <div className="mt-10">
            <form className="flex flex-col" onSubmit={handleSignIn}>
              <div>
                <label htmlFor="email" className="font-semibold text-sm">Email</label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Example@gmail.com"
                  className="p-2 rounded-lg text-sm bg-lightblue w-full inputborder"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="font-semibold text-sm">Password</label>
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="At least 8 characters"
                  className="p-2 rounded-lg text-sm bg-lightblue w-full inputborder"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className={`bg-dark text-white flex justify-center items-center p-3 rounded-xl w-full btnhover mt-4 ${
                  isLoading ? "opacity-50" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </div>

          <button className="text-blue-800 font-semibold text-right mt-4 mb-4 ml-auto">
            Forgot Password?
          </button>

          <div className="flex justify-center items-center mt-12">
            <div className="h-[2px] w-full bg-grey rounded-full"></div>
            <div className="ml-2 mr-2 font-semibold"> Or </div>
            <div className="h-[2px] w-full bg-grey rounded-full"></div>
          </div>

          <div className="mt-8">
            <button className="flex text-black bg-grey items-center justify-center text-center font-semibold p-3 rounded-xl w-full mb-4 btnhover">
              <img src={GoogleLogo} alt="Google logo" className="logo" />
              <div className="ml-2 flex justify-center text-center">Sign in with Google</div>
            </button>
          </div>
          <div>
            <button className="flex text-black bg-grey items-center justify-center text-center font-semibold p-3 rounded-xl w-full btnhover">
              <img src={FacebookLogo} alt="Facebook logo" className="logo" /> Sign in with Facebook
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center p-4">
        <img src={ArtImage} alt="Art" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default Signin;