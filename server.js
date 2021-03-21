const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extenedd: true }));
app.use(express.json());

//Serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
// app.use(routes);

//Connection to MONGO DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`🌎==> API server running on port: ${PORT}!`);
});
