import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListPenjualan = () => {
  const [penjualan, setPenjualan] = useState([]);

  useEffect(() => {
    getPenjualan();
  }, []);

  const getPenjualan = async () => {
    const response = await axios.get("http://localhost:5000/penjualan");
    setPenjualan(response.data);
  };

  const deletePenjualan = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/penjualan/${id}`);
      getPenjualan();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`tambah`} className="button is-success">
          Tambah baru
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>PenjualanID</th>
              <th>TanggalPenjualan</th>
              <th>TotalHarga</th>
              <th>PelangganID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {penjualan.map((penjualanData) => (
              <tr key={penjualanData.PenjualanID}>
                <td>{penjualanData.PenjualanID}</td>
                <td>{penjualanData.TanggalPenjualan}</td>
                <td>{penjualanData.TotalHarga}</td>
                <td>{penjualanData.PelangganID}</td>
                <td>
                  <Link
                    to={`edit/${penjualanData.PenjualanID}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      const confirmDelete = window.confirm(
                        "Apakah Anda yakin ingin menghapus penjualan ini?"
                      );
                      if (confirmDelete) {
                        deletePenjualan(penjualanData.PenjualanID);
                      }
                    }}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPenjualan;
