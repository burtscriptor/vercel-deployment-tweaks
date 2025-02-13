const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (request, response)=> {
    response.send("Hello, Express with CORS!");
});

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
});
