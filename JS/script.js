// div onde estão inseridos os cards de serviço
const serviceCards = document.querySelector(".service__cards");

const service = [
  {
    imagem: "../img/icons-service/licitacao.png",
    title: "Participação em Licitações Públicas",
    description:
      " Atuamos em processos licitatórios para fornecimento de produtos e serviços diversos conforme o edital.",
  },
  {
    imagem: "../img/icons-service/gerenciamento-de-pastas.png",
    title: "Gestão de Documentação",
    description:
      "Organizamos e mantemos atualizada toda a documentação necessária para habilitação e participação em licitações.",
  },
  {
    imagem: "../img/icons-service/proposta-de-negocio.png",
    title: "Elaboração de Propostas e Orçamentos",
    description:
      "Desenvolvemos propostas técnicas e comerciais de acordo com os requisitos de cada edital.",
  },
  {
    imagem: "../img/icons-service/entregador.png",
    title: "Logística e Suporte Pós-Licitação",
    description:
      "Coordenamos a entrega dos produtos e oferecemos suporte administrativo e técnico após a licitação.",
  },
];

// Automatizando a criação dos cards de serviço
service.forEach((produto) => {
  const card = document.createElement("div");
  card.classList.add("card__service");

  card.innerHTML = `
        <img 
            class="service__img"
            src="${produto.imagem}"
            alt=""
            />
            <h3 class="card__title">${produto.title}</h3>
            <p class="service__description">
                ${produto.description}
            </p>
            <a href="" class="btn__contato">Faça um orçamento</a>
    `;

  serviceCards.appendChild(card);
});
