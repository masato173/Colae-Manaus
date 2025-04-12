const eventos = [
    {
      title: "Feira de Artesanato Indígena",
      date: "15/04/2025 - 10h",
      location: "Praça do Congresso",
      category: "exposicao",
      gratuito: true,
      description: "Produtos e oficinas com artistas indígenas.",
      link: ""
    },
    {
      title: "Show Boi Garantido",
      date: "13/04/2025 - 20h",
      location: "Sambódromo de Manaus",
      category: "show",
      gratuito: false,
      description: "Show cultural com toadas típicas do boi vermelho.",
      link: "https://exemplo.com/ingressos"
    },
    {
      title: "Cinema Amazônico ao Ar Livre",
      date: "18/04/2025 - 19h",
      location: "Parque Jefferson Péres",
      category: "gratuito",
      gratuito: true,
      description: "Exibição de filmes regionais gratuitamente.",
      link: ""
    }
  ];
  
  function exibirEventos(lista) {
    const container = document.getElementById("eventList");
    container.innerHTML = "";
  
    lista.forEach(e => {
      const card = document.createElement("div");
      card.className = "event-card";
  
      card.innerHTML = `
        <h3>${e.title}</h3>
        <p><strong><b>Data e Hora:</b></strong> ${e.date}</p>
        <p><strong><b>Local:</b></strong> ${e.location}</p>
        <p><strong><b>Descrição:</b></strong> ${e.description}</p>
        ${e.link ? `<p><a href="${e.link}" target="_blank">Comprar ingresso</a></p>` : ""}
        ${e.gratuito ? `<p><strong style="color: green;">Evento Gratuito</strong></p>` : ""}
      `;
  
      container.appendChild(card);
    });
  }
  
  function filtrar(tipo) {
    if (tipo === "todos") {
      exibirEventos(eventos);
    } else if (tipo === "gratuito") {
      const gratuitos = eventos.filter(e => e.gratuito);
      exibirEventos(gratuitos);
    } else {
      const filtrados = eventos.filter(e => e.category === tipo);
      exibirEventos(filtrados);
    }
  }
  
  // Inicializa
  exibirEventos(eventos);