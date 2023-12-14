import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  return (
        
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full h-[100vh] bg-center bg-cover bg-[url('https://safiabakery.uz/uploads/pages/pb_1680769318.jpg')]">
      <div className="w-full h-full bg-black/50 flex items-center justify-center">
      <div className="flex justify-center items-center h-screen">
      <div className="bg-black/40 border shadow-2xl py-[100px] px-[50px] rounded-3xl  ">
        <h2 className="text-2xl  text-emerald-500 font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-green-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-1 px-10 border rounded-2xl "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-green-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-1 px-10 border rounded-2xl"
              />
          </div>
          <button type="button" className="bg-zinc-700 hover:text-red-600 transition duration-300 text-white py-2 px-[7rem] rounded-2xl">
            Login
          </button>
            
                <Link to="/SingUp" className=" flex mt-1 text-white  hover:text-blue-300 transition duration-500">
                  Move to Sing Up page
                </Link>
        </form>
      </div>
      </div>
    </div>     
   

    
    </div>
    </div>
  );
};

export default Login
