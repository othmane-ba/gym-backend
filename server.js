const express = require("express");
const app = express();
const cors = require("cors");

var corsOptions = {
  origin: "https://gymreactapp.vercel.app"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Application is running !" });
});

require("./routes/routes.js")(app);

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Listening at port ${port}.`);
});