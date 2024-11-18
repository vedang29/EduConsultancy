import React from "react";
import signout from "../../assets/signout.png";
import user from "../../assets/user.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

const Nav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    const toastId = toast.loading("Logging out...");

    setTimeout(() => {
      logout();
      toast.update(toastId, {
        render: "Logged out successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      navigate("/", { replace: true });
    }, 2000);
  };

  return (
    <div className="border-b-2 flex justify-between items-center w-full p-3">
      <Link to="/home">
        <div className="bg-orange h-[60px] w-[60px] flex justify-center items-center rounded-xl logoshadow">
          <img src={logo} alt="Logo" className="h-[34px] w-[34px]" />
        </div>
      </Link>

      <div className="flex justify-center items-center space-x-0 flex-grow">
        <Link to="/home">
          <button className="bg-dark text-white px-6 py-2 rounded-lg font-semibold navbtn">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className="px-6 py-2 rounded-lg font-semibold navbtn">
            About Us
          </button>
        </Link>
        <Link to="/pricing">
          <button className="px-6 py-2 rounded-lg font-semibold navbtn">
            Pricing
          </button>
        </Link>
        <Link to="/blogs">
          <button className="px-6 py-2 rounded-lg font-semibold navbtn">
            Blogs
          </button>
        </Link>
        <Link to="/contact">
          <button className="px-6 py-2 rounded-lg font-semibold navbtn">
            Contact
          </button>
        </Link>
        <Link to="/feedback">
          <button className="px-6 py-2 rounded-lg font-semibold navbtn">
            Feedback
          </button>
        </Link>
        <button className="px-6 py-2 rounded-lg font-semibold navbtn">
          Account
        </button>
      </div>

      <div className="flex items-center space-x-2 justify-center gap-2">
        <button
          onClick={handleLogout}
          className="rounded-full p-3 font-semibold btnhover"
        >
          <img src={signout} alt="Signout" className="w-5 h-5" />
        </button>
        <Link to="/dashboard">
          <button className="bg-orange text-white p-3 rounded-full btnhover font-semibold">
            <img src={user} alt="User" className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
