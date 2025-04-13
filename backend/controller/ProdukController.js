import Produk from "../models/produk.js";

export const getProduk = async (req, res) => {
  try {
    const response = await Produk.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProdukById = async (req, res) => {
  try {
    const response = await Produk.findOne({
      where: {
        ProdukID: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduk = async (req, res) => {
  try {
    await Produk.create(req.body);
    res.status(201).json({ msg: "Data telah dibuat" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduk = async (req, res) => {
  try {
    await Produk.update(req.body, {
      where: {
        ProdukID: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data telah diupdate" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduk = async (req, res) => {
  try {
    await Produk.destroy({
      where: {
        ProdukID: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data telah terhapus" });
  } catch (error) {
    console.log(error.message);
  }
};
