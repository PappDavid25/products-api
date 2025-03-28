import express from "express";
import * as productsControllers from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/products", productsControllers.getAllProducts);
router.get("/products:id", productsControllers.getAllProducts);
router.post("/products", productsControllers.getAllProducts);
router.put("/products:id", productsControllers.getAllProducts);
router.delete("/products:id", productsControllers.getAllProducts);

export default router;
