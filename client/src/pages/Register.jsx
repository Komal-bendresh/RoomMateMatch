// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "", phoneNumber: "", email: "", dob: "", password: ""
//   });
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/v2/auth/register", form, {
//         withCredentials: true,
//       });
//       login(res.data.user); // Store user in context + localStorage
//       console.log("registered");
      
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       {["name", "phoneNumber", "email", "dob", "password"].map((field) => (
//         <input
//           key={field}
//           type={field === "password" ? "password" : "text"}
//           name={field}
//           placeholder={field}
//           value={form[field]}
//           onChange={handleChange}
//           className="block w-full mb-2 p-2 border"
//           required
//         />
//       ))}
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
//     </form>
//   );
// };

// export default Register;

import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "", phoneNumber: "", email: "", dob: "", password: ""
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/v2/auth/register", form, {
        withCredentials: true,
      });
      login(res.data.user); // Store user in context + localStorage
      console.log("registered");
      
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  const getFieldLabel = (field) => {
    const labels = {
      name: "Full Name",
      phoneNumber: "Phone Number",
      email: "Email Address",
      dob: "Date of Birth",
      password: "Password"
    };
    return labels[field];
  };

  const getFieldType = (field) => {
    const types = {
      name: "text",
      phoneNumber: "tel",
      email: "email",
      dob: "date",
      password: "password"
    };
    return types[field];
  };

  const getFieldIcon = (field) => {
    const icons = {
      name: (
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      phoneNumber: (
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      email: (
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
      ),
      dob: (
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      password: (
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    };
    return icons[field];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600">Join us and start your journey today</p>
        </div>

        {/* Form Container */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm border border-gray-100"
        >
          <div className="space-y-6">
            {["name", "phoneNumber", "email", "dob", "password"].map((field) => (
              <div key={field} className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-blue-600">
                  {getFieldLabel(field)}
                </label>
                <div className="relative">
                  <input
                    type={getFieldType(field)}
                    name={field}
                    placeholder={`Enter your ${getFieldLabel(field).toLowerCase()}`}
                    value={form[field]}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-400 placeholder-gray-400 text-gray-800"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    {getFieldIcon(field)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            type="submit" 
            className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
          >
            Create Account
          </button>

          {/* Additional Footer Elements */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
                Sign in here
              </span>
            </p>
          </div>
        </form>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Your information is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;