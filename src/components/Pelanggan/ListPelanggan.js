import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListPelanggan = () => {
  const [pelanggan, setPelanggan] = useState([]);

  useEffect(() => {
    getPelanggan();
  }, []);

  const getPelanggan = async () => {
    const response = await axios.get("http://localhost:5000/pelanggan");
    setPelanggan(response.data);
  };

  const deletePelanggan = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/pelanggan/${id}`);
      getPelanggan();
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
              <th>PelangganID</th>
              <th>NamaPelanggan</th>
              <th>Alamat</th>
              <th>NomorTelepon</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pelanggan.map((pelangganData) => (
              <tr key={pelangganData.PelangganID}>
                <td>{pelangganData.PelangganID}</td>
                <td>{pelangganData.NamaPelanggan}</td>
                <td>{pelangganData.Alamat}</td>
                <td>{pelangganData.NomorTelepon}</td>
                <td>
                  <Link
                    to={`edit/${pelangganData.PelangganID}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      const confirmDelete = window.confirm(
                        "Apakah Anda yakin ingin menghapus pelanggan ini?"
                      );
                      if (confirmDelete) {
                        deletePelanggan(pelangganData.PelangganID);
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

export default ListPelanggan;
