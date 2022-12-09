import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chatbot22</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
        />
        <span>John</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
