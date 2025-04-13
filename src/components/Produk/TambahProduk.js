import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tambahproduk = () => {
  const [ProdukID, setProdukID] = useState("");
  const [NamaProduk, setNamaProduk] = useState("");
  const [Harga, setHarga] = useState("");
  const [Stok, setStok] = useState("");
  const navigate = useNavigate();

  const saveProduk = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/produk", {
        ProdukID,
        NamaProduk,
        Harga,
        Stok,
      });
      navigate("/produk");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveProduk}>
          <div className="field">
            <label className="label">ProdukID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={ProdukID}
                onChange={(e) => setProdukID(e.target.value)}
                placeholder="ID"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NamaProduk</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={NamaProduk}
                onChange={(e) => setNamaProduk(e.target.value)}
                placeholder="Nama Produk"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Harga}
                onChange={(e) => setHarga(e.target.value)}
                placeholder="Harga"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Stok</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Stok}
                onChange={(e) => setStok(e.target.value)}
                placeholder="Stok"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Tambah sekarang!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tambahproduk;
