import 'dotenv/config';
import express from "express";
import router from "./routes/index";

const app = express();


app.use(router);

app.get('/', (req, res) => {
     res.status(200).send({
        status: 200,
        data: [
            {
                message:"WELCOME"
            }
        ]

    });
});

app.get('*', (req, res) => {
     res.status(404).send({
        status: 404,
        data: [
            {
                message:"Url does not exist"
            }
        ]

    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

export default app;