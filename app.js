import express from "express";
import productsRoutes from "./routes/productsroutes.js";

const app = express();

app.use(express.json());
app.use("/", productsRoutes);

app.listen(3000, () => {
  console.log("Servers runs on port 3000");
});
