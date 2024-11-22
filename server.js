import express from "express";
import routes from "./src/routes/postRoutes.js";

const app = express();
app.use(express.static("upload"));
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
