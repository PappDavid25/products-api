import products from "../data/products.js";

export const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

export const getProductsById = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= products.length) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(products[id]);
};

export const createProducts = (req, res) => {
  const { name, category, price, available } = req.body;
  if (!name || !category || !price || available === undefined) {
    return res.status(400).json({ message: "Missing data" });
  }
  const newProducts = { name, category, price, available };
  products.push(newProducts);
  res.status(201).json(newProducts);
};

export const deleteProducts = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= products.length) {
    return res.status(404).json({ message: "Product not found" });
  }
  products.splice(id, 1);
  res.status(200).json({ message: "Delete successful" });
};
