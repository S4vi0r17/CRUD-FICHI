import express from "express";
import router from "./routes";

const app = express();

const PORT = 4000;

app.use(express.static("public"));

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false })); // Para que pueda leer los datos que vienen del formulario

app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
