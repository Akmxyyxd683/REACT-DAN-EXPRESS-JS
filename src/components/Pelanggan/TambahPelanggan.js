import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahPelanggan = () => {
  const [PelangganID, setPelangganID] = useState("");
  const [NamaPelanggan, setNamaPelanggan] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [NomorTelepon, setNomorTelepon] = useState("");
  const navigate = useNavigate();

  const savePelanggan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/pelanggan", {
        PelangganID,
        NamaPelanggan,
        Alamat,
        NomorTelepon,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={savePelanggan}>
          <div className="field">
            <label className="label">PelangganID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={PelangganID}
                onChange={(e) => setPelangganID(e.target.value)}
                placeholder="ID"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NamaPelanggan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={NamaPelanggan}
                onChange={(e) => setNamaPelanggan(e.target.value)}
                placeholder="Nama Pelanggan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={Alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat anda"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NomorTelepon</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={NomorTelepon}
                onChange={(e) => setNomorTelepon(e.target.value)}
                placeholder="Nomor telepon anda"
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

export default TambahPelanggan;
