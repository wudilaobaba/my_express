import {NextFunction,Request,Response} from "express";
const morgan  = require('morgan')
const cookieParser = require('cookie-parser')
const express = require('express')
const router = require('./router')
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())
app.use('/todos', router);
app.use(morgan('tiny'))
app.use((req: Request, res: Response)=>{
  res.status(404).json({message:"404"})
})
/**
 * 四个参数缺一不可
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({message: "请求失败"})
})
app.listen(2341, () => console.log("server started!"))