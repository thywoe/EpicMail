import express from "express";
import router from "./Routes/index";

const app = express();

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

export default app;