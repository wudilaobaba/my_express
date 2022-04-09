import {Response, NextFunction} from "express";
const axios = require('axios')

async function axiosFun(url: string, type: string, body: any, res: Response, code: number,next: NextFunction) {
  try {
    const {data} = await axios[type](url, body)
    res.status(code).json(data)
  } catch (e) {
    next(e)
  }
}
module.exports = axiosFun