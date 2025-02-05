import express,{Request,Response} from 'express'
import {videosRouter} from "./videos/controllers/video.controller";
const app = express()
const port = 3000


app.use(express.json())


app.get('/', (req:Request, res:Response) => {

    let helloWorLd = 'Hello  World!!';
    res.send(helloWorLd)
})

app.use('/videos',videosRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})