import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USERS } from "../utils/urls";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const handleSingUp = (event) => {
    event.preventDefault();

    if (password !== password2) {
      alert('Passwords do not match!');
      return;
    }

    axios.post(USERS, { email, username, password, confirmed: true, role: 1 })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        navigate('/');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full h-[100vh] bg-center bg-cover bg-[url('https://safiabakery.uz/uploads/pages/pb_1680769318.jpg')]">
        <div className="w-full h-full bg-black/50 flex items-center justify-center">
          <div className="flex justify-center items-center h-screen">
            <div className="bg-black/40 border  shadow-2xl border-white py-[100px] px-[50px] rounded-xl ">
              <h2 className="text-2xl text-emerald-500 font-bold mb-4">
                Sign Up
              </h2>
              <form onSubmit={handleSingUp}>
              <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-green-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 py-1 px-10 border rounded-2xl"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-green-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 py-1 px-10 border rounded-2xl"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-green-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 py-1 px-10 border rounded-2xl"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password2"
                    className="block text-sm font-medium text-green-600"
                  >
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="password2"
                    name="password"
                    required
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    className="mt-1 py-1 px-10 border rounded-2xl"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-zinc-700 hover:text-red-600 transition duration-300 text-white py-2 px-[7rem] rounded-2xl"
                >
                  Sign Up
                </button>
                <Link
                  to="/login"
                  className=" flex mt-2 text-white  hover:text-blue-300 transition duration-500"
                >
                  Move to login page
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;

