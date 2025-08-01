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

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {["name", "phoneNumber", "email", "dob", "password"].map((field) => (
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
  );
};

export default Register;
