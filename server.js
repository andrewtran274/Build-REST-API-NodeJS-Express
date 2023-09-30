import express from "express";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;
const HOST = "localhost";

app.use(express.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, HOST, () => {
  console.log(`Server running ... http://${HOST}:${PORT}`);
});
