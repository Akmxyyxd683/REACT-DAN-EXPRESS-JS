import Pelanggan from "../models/pelanggan.js";

export const getPelanggan = async (req, res) => {
  try {
    const response = await Pelanggan.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPelangganById = async (req, res) => {
  try {
    const response = await Pelanggan.findOne({
      where: {
        PelangganID: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPelanggan = async (req, res) => {
  try {
    await Pelanggan.create(req.body);
    res.status(201).json({ msg: "Data telah dibuat" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePelanggan = async (req, res) => {
  try {
    await Pelanggan.update(req.body, {
      where: {
        PelangganID: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data telah diupdate" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePelanggan = async (req, res) => {
  try {
    await Pelanggan.destroy({
      where: {
        PelangganID: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data telah terhapus" });
  } catch (error) {
    console.log(error.message);
  }
};
