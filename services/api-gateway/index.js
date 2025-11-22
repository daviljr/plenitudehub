const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
app.use(helmet()); app.use(cors()); app.use(express.json());

const MODULES = process.env.MODULES_URL || 'http://localhost:4002';
const AUTH = process.env.AUTH_URL || 'http://localhost:4000';

app.get('/health', (req,res)=>res.json({ok:true, ts:new Date().toISOString()}));
app.use('/modules', createProxyMiddleware({ target: MODULES, changeOrigin:true, pathRewrite:{'^/modules':''} }));
app.use('/auth', createProxyMiddleware({ target: AUTH, changeOrigin:true, pathRewrite:{'^/auth':''} }));

app.get('/', (req,res)=> res.send('PlenitudeHub API Gateway running.'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('API Gateway on', PORT));
