function run(__params){
  const now = new Date().toISOString();
  const body = "Alongamento leve por 3 minutos; beba água; mantenha postura por 2 minutos.";
  const mind = "Liste 1 tarefa pequena que realmente importa hoje.";
  const spirit = "Reserve 1 minuto de gratidão e oração, conecte-se com o que te sustenta.";
  const discovery = "Aprenda sobre um alimento ou lugar novo por 3 minutos.";
  const finance = "Revise uma despesa pequena e pense em 1 ação para melhorar sua renda.";
  return {ok:true, date:now, guidance:{body,mind,spirit,discovery,finance}};
}
