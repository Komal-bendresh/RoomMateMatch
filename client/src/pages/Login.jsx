import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import API from "../../api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form, {
        withCredentials: true,
      });
      login(res.data.user);
      console.log("successful");
      
     
    } catch (err) {
       console.error("❌ Login error:", err);  // Add this
    alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {["email", "password"].map((field) => (
        <input
          key={field}
          type={field === "password" ? "password" : "text"}
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
          className="block w-full mb-2 p-2 border"
          required
        />
      ))}
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Login</button>
    </form>
  );
};

export default Login;

