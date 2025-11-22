function run(__params){
  const challenges=[
    {title:'Organize um canto', action:'Arrume um pequeno espaço por 10 minutos.'},
    {title:'Oferta local', action:'Ofereça um serviço simples via WhatsApp para 5 contatos.'},
    {title:'Conexão humana', action:'Envie uma mensagem sincera de agradecimento.'}
  ];
  return {ok:true,challenge: challenges[Math.floor(Math.random()*challenges.length)]};
}
