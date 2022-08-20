import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} ( •̀ ω •́ )y`);

app.listen(PORT,handleListening);