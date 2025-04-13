import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahPenjualan = () => {
  const [PenjualanID, setPenjualanID] = useState("");
  const [TanggalPenjualan, setTanggalPenjualan] = useState("");
  const [TotalHarga, setTotalHarga] = useState("");
  const [PelangganID, setPelangganID] = useState("");
  const navigate = useNavigate();

  const savePenjualan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/penjualan", {
        PenjualanID,
        TanggalPenjualan,
        TotalHarga,
        PelangganID,
      });
      navigate("/penjualan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={savePenjualan}>
          <div className="field">
            <label className="label">PenjualanID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={PenjualanID}
                onChange={(e) => setPenjualanID(e.target.value)}
                placeholder="ID"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">TanggalPenjualan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={TanggalPenjualan}
                onChange={(e) => setTanggalPenjualan(e.target.value)}
                placeholder="Tanggal Penjualan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">TotalHarga</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={TotalHarga}
                onChange={(e) => setTotalHarga(e.target.value)}
                placeholder="Total harga"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">PelangganID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={PelangganID}
                onChange={(e) => setPelangganID(e.target.value)}
                placeholder="ID Pelanggan"
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

export default TambahPenjualan;
