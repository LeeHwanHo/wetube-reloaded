import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

function home(req,res) {
    return res.send("Hello!")
}

function login(req,res) {
    return res.send("I'm login")
}

app.use(logger);
app.get("/",home);
app.get("/login",login);

const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} ( •̀ ω •́ )y`);

app.listen(PORT,handleListening);