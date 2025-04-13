import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPenjualan = () => {
  const [PenjualanID, setPenjualanID] = useState("");
  const [TanggalPenjualan, setTanggalPenjualan] = useState("");
  const [TotalHarga, setTotalHarga] = useState("");
  const [PelangganID, setPelangganID] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPenjualanById();
  }, [id]);

  const updatePenjualan = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/penjualan/${id}`, {
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

  const getPenjualanById = async () => {
    const response = await axios.get(`http://localhost:5000/penjualan/${id}`);
    setPenjualanID(response.data.PenjualanID);
    setTanggalPenjualan(response.data.TanggalPenjualan);
    setTotalHarga(response.data.TotalHarga);
    setPelangganID(response.data.PelangganID);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatePenjualan}>
          <div className="field">
            <label className="label">PenjualanID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={PelangganID}
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
                placeholder="Pelanggan ID"
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

export default EditPenjualan;
