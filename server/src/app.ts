import express, { NextFunction, Request, urlencoded } from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"
import userRouter from "./routes/user.router"
import anomalyRouter from "./routes/anomaly.router"




dotenv.config()

const app = express()

app.use(cookieParser())
app.use(urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


//User Endpoints
app.use('/api/v1/user',userRouter)
app.use('/api/v1/anomaly',anomalyRouter)


app.get("/",(req:any,res:any)=>{
    res.send("Hello World")
})


// Error Handler
app.use((err:any,req:Request ,res: any ,next:NextFunction)=>{

    const statusCode = err.statusCode || 500 
    const message    = err.message    || "Something went wrong"
    const error      = err            

    return res.status(statusCode).json({
        statusCode,
        message,
        error
    })
    
})


export default app 