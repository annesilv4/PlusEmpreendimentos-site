// --------------------------------------- CRIAÇÃO DE CARDS ---------------------------------------

// CARDS DE SERVIÇO
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
            <a href="#" class="btn__contato">Faça um orçamento</a>
    `;

  serviceCards.appendChild(card);
});

// CARDS DE FORNECIMENTO
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
      <a href="#" class="fornecimento__btn"
        >Entrar em contato para fornecimento</a
      >
  `;

  fornecimentoCards.appendChild(card);
});

// --------------------------------------- FUNÇÃO PARA EVENTOS ---------------------------------------

const campoAssunto = document.getElementById("assunto");

const btnMap = new Map();

function adicionarEventCard(btn, cardSelector, titleSelector) {
  const card = btn.closest(cardSelector);
  const title = card.querySelector(titleSelector).textContent;

  btnMap.set(title, btn);

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (btn.disabled) return;

    if (campoAssunto.value) {
      campoAssunto.value += ", " + title;
    } else {
      campoAssunto.value = title;
    }

    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

    campoAssunto.focus();

    btn.disabled = true;
    btn.classList.add("btn--disabled");
  });
}

campoAssunto.addEventListener("input", () => {
  // Pegar todos os títulos do campo
  const valores = campoAssunto.value.split(",").map((v) => v.trim());

  // Para cada título registrado, habilitar/desabilitar o botão
  btnMap.forEach((btn, titulo) => {
    if (valores.includes(titulo)) {
      btn.disabled = true;
      btn.classList.add("btn--disabled");
    } else {
      btn.disabled = false;
      btn.classList.remove("btn--disabled");
    }
  });
});

// --------------------------------------- ADICIONANDO EVENTO NOS BOTÕES ---------------------------------------

// SERVIÇOS
document
  .querySelectorAll(".btn__contato")
  .forEach((btn) => adicionarEventCard(btn, ".card__service", ".card__title"));

// FORNECIMENTO
document
  .querySelectorAll(".fornecimento__btn")
  .forEach((btn) =>
    adicionarEventCard(btn, ".card__fornecimento", ".fornecimento__title--item")
  );

// --------------------------------------------------------------------------------------------------------------

// --------------------------------------- FORMATANDO A MENSAGEM DE ENTRAR EM CONTATO ---------------------------------------

const btnEnviar = document.getElementById("btn__submit");

btnEnviar.addEventListener("click", () => {
  // PEGANDO VALORES DOS INPUTS, TEXTAREA E SELECT
  const cliente = document.getElementById("nome").value.trim();
  const assunto = document.getElementById("assunto").value.trim();
  const message = document.getElementById("mensagem").value.trim();
  const destino = document.getElementById("destinatario").value;

  // FORMATANDO A MENSAGEM
  const mensagem = `
  Entrando em contato através do site!

  Cliente: ${cliente}
  Assunto: ${assunto}
  Descrição: ${message}
  `;

  // Abrir WhatsApp Web com a mensagem
  window.open(
    `https://wa.me/${destino}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
});

const menuBtn = document.querySelector(".header__menu_hamburguer");
const nav = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");
const menuClose = document.querySelector(".menu__close i");

menuBtn.addEventListener("click", () => {
  nav.classList.add("nav--active");
  overlay.style.display = "flex";
  menuBtn.style.display = "none";
});

overlay.addEventListener("click", closeMenu);
menuClose.addEventListener("click", closeMenu);

function closeMenu() {
  nav.classList.remove("nav--active");
  overlay.style.display = "none";
  menuBtn.style.display = "flex";
}

// 👇 Este trecho resolve seu problema
window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    // limpa qualquer estilo inline aplicado pelo JS
    menuBtn.style.display = "";
    overlay.style.display = "";
    nav.classList.remove("nav--active");
  }
});
