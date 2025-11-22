const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const { Low, JSONFile } = require('lowdb');
const { nanoid } = require('nanoid');

const app = express();
app.use(helmet()); app.use(bodyParser.json());

const DATA = path.join(__dirname,'../data/db.json');
const adapter = new JSONFile(DATA);
const db = new Low(adapter);

async function init(){
  await db.read();
  db.data = db.data || { modules: [], users: [] };
  // load packaged modules
  const mdir = path.join(__dirname,'../modules');
  if(fs.existsSync(mdir) && db.data.modules.length===0){
    const files = fs.readdirSync(mdir).filter(f=>f.endsWith('.js'));
    for(const f of files){
      const code = fs.readFileSync(path.join(mdir,f),'utf8');
      db.data.modules.push({ id: 'm-'+f.replace('.js',''), name: f.replace('.js',''), code, created_at: new Date().toISOString() });
    }
    await db.write();
  }
}
init();

app.get('/health',(req,res)=>res.json({ok:true}));

app.get('/modules', async (req,res)=>{ await db.read(); res.json(db.data.modules.map(m=>({id:m.id,name:m.name,created_at:m.created_at}))); });

app.post('/modules', async (req,res)=>{ const {name,code}=req.body; if(!name||!code) return res.status(400).json({error:'name+code'}); await db.read(); if(db.data.modules.find(x=>x.name===name)) return res.status(400).json({error:'exists'}); const id='m-'+nanoid(8); db.data.modules.unshift({id,name,code,created_at:new Date().toISOString()}); await db.write(); res.json({ok:true,id}); });

app.get('/run/:name', async (req,res)=>{ const name=req.params.name; await db.read(); const row = db.data.modules.find(m=>m.name===name); if(!row) return res.status(404).json({error:'not found'}); try{ const func = new Function('__params', row.code + '\n return typeof run === "function" ? run(__params) : {error:"no run"};'); const out = func(req.query||{}); res.json({ok:true,result:out}); }catch(e){ res.status(500).json({error:String(e)}); } });

// simple user register for pilot
app.post('/users/register', async (req,res)=>{ const {name,email} = req.body; if(!name) return res.status(400).json({error:'name'}); await db.read(); const id='u-'+nanoid(8); db.data.users.unshift({id,name,email:email||'',created_at:new Date().toISOString()}); await db.write(); res.json({ok:true,id}); });

const PORT = process.env.PORT || 4002; app.listen(PORT, ()=>console.log('modules-service on',PORT));
