import 'dotenv/config';
import express from "express";
import router from "./Routes/index";

const app = express();

console.log(process.env.SECRET);

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

export default app;