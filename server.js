import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

console.log("ENV TESTE:", process.env.DATABASE_URL); // 👈 IMPORTANTE

import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


