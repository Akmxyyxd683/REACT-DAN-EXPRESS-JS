import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListProduk = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    getProduk();
  }, []);

  const getProduk = async () => {
    const response = await axios.get("http://localhost:5000/produk");
    setProduk(response.data);
  };

  const deleteProduk = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/produk/${id}`);
      getProduk();
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
              <th>ProdukID</th>
              <th>NamaProduk</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {produk.map((produkData) => (
              <tr key={produkData.ProdukID}>
                <td>{produkData.ProdukID}</td>
                <td>{produkData.NamaProduk}</td>
                <td>{produkData.Harga}</td>
                <td>{produkData.Stok}</td>
                <td>
                  <Link
                    to={`edit/${produkData.ProdukID}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      const confirmDelete = window.confirm(
                        "Apakah Anda yakin ingin menghapus produk ini?"
                      );
                      if (confirmDelete) {
                        deleteProduk(produkData.ProdukID);
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

export default ListProduk;
