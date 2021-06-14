import express, { Express } from "express"
import routes from "./src/routers"


const app: Express = express()

const PORT: string | number = process.env.PORT || 5000

app.use(routes)
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});