import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button2 from "../shared/Button2";
import axios from "axios";

const RegisterPage = () => {
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');
  const [email, setEmail] = useState('');
  const [CNIC, setCNIC] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Register function
  async function register() {
    if (password === cpassword) {
      const newCustomer = {
        customerName,
        contactNumber,
        emergencyNumber,
        CNIC,
        email,
        password,
      };

      try {
        setLoading(true);
        const response = await axios.post("http://localhost:3001/addCustomer", newCustomer);
        console.log(response.data); 
        alert("Registration successful!");
      } catch (error) {
        console.error("Error registering customer:", error);
        setError('An error occurred during registration.');
      } finally {
        setLoading(false);
      }
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <div>
      <div className="bg-[#232323] flex py-12 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl space-y-8">
          <div className="bg-[#333333] shadow-md rounded-md p-6">
            <img
              className="mx-auto h-12 w-auto"
              src="https://www.svgrepo.com/show/499664/user-happy.svg"
              alt="User Icon"
            />
            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-white/80">
              Register as a New Customer
            </h2>
            <form className="space-y-6" method="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="customerName" className="block text-sm font-medium text-white/80">
                    Customer Name
                  </label>
                  <input
                    name="customerName"
                    type="text"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-white/80">
                    Contact Number
                  </label>
                  <input
                    name="contactNumber"
                    type="number"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="emergencyNumber" className="block text-sm font-medium text-white/80">
                    Emergency Contact Number
                  </label>
                  <input
                    name="emergencyNumber"
                    type="number"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm"
                    value={emergencyNumber}
                    onChange={(e) => setEmergencyNumber(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="CNIC" className="block text-sm font-medium text-white/80">
                    CNIC
                  </label>
                  <input
                    name="CNIC"
                    type="number"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm"
                    value={CNIC}
                    onChange={(e) => setCNIC(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
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
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="confirm_password" className="block text-sm font-medium text-white/80">
                    Confirm Password
                  </label>
                  <input
                    name="confirm_password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm"
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                </div>
              </div>

              {error && <p className="text-red-600">{error}</p>}

              <div className="flex w-full justify-center py-2 px-4 text-sm shadow-sm hover:bg-opacity-75">
                <Button2 text={loading ? "Registering..." : "Register Account"} onClick={register} />
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-white/80">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-red-600 hover:text-red-500">
                Log in here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
