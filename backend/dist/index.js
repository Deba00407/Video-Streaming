import express from "express";
import cors from "cors";
const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}));
app.get("/", (_, res) => {
    res.status(200).send({
        message: "Welcome to the website!!"
    });
});
app.listen(5000, () => console.log("Server running"));
