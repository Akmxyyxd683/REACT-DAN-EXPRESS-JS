import Penjualan from "../models/penjualan.js";

export const getPenjualan = async (req, res) => {
  try {
    const response = await Penjualan.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPenjualanById = async (req, res) => {
  try {
    const response = await Penjualan.findOne({
      where: {
        PenjualanID: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPenjualan = async (req, res) => {
  try {
    await Penjualan.create(req.body);
    res.status(201).json({ msg: "Data telah dibuat" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePenjualan = async (req, res) => {
  try {
    await Penjualan.update(req.body, {
      where: {
        PenjualanID: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data telah diupdate" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePenjualan = async (req, res) => {
  try {
    await Penjualan.destroy({
      where: {
        PenjualanID: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data telah terhapus" });
  } catch (error) {
    console.log(error.message);
  }
};
