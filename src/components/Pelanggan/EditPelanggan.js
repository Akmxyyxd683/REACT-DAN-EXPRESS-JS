import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPelanggan = () => {
  const [PelangganID, setPelangganID] = useState("");
  const [NamaPelanggan, setNamaPelanggan] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [NomorTelepon, setNomorTelepon] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPelangganById();
  }, [id]);

  const updatePelanggan = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/pelanggan/${id}`, {
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

  const getPelangganById = async () => {
    const response = await axios.get(`http://localhost:5000/pelanggan/${id}`);
    setPelangganID(response.data.PelangganID);
    setNamaPelanggan(response.data.NamaPelanggan);
    setAlamat(response.data.Alamat);
    setNomorTelepon(response.data.NomorTelepon);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatePelanggan}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPelanggan;
