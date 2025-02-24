// 1. Import Server
import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/features/product/product.routes.js";

// 2. Create Server
const server = express();

server.use(bodyParser.json());

// For all requests related to product, redirect to product routes
// localhost:3000/api/products
server.use("/api/products", productRouter);

// 3. Default Request Handler
server.get("/", (req, res) => {
  res.send("Welcome to E-commerce API");
});

// 4. Speicify port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
