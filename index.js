import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Ruta raiz backend");
});

app.get("/test", (req, res) => {
  res.send("Ruta test");
});

// Errores
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.status);
});
