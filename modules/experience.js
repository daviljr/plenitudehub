function run(__params){
  const list=[
    {title:'Receita: Bowl saudável', action:'Experimente uma receita simples com proteína e veg.'},
    {title:'Ritual de silêncio', action:'Fique 3 minutos em silêncio e observe sua respiração.'},
    {title:'Prática de leve movimento', action:'Faça 2 séries de 20 agachamentos leves.'}
  ];
  return {ok:true,experience: list[Math.floor(Math.random()*list.length)]};
}
