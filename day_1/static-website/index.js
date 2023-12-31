const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
