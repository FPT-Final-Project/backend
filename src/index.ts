import express from "express";
import configs from "./configs";
import db from "./configs/mongoose"
const app = express();
const { PORT } = configs;

app.get("/", (req: any, res: any) => {
  res.send("The sedulous hyena ate the antelope!");
});
try {
  db.connect();
} catch (e) {
  console.log("could not connect");
}
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
