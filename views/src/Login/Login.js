import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUserRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("role", "admin");
      setUserRole("admin");
      navigate("/");
    } else if (username === "penjual" && password === "penjual123") {
      localStorage.setItem("role", "penjualan");
      setUserRole("penjualan");
      navigate("/penjualan");
    } else if (username === "produk" && password === "produk123") {
      localStorage.setItem("role", "produk");
      setUserRole("produk");
      navigate("/produk");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
