const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const PORT = 8000;

const app = express();
app.use(morgan("tiny"));
app.use(helmet(""));
app.use(cors());

// endpoints here VVVVV
// app.get

app.listen(PORT, () => console.log(`listenning on port ${PORT}`));
