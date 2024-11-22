import React, { useState } from "react";
import ArtImage from "../assets/Art.jpg";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation: Ensure all fields are filled
    const { name, email, username, password } = formData;
    if (!name || !email || !username || !password) {
      toast.warn("Please fill out all fields.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
  
    // Validate email domain is @gmail.com
    if (!email.endsWith("@gmail.com")) {
      toast.warn("Please enter a valid Gmail address.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
  
    // Password length validation
    if (password.length < 8) {
      toast.warn("Password must be at least 8 characters long.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
  
    const loader = toast.loading("Creating account...");
  
    signUp(formData)
      .then(() => {
        toast.update(loader, {
          render: "Signup successful! Redirecting to login.",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          position: "top-right",
        });
        navigate("/signin"); // Redirect to login on success
      })
      .catch((error) => {
        console.error("Error during signup:", error.response?.data || error.message);
        toast.update(loader, {
          render: error.response?.data?.message || "Signup failed. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          position: "top-right",
        });
      });
  };
  
  
  return (
    <div className="max-w-7xl h-screen mx-auto flex justify-around">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col w-[320px] justify-center">
          <div className="text-3xl font-semibold mb-4">Get Started!</div>
          <div>
            <div className="text-md mb-2">Sign up now and begin shaping your</div>
            <div className="text-md">educational future.</div>
          </div>

          <div className="mt-10">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="font-semibold text-sm">
                  Name
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter full name"
                  className="p-2 rounded-lg text-sm bg-lightblue w-full inputborder"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="font-semibold text-sm">
                  Email
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Example@gmail.com"
                  className="p-2 rounded-lg text-sm bg-lightblue w-full inputborder"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Username Field */}
              <div>
                <label htmlFor="username" className="font-semibold text-sm">
                  Username
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  className="p-2 rounded-lg text-sm bg-lightblue w-full inputborder"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="font-semibold text-sm">
                  Password
                </label>
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="At least 8 characters"
                  className="p-2 rounded-lg text-sm bg-lightblue w-full inputborder"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="bg-dark text-white flex justify-center items-center p-3 rounded-xl w-full btnhover mt-4 mb-4"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center p-4">
        <img src={ArtImage} alt="Art" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default Signup;
