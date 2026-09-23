/* ==========================================================================
   CONFIGURAÇÃO CENTRALIZADA — ARTE FINAL | PISOS DE MADEIRA
   --------------------------------------------------------------------------
   Altere aqui as informações da empresa em um único lugar.
   Sempre que precisar atualizar dados (WhatsApp, endereço, horário, etc.),
   edite este arquivo.
   ========================================================================== */

const CONFIG = {

  /* Nome e identidade ---------------------------------------------------- */
  empresa: "Arte Final",
  logoNome: "Arte Final",
  subtitulo: "Pisos de Madeira",
  tagline: "Pisos de Madeira",
  slogan: "A beleza da madeira em cada detalhe. Instalação, restauração e acabamento de pisos com precisão e elegância.",

  /* Contato -------------------------------------------------------------- */
  whatsapp: "",                // Formato: 55 + DDD + número (somente dígitos). Ex.: 5541999999999
  telefone: "[INSERIR TELEFONE]",       // Ex.: (41) 99999-9999
  email: "[INSERIR E-MAIL]",           // Ex.: contato@artefinalpisos.com.br

  /* Localização ---------------------------------------------------------- */
  cidade: "[INSERIR CIDADE]",                 // Ex.: Curitiba
  endereco: "[INSERIR ENDEREÇO]",            // Ex.: Rua Exemplo, 123 - Bairro
  atendimento: "[INSERIR ÁREA DE ATENDIMENTO]", // Ex.: Curitiba e região

  /* Funcionamento -------------------------------------------------------- */
  horario: "[INSERIR HORÁRIO]", // horário completo (seção Onde atendemos)
  horarioResumo: "[INSERIR HORÁRIO]", // horário resumido (badge do Hero)

  /* Redes Sociais -------------------------------------------------------- */
  instagram: "",
  facebook: "",

  /* Mensagens do WhatsApp ------------------------------------------------ */
  mensagemPadrao:
    "Olá! Gostaria de solicitar um orçamento para serviço de pisos de madeira.",

  mensagemInstalacao:
    "Olá! Gostaria de solicitar um orçamento para instalação de piso de madeira.",

  mensagemRestauracao:
    "Olá! Gostaria de solicitar um orçamento para restauração de piso de madeira.",

  mensagemAcabamento:
    "Olá! Gostaria de solicitar um orçamento para acabamento de piso de madeira."
};

/* ==========================================================================
   PORTFÓLIO — PROJETOS REALIZADOS
   --------------------------------------------------------------------------
   Para adicionar/alterar um projeto, edite um item abaixo.
   - tag: categoria exibida no cartão
   - titulo: nome do projeto
   - descricao: resumo curto
   - imagem: foto principal (capa)
   - imagens: lista de fotos da galeria lightbox
   - categoria: filtro (Residencial / Comercial / Restauração / Instalação)
   ========================================================================== */

const PORTFOLIO = [
  // Fotos reais de projetos. O lightbox abre na ordem listada em "imagens".
  {
    tag: "Residencial",
    titulo: "Residência em Madeira",
    descricao: "Instalação de piso de madeira em sala integrada. [INSERIR INFORMAÇÃO]",
    imagem: "assets/images/portfolio/projeto-01-residencial/re1.png",
    imagens: [
      "assets/images/portfolio/projeto-01-residencial/re1.png",
      "assets/images/portfolio/projeto-01-residencial/re2.jpg",
      "assets/images/portfolio/projeto-01-residencial/re3.png",
      "assets/images/portfolio/projeto-01-residencial/re4.png",
      "assets/images/portfolio/projeto-01-residencial/re5.png",
      "assets/images/portfolio/projeto-01-residencial/re6.jpg",
      "assets/images/portfolio/projeto-01-residencial/re7.jpg",
      "assets/images/portfolio/projeto-01-residencial/re8.jpg",
      "assets/images/portfolio/projeto-01-residencial/re9.jpg",
      "assets/images/portfolio/projeto-01-residencial/re10.jpg",
      "assets/images/portfolio/projeto-01-residencial/re11.jpg",
      "assets/images/portfolio/projeto-01-residencial/re12.jpg",
      "assets/images/portfolio/projeto-01-residencial/re13.png",
      "assets/images/portfolio/projeto-01-residencial/re14.png",
      "assets/images/portfolio/projeto-01-residencial/re15.png",
      "assets/images/portfolio/projeto-01-residencial/re16.png",
      "assets/images/portfolio/projeto-01-residencial/re17.png",
      "assets/images/portfolio/projeto-01-residencial/re18.png",
      "assets/images/portfolio/projeto-01-residencial/re19.png",
      "assets/images/portfolio/projeto-01-residencial/re20.png",
      "assets/images/portfolio/projeto-01-residencial/re21.png",
      "assets/images/portfolio/projeto-01-residencial/re22.png",
      "assets/images/portfolio/projeto-01-residencial/re23.jpg",
      "assets/images/portfolio/projeto-01-residencial/re24.jpg",
      "assets/images/portfolio/projeto-01-residencial/re25.jpg",
      "assets/images/portfolio/projeto-01-residencial/re26.png",
      "assets/images/portfolio/projeto-01-residencial/re27.png",
      "assets/images/portfolio/projeto-01-residencial/re28.png",
      "assets/images/portfolio/projeto-01-residencial/re29.png",
      "assets/images/portfolio/projeto-01-residencial/re30.png",
      "assets/images/portfolio/projeto-01-residencial/re31.png"
    ],
    categoria: "Residencial"
  },
  {
    tag: "Comercial",
    titulo: "Espaço Comercial",
    descricao: "Revestimento de madeira em ambiente de uso comercial. [INSERIR INFORMAÇÃO]",
    imagem: "assets/images/portfolio/projeto-02-comercial/com-01.png",
    imagens: [
      "assets/images/portfolio/projeto-02-comercial/com-01.png",
      "assets/images/portfolio/projeto-02-comercial/com-02.png",
      "assets/images/portfolio/projeto-02-comercial/com-03.png",
      "assets/images/portfolio/projeto-02-comercial/com-04.png",
      "assets/images/portfolio/projeto-02-comercial/com-05.png",
      "assets/images/portfolio/projeto-02-comercial/com-06.png",
      "assets/images/portfolio/projeto-02-comercial/com-07.png",
      "assets/images/portfolio/projeto-02-comercial/com-08.png",
      "assets/images/portfolio/projeto-02-comercial/com-09.png",
      "assets/images/portfolio/projeto-02-comercial/com10.png",
      "assets/images/portfolio/projeto-02-comercial/com11.png",
      "assets/images/portfolio/projeto-02-comercial/com12.png",
      "assets/images/portfolio/projeto-02-comercial/com13.png",
      "assets/images/portfolio/projeto-02-comercial/com14.png",
      "assets/images/portfolio/projeto-02-comercial/com15.png",
      "assets/images/portfolio/projeto-02-comercial/com16.png",
      "assets/images/portfolio/projeto-02-comercial/com17.png",
      "assets/images/portfolio/projeto-02-comercial/com18.jpg"
    ],
    categoria: "Comercial"
  },
  {
    tag: "Restauração",
    titulo: "Restauração de Piso Antigo",
    descricao: "Recuperação de assoalho antigo com lixamento e novo acabamento. [INSERIR INFORMAÇÃO]",
    imagem: "assets/images/portfolio/projeto-03-restauração/rest-01.png",
    imagens: [
      "assets/images/portfolio/projeto-03-restauração/rest-01.png",
      "assets/images/portfolio/projeto-03-restauração/rest-02.png",
      "assets/images/portfolio/projeto-03-restauração/rest-04.png",
      "assets/images/portfolio/projeto-03-restauração/rest-05.png",
      "assets/images/portfolio/projeto-03-restauração/rest-06.png",
      "assets/images/portfolio/projeto-03-restauração/rest-07.png",
      "assets/images/portfolio/projeto-03-restauração/rest-08.png",
      "assets/images/portfolio/projeto-03-restauração/rest-09.png",
      "assets/images/portfolio/projeto-03-restauração/rest-10.png",
      "assets/images/portfolio/projeto-03-restauração/rest-11.png",
      "assets/images/portfolio/projeto-03-restauração/rest-12.png",
      "assets/images/portfolio/projeto-03-restauração/rest-13.png",
      "assets/images/portfolio/projeto-03-restauração/rest-14.png",
      "assets/images/portfolio/projeto-03-restauração/rest-15.png",
      "assets/images/portfolio/projeto-03-restauração/rest-16.png",
      "assets/images/portfolio/projeto-03-restauração/rest-17.png",
      "assets/images/portfolio/projeto-03-restauração/rest-18.png"
    ],
    categoria: "Restauração"
  },
  {
    tag: "Instalação",
    titulo: "Instalação de Assoalho",
    descricao: "Instalação de piso maciço com acabamento impecável. [INSERIR INFORMAÇÃO]",
    imagem: "assets/images/portfolio/projeto-04-instalação/ins-01.png",
    imagens: [
      "assets/images/portfolio/projeto-04-instalação/ins-01.png",
      "assets/images/portfolio/projeto-04-instalação/ins-02.png",
      "assets/images/portfolio/projeto-04-instalação/ins-03.png",
      "assets/images/portfolio/projeto-04-instalação/ins-04.png",
      "assets/images/portfolio/projeto-04-instalação/ins-05.png",
      "assets/images/portfolio/projeto-04-instalação/ins-06.png",
      "assets/images/portfolio/projeto-04-instalação/ins-07.png",
      "assets/images/portfolio/projeto-04-instalação/ins-08.png",
      "assets/images/portfolio/projeto-04-instalação/ins-09.png"
    ],
    categoria: "Instalação"
  }
];