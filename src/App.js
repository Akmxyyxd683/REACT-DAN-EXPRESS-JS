import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login/Login.js";
import ListPelanggan from "./components/Pelanggan/ListPelanggan";
import TambahPelanggan from "./components/Pelanggan/TambahPelanggan";
import EditPelanggan from "./components/Pelanggan/EditPelanggan";
import ListProduk from "./components/Produk/ListProduk";
import TambahProduk from "./components/Produk/TambahProduk";
import EditProduk from "./components/Produk/EditProduk";
import ListPenjualan from "./components/Penjualan/ListPenjualan";
import TambahPenjualan from "./components/Penjualan/TambahPenjualan";
import EditPenjualan from "./components/Penjualan/EditPenjualan";

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role) setUserRole(role);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />

        <Route
          path="/"
          element={userRole ? <ListPelanggan /> : <Navigate to="/login" />}
        />
        <Route
          path="/tambah"
          element={userRole ? <TambahPelanggan /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit/:id"
          element={userRole ? <EditPelanggan /> : <Navigate to="/login" />}
        />

        <Route
          path="/produk"
          element={userRole ? <ListProduk /> : <Navigate to="/login" />}
        />
        <Route
          path="/produk/tambah"
          element={userRole ? <TambahProduk /> : <Navigate to="/login" />}
        />
        <Route
          path="/produk/edit/:id"
          element={userRole ? <EditProduk /> : <Navigate to="/login" />}
        />

        <Route
          path="/penjualan"
          element={userRole ? <ListPenjualan /> : <Navigate to="/login" />}
        />
        <Route
          path="/penjualan/tambah"
          element={userRole ? <TambahPenjualan /> : <Navigate to="/login" />}
        />
        <Route
          path="/penjualan/edit/:id"
          element={userRole ? <EditPenjualan /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
