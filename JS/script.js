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
service.forEach((services) => {
  const card = document.createElement("div");
  card.classList.add("card__service");

  card.innerHTML = `
        <img 
            class="service__img"
            src="${services.imagem}"
            alt=""
            />
            <h3 class="card__title">${services.title}</h3>
            <p class="service__description">
                ${services.description}
            </p>
            <a href="" class="btn__contato">Faça um orçamento</a>
    `;

  serviceCards.appendChild(card);
});

// ----------------------------------------------------------------------------------------------------------------------------

const fornecimentoCards = document.querySelector(".fornecimento__cards");

const fornecimento = [
  {
    imagem: "../img/icons-fornecimento/escritorio.png",
    title: "Materiais de Expediente",
    description:
      "Papelaria, impressoras, suprimentos de escritório e itens administrativos.",
  },
  {
    imagem: "../img/icons-fornecimento/ferramentas-de-limpeza.png",
    title: "Materiais de Limpeza",
    description:
      "Produtos de limpeza e higienização adquiridos conforme solicitação.",
  },
  {
    imagem: "../img/icons-fornecimento/computador.png",
    title: "Equipamentos de Informática",
    description:
      "Computadores, impressoras, periféricos e suprimentos sob demanda.",
  },
  {
    imagem: "../img/icons-fornecimento/tanque-de-oxigenio.png",
    title: "Tanque de Oxigênio",
    description: " Fornecimento sob demanda de galões de oxigênio.",
  },
  {
    imagem: "../img/icons-fornecimento/tijolo.png",
    title: "Materiais de Construção (Pré-moldados)",
    description:
      "Fornecimento sob demanda de materiais de construção e peças pré-moldadas de concreto para obras e infraestrutura.",
  },
  {
    imagem: "../img/icons-fornecimento/entrega-de-alimentos.png",
    title: "Gêneros Alimentícios",
    description:
      "Aquisição e fornecimento sob demanda de gêneros alimentícios, incluindo carnes, arroz, feijão, hortifrutigranjeiros e polpas de frutas.",
  },
];

fornecimento.forEach((fornecimentos) => {
  const card = document.createElement("div");
  card.classList.add("card__fornecimento");

  card.innerHTML = `
    <img
        src="${fornecimentos.imagem}"
        alt=""
        class="fornecimento__img"
      />
      <h3 class="fornecimento__title--item">${fornecimentos.title}</h3>
      <p class="fornecimento__description">
        ${fornecimentos.description}
      </p>
      <a href="" class="fornecimento__btn"
        >Entrar em contato para fornecimento</a
      >
  `;

  fornecimentoCards.appendChild(card);
});
