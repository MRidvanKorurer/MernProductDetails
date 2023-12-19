const express = require("express");
const dotenv = require("dotenv");
const conn = require("./db/db");
const productRoute = require("./routes/product");
const cors = require("cors");


dotenv.config();

const app = express();
const port = process.env.PORT;

//* middlewares
app.use(express.json());
app.use(cors());


//* routing
app.use("/api/products", productRoute);


app.listen(port, () => {
    conn();
    console.log(`Application running on port: ${port}`);
})
