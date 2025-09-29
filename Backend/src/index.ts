import express, { Request, Response } from "express";

const app = express();
const PORT = 3000; // podés cambiarlo si hace falta

// Middleware para poder recibir JSON en las peticiones
app.use(express.json());

// Ruta de prueba
app.get("/", (_req: Request, res: Response) => {
  res.send("Backend en marcha 🚀");
});

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
