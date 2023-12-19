const Product = require("../models/product");

module.exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();

    res.status(200).json({
      status: "OK",
      product,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};




module.exports.getIdProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json({
      status: "OK",
      product,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};



module.exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, discount, image, colors, sizes } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      discount,
      image,
      colors,
      sizes,
    });

    res.status(201).json({
      status: "OK",
      product,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};



module.exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, discount, image, colors, sizes } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, price, discount, image, colors, sizes },
      { new: true }
    );

    res.status(200).json({
      status: "OK",
      product,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};



module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    res.status(200).json({
      status: "OK",
      product,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
