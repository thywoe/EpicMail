import 'dotenv/config';
import express from "express";
import router from "./routes/index";

const app = express();


app.use(router);

app.get('/', (req, res) => {
    return res.status(200).json({
        status: 200,
        data: [
            {
                message:"WELCOME"
            }
        ]

    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

export default app;