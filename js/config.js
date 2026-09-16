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
  // IMAGENS DEMONSTRATIVAS (Unsplash). Substitua pelas fotos reais em:
  // assets/images/portfolio/projeto-01/ ... projeto-04/
  {
    tag: "Residencial",
    titulo: "Residência em Madeira",
    descricao: "Instalação de piso de madeira em sala integrada. [INSERIR INFORMAÇÃO]",
    imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Residencial"
  },
  {
    tag: "Comercial",
    titulo: "Espaço Comercial",
    descricao: "Revestimento de madeira em ambiente de uso comercial. [INSERIR INFORMAÇÃO]",
    imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Comercial"
  },
  {
    tag: "Restauração",
    titulo: "Restauração de Piso Antigo",
    descricao: "Recuperação de assoalho antigo com lixamento e novo acabamento. [INSERIR INFORMAÇÃO]",
    imagem: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1581852017102-045d7c4429a6?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1452725606904-721f6408b848?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Restauração"
  },
  {
    tag: "Instalação",
    titulo: "Instalação de Assoalho",
    descricao: "Instalação de piso maciço com acabamento impecável. [INSERIR INFORMAÇÃO]",
    imagem: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Instalação"
  }
];