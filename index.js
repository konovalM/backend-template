import express from "express";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/notification", (req, res) => {
  console.log(req.body)
  res.status(200).json("сервер работает");
});

app.listen(PORT, () => console.log("server started on port " + PORT));
