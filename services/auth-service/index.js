const express=require('express'); const bodyParser=require('body-parser'); const helmet=require('helmet');
const app=express(); app.use(helmet()); app.use(bodyParser.json());
app.get('/health',(req,res)=>res.json({ok:true}));
app.post('/login',(req,res)=>{ const {email,password}=req.body; if(!email) return res.status(400).json({error:'email'}); res.json({ok:true, token:'pilot-token'}); });
const PORT=process.env.PORT||4000; app.listen(PORT, ()=>console.log('auth-service on',PORT));
