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
  // Imagens locais geradas (assets/images/portfolio/...). Substitua pelas fotos reais.
  {
    tag: "Residencial",
    titulo: "Residência em Madeira",
    descricao: "Instalação de piso de madeira em sala integrada. [INSERIR INFORMAÇÃO]",
    imagem: "assets/images/portfolio/projeto-01/imagem-01.svg",
    imagens: [
      "assets/images/portfolio/projeto-01/imagem-01.svg",
      "assets/images/portfolio/projeto-01/imagem-02.svg",
      "assets/images/portfolio/projeto-01/imagem-03.svg"
    ],
    categoria: "Residencial"
  },
  {
    tag: "Comercial",
    titulo: "Espaço Comercial",
    descricao: "Revestimento de madeira em ambiente de uso comercial. [INSERIR INFORMAÇÃO]",
    imagem: "assets/images/portfolio/projeto-02/imagem-01.svg",
    imagens: [
      "assets/images/portfolio/projeto-02/imagem-01.svg",
      "assets/images/portfolio/projeto-02/imagem-02.svg"
    ],
    categoria: "Comercial"
  },
  {
    tag: "Restauração",
    titulo: "Restauração de Piso Antigo",
    descricao: "Recuperação de assoalho antigo com lixamento e novo acabamento. [INSERIR INFORMAÇÃO]",
    imagem: "assets/images/portfolio/projeto-03/imagem-01.svg",
    imagens: [
      "assets/images/portfolio/projeto-03/imagem-01.svg",
      "assets/images/portfolio/projeto-03/imagem-02.svg",
      "assets/images/portfolio/projeto-03/imagem-03.svg"
    ],
    categoria: "Restauração"
  },
  {
    tag: "Instalação",
    titulo: "Instalação de Assoalho",
    descricao: "Instalação de piso maciço com acabamento impecável. [INSERIR INFORMAÇÃO]",
    imagem: "assets/images/portfolio/projeto-04/imagem-01.svg",
    imagens: [
      "assets/images/portfolio/projeto-04/imagem-01.svg",
      "assets/images/portfolio/projeto-04/imagem-02.svg",
      "assets/images/portfolio/projeto-04/imagem-03.svg"
    ],
    categoria: "Instalação"
  }
];