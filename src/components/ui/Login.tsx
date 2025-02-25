import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Prevent flashing

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem("access_token");
    if (isAuthenticated) {
      navigate("/"); // Redirect if already logged in
    } else {
      setLoading(false); // Allow login form to show
    }
  }, [navigate]);
  if (loading) return null; // Wait until auth is checked

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(username, password);
      navigate("/"); // Redirect to the dashboard
    } catch (err) {
      setError("Invalid credentials!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
