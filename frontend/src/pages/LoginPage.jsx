import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import Button2 from "../shared/Button2";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  // Handle login form submission
  async function login(event) {
    event.preventDefault(); 

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true); 
    setError("");

    try {
      // Make POST request to the backend login API
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      // Check if login is successful
      if (response.data && response.data.message === "Login successful") {

        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.customer.customerName)); 

        // localStorage.setItem("token", response.data.token); 
        // console.log("Token stored:", response.data.token);


        console.log(response.data)

        navigate("/"); 
      }
       else {
        setError("Invalid email or password.");
      }
    } 
    catch (error) {
      console.error("Login failed:", error);
      setError("Server error. Please try again later.");
    }
    finally {
      setLoading(false); 
    }
  }  

  return (
    <div className="bg-[#232323] flex py-16 items-center justify-center px-4 sm:px-6 lg:px-8 h-screen">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-[#333333] shadow-md rounded-md p-6">
          <img
            className="mx-auto h-12 w-auto"
            src="https://www.svgrepo.com/show/499664/user-happy.svg"
            alt="User Icon"
          />
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-white/80">
            Welcome back!
          </h2>

          <form className="space-y-6" onSubmit={login} method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80">
                Customer Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Show error message */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div className="flex w-full justify-center py-2 px-4 text-sm shadow-sm hover:bg-opacity-75">
              <Button2 text={loading ? "Logging in..." : "Log in"} onClick={login} />
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-white/80">
            Don’t have an account?{" "}
            <Link to="/register" className="font-medium text-red-600 hover:text-red-500">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
