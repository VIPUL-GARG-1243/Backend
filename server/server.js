const express = require("express");
const dotenv = require("dotenv");
const connectionDB = require("./config/dbConnection");
const userRoute = require("./routes/userRoute");
const app = express();

app.use(express.json());

dotenv.config({path: "./server/config.env"}); 
const PORT = process.env.PORT || 8000;

connectionDB();

app.use("/api/student", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})