const express = require('express')
import {Request, Response, NextFunction} from 'express'

// 创建路由实例,
const router = express.Router()

// 配置路由
const axiosFun = require('./util');
const API = 'http://localhost:9898/users';
router.get('/', async (req: Request, res: Response, next:NextFunction) => await axiosFun(API, 'get', null, res, 200, next))
router.get('/:id', async (req: Request, res: Response, next:NextFunction) => await axiosFun(`${API}/${req.params.id}`, 'get', null, res, 200, next))
router.post('/', async (req: Request, res: Response, next:NextFunction) => await axiosFun(API, 'post', req.body, res, 200, next))
router.patch('/:id', async (req: Request, res: Response, next:NextFunction) => await axiosFun(`${API}/${req.params.id}`, 'patch', req.body, res, 200, next))
router.delete('/:id', async (req: Request, res: Response, next:NextFunction) => await axiosFun(`${API}/${req.params.id}`, 'delete', null, res, 200, next))


// 导出路由实例
module.exports = router