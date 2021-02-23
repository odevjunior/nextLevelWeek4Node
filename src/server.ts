import express, {Request, Response} from 'express'

const app = express()

app.get("/", (req:Request, res:Response) => {
    return res.json({msg:"hello word"})
})



app.listen(3333,  () => console.log("olá mundo"))