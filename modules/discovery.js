function run(__params){
  const items=[
    {title:'Quinoa - alimento nutritivo', desc:'Origem, preparo e benefícios.'},
    {title:'Caminhada matinal curta', desc:'Como 10 minutos aumentam energia.'},
    {title:'Técnica Pomodoro curto', desc:'Foque 25 minutos e descanse 5.'}
  ];
  return {ok:true,item: items[Math.floor(Math.random()*items.length)]};
}
