import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
// userRoutes(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Errores
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.status);
});
