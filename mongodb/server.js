import express from "express";
const app = express();
import cors from "cors";
import routes from "./routes.js";

const port = 5000;
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
