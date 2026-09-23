/* ==========================================================================
   ARTE FINAL — PISOS DE MADEIRA — Funcionalidades Principais
   ========================================================================== */

/* --------------------------------------------------------------------------
   WHATSAPP CENTRALIZADO
   -------------------------------------------------------------------------- */

function obterWhatsapp() {
  return String(CONFIG.whatsapp || "").replace(/\D/g, "");
}

function semWhatsappConfigurado() {
  alert(
    "WhatsApp ainda não configurado.\n\n" +
    "Abra o arquivo js/config.js e preencha CONFIG.whatsapp " +
    "com o número no formato 55 + DDD + número (somente dígitos)."
  );
}

function gerarUrlWhatsApp(mensagem) {
  const numero = obterWhatsapp();
  if (numero.length < 10) {
    semWhatsappConfigurado();
    return "";
  }
  const texto = encodeURIComponent(mensagem);
  return "https://api.whatsapp.com/send?phone=" + numero + "&text=" + texto;
}

function abrirWhatsApp(mensagem) {
  const url = gerarUrlWhatsApp(mensagem);
  if (url) window.open(url, "_blank", "noopener");
}

/* --------------------------------------------------------------------------
   ORÇAMENTO — ENVIO GENÉRICO
   -------------------------------------------------------------------------- */

function enviarOrcamento(tipo) {
  let mensagem = CONFIG.mensagemPadrao;

  const mapa = {
    "Instalação": "mensagemInstalacao",
    "Instalacao": "mensagemInstalacao",
    "Restauração": "mensagemRestauracao",
    "Restauracao": "mensagemRestauracao",
    "Acabamento": "mensagemAcabamento",
    "Deck": "mensagemDeck",
    "Lixamento": "mensagemPadrao",
    "Manutenção": "mensagemPadrao",
    "Recuperação": "mensagemPadrao"
  };

  if (tipo && mapa[tipo] && CONFIG[mapa[tipo]]) {
    mensagem = CONFIG[mapa[tipo]];
  } else if (tipo) {
    mensagem = "Olá! Gostaria de solicitar um orçamento para " + tipo + " de piso de madeira.";
  }

  abrirWhatsApp(mensagem);
}

/* --------------------------------------------------------------------------
   FORMULÁRIO DE ORÇAMENTO
   -------------------------------------------------------------------------- */

function enviarFormulario(event) {
  event.preventDefault();

  const form = event.target;
  const nome = form.querySelector('[name="nome"]').value.trim();
  const telefone = form.querySelector('[name="telefone"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const servico = form.querySelector('[name="servico"]').value;
  const ambiente = form.querySelector('[name="ambiente"]').value.trim();
  const cidade = form.querySelector('[name="cidade"]').value.trim();
  const mensagemExtra = form.querySelector('[name="mensagem"]').value.trim();

  if (!nome || !telefone || !servico) {
    alert("Por favor, preencha os campos obrigatórios (Nome, Telefone e Tipo de serviço).");
    return;
  }

  let mensagem = CONFIG.mensagemPadrao + "\n\n";
  mensagem += "*Nome:* " + nome + "\n";
  mensagem += "*Telefone:* " + telefone + "\n";
  if (email) mensagem += "*E-mail:* " + email + "\n";
  mensagem += "*Tipo de serviço:* " + servico + "\n";
  if (ambiente) mensagem += "*Tipo de ambiente:* " + ambiente + "\n";
  if (cidade) mensagem += "*Cidade:* " + cidade + "\n";
  if (mensagemExtra) mensagem += "*Mensagem:* " + mensagemExtra + "\n";
  mensagem += "\nAguardo a avaliação. Obrigado!";

  abrirWhatsApp(mensagem);
}

/* --------------------------------------------------------------------------
   PREENCHIMENTO AUTOMÁTICO COM BASE NA CONFIGURAÇÃO
   -------------------------------------------------------------------------- */

function aplicarConfiguracao() {
  const logoNome = document.getElementById("logo-nome");
  const logoSub = document.getElementById("logo-sub");
  const footerNome = document.getElementById("footer-nome");
  const footerSub = document.getElementById("footer-sub");
  const copyrightNome = document.getElementById("copyright-nome");
  const heroSub = document.getElementById("hero-subtitulo");
  const ctaFooterDesc = document.getElementById("slogan-footer");

  if (logoNome) logoNome.textContent = CONFIG.logoNome;
  if (logoSub) logoSub.textContent = CONFIG.subtitulo;
  if (footerNome) footerNome.textContent = CONFIG.empresa;
  if (footerSub) footerSub.textContent = CONFIG.subtitulo;
  if (copyrightNome) copyrightNome.textContent = CONFIG.empresa;

  document.title = CONFIG.empresa + " | " + CONFIG.tagline;

  if (heroSub && CONFIG.slogan) heroSub.textContent = CONFIG.slogan;
  if (ctaFooterDesc && CONFIG.slogan) ctaFooterDesc.textContent = CONFIG.slogan;

  // Horário
  const badgeHorario = document.getElementById("badge-horario");
  if (badgeHorario) {
    const valor = CONFIG.horarioResumo || CONFIG.horario;
    badgeHorario.textContent = String(valor || "").startsWith("[INSERIR")
      ? "Atendimento com hora marcada"
      : valor;
  }

  // Área de atendimento
  const coverageText = document.getElementById("coverage-text");
  if (coverageText) {
    coverageText.textContent = CONFIG.atendimento
      ? "Atendimento em " + CONFIG.atendimento
      : "[INSERIR ÁREA DE ATENDIMENTO]";
  }

  const coverageCidade = document.getElementById("coverage-cidade");
  if (coverageCidade) coverageCidade.textContent = CONFIG.cidade;

  const coverageRegiao = document.getElementById("coverage-regiao");
  if (coverageRegiao) {
    coverageRegiao.textContent = CONFIG.atendimento
      ? "Toda a cidade de " + CONFIG.atendimento
      : "Toda a cidade de Curitiba";
  }

  // Cidade no formulário
  const formCidadeLocal = document.getElementById("form-cidade-local");
  if (formCidadeLocal) formCidadeLocal.textContent = CONFIG.cidade;

  // Telefone (links com classe .js-phone)
  document.querySelectorAll(".js-phone").forEach(function (el) {
    const limpo = String(CONFIG.telefone || "").replace(/\s/g, "");
    if (/\d/.test(limpo) && !String(CONFIG.telefone).startsWith("[INSERIR")) {
      el.textContent = CONFIG.telefone;
      el.setAttribute("href", "tel:" + limpo.replace(/\D/g, ""));
    }
  });

  // E-mail (links com classe .js-email)
  document.querySelectorAll(".js-email").forEach(function (el) {
    if (String(CONFIG.email || "").includes("@")) {
      el.textContent = CONFIG.email;
      el.setAttribute("href", "mailto:" + CONFIG.email);
    }
  });

  // WhatsApp no rodapé e botão flutuante
  const numero = obterWhatsapp();
  if (numero.length >= 10) {
    const footerWhatsapp = document.getElementById("footer-whatsapp-link");
    if (footerWhatsapp) footerWhatsapp.setAttribute("href", gerarUrlWhatsApp(CONFIG.mensagemPadrao));

    const whatsInteiro = document.getElementById("whatsapp-float");
    if (whatsInteiro) whatsInteiro.setAttribute("href", gerarUrlWhatsApp(CONFIG.mensagemPadrao));
  }

  // Endereço
  const enderecoEl = document.getElementById("footer-endereco");
  const enderecoFooter2 = document.getElementById("footer-endereco-2");
  const temEndereco = CONFIG.endereco && !String(CONFIG.endereco).startsWith("[INSERIR");

  if (enderecoEl && temEndereco) {
    enderecoEl.textContent = CONFIG.endereco + (CONFIG.cidade && !String(CONFIG.cidade).startsWith("[INSERIR") ? " · " + CONFIG.cidade : "");
  }

  if (enderecoFooter2 && temEndereco) {
    enderecoFooter2.textContent = CONFIG.endereco;
  }

  // Redes sociais
  const instagram = document.getElementById("footer-instagram");
  if (instagram && CONFIG.instagram) instagram.setAttribute("href", CONFIG.instagram);

  const facebook = document.getElementById("footer-facebook");
  if (facebook && CONFIG.facebook) facebook.setAttribute("href", CONFIG.facebook);

  // Avaliação no Google (botão flutuante)
  const avaliacao = document.getElementById("avaliacao-float");
  if (avaliacao && CONFIG.avaliacaoGoogle) {
    avaliacao.setAttribute("href", CONFIG.avaliacaoGoogle);
    avaliacao.setAttribute("target", "_blank");
    avaliacao.setAttribute("rel", "noopener noreferrer");
  }

  // Ano atual
  const anoAtual = document.getElementById("ano-atual");
  if (anoAtual) anoAtual.textContent = new Date().getFullYear();

  // Criar ícones Lucide ao final
  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   ANIMAÇÃO DO TÍTULO DO HERO (REVEAL + BLUR + SHIMMER)
   Adaptação visual dos componentes de texto do 21st.dev para HTML/CSS/JS puro.
   ========================================================================== */

function animarTituloHero() {
  const h1 = document.querySelector(".hero-title");
  const linhas = document.querySelectorAll(".hero-title .line-inner");
  if (!h1 || !linhas.length) return;

  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduzirMovimento) return;

  if (!h1.querySelector(".hero-char")) {
    linhas.forEach(function (linha) {
      const texto = linha.textContent.trim();
      if (!texto) return;

      linha.setAttribute("aria-hidden", "true");
      let html = "";
      let indice = 0;

      texto.split("").forEach(function (ch) {
        if (ch === " ") {
          html += '<span class="hero-char hero-char-space" aria-hidden="true">\u00A0</span>';
        } else {
          html += '<span class="hero-char" aria-hidden="true" style="--d:' + indice * 45 + 'ms">' + ch + "</span>";
          indice++;
        }
      });

      linha.innerHTML = html;
    });

    h1.classList.add("hero-title-animated");
  }
}

/* ==========================================================================
   COVERFLOW — GALERIA 3D DE PROJETOS + LIGHTBOX
   ========================================================================== */

function montarCoverflow() {
  const stage = document.getElementById("coverflow-stage");
  if (!stage) return null;

  const ambBg = document.getElementById("coverflow-bg");
  const dotsContainer = document.getElementById("coverflow-dots");
  const btnPrev = document.getElementById("coverflow-prev");
  const btnNext = document.getElementById("coverflow-next");

  const todos = (typeof PORTFOLIO !== "undefined" ? PORTFOLIO : []).slice();
  if (!todos.length) return null;

  let itens = todos.slice();
  let indice = 0;
  let touchX = 0;
  let hoverLock = false;
  let timer = null;
  let reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Galeria de projetos da Arte Final");
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Fechar galeria"><i data-lucide="x"></i></button>' +
    '<div class="lightbox-counter"></div>' +
    '<button class="lightbox-arrow prev" aria-label="Foto anterior"><i data-lucide="chevron-left"></i></button>' +
    '<button class="lightbox-arrow next" aria-label="Próxima foto"><i data-lucide="chevron-right"></i></button>' +
    '<figure class="lightbox-figure">' +
      '<img class="lightbox-img" src="" alt="">' +
      '<figcaption>' +
        '<span class="coverflow-tag lightbox-tag"></span>' +
        '<h3 class="lightbox-title"></h3>' +
        '<button class="coverflow-cta lightbox-cta">Solicitar orçamento</button>' +
      '</figcaption>' +
    '</figure>' +
    '<div class="lightbox-thumbs"></div>';
  document.body.appendChild(overlay);

  let obraAtiva = 0;
  let fotoAtiva = 0;
  let lightboxTouchX = 0;

  function fotosDaObra(i) {
    const fotos = itens[i].imagens;
    return Array.isArray(fotos) && fotos.length ? fotos : [itens[i].imagem];
  }

  // ---------------- LIGHTBOX (abrir / fechar / navegar) ----------------

  function abrirLightbox(i) {
    obraAtiva = i;
    fotoAtiva = 0;
    pararAutoplay();
    atualizarLightbox();
    overlay.classList.add("open");
    document.body.classList.add("no-scroll");
    if (window.lucide) window.lucide.createIcons();
  }

  function fecharLightbox() {
    overlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
    iniciarAutoplay();
  }

  function atualizarLightbox() {
    const fotos = fotosDaObra(obraAtiva);
    const item = itens[obraAtiva];
    const imgEl = overlay.querySelector(".lightbox-img");
    const counter = overlay.querySelector(".lightbox-counter");
    const hasMulti = fotos.length > 1;

    if (fotos.length) {
      imgEl.src = fotos[fotoAtiva];
      imgEl.alt = item.titulo + " - foto " + (fotoAtiva + 1) + " de " + fotos.length;
    }

    counter.textContent = hasMulti ? (fotoAtiva + 1) + " / " + fotos.length : "";
    overlay.classList.toggle("has-single", !hasMulti);
    overlay.querySelector(".lightbox-tag").textContent = item.tag;
    overlay.querySelector(".lightbox-title").textContent = item.titulo;
    overlay.querySelector(".lightbox-cta").onclick = function () { enviarOrcamento(item.categoria); };

    const thumbs = overlay.querySelector(".lightbox-thumbs");
    thumbs.innerHTML = "";

    if (hasMulti) {
      fotos.forEach(function (src, fi) {
        const t = document.createElement("button");
        t.type = "button";
        t.className = "lightbox-thumb" + (fi === fotoAtiva ? " active" : "");
        t.setAttribute("aria-label", "Ir para a foto " + (fi + 1));
        const ti = document.createElement("img");
        ti.src = src;
        ti.alt = "";
        ti.loading = "lazy";
        t.appendChild(ti);
        t.addEventListener("click", function () {
          fotoAtiva = fi;
          atualizarLightbox();
        });
        thumbs.appendChild(t);
      });

      const ativo = thumbs.querySelector(".lightbox-thumb.active");
      if (ativo && window.matchMedia("(max-width: 900px)").matches) {
        ativo.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function fotoAnterior() {
    const fotos = fotosDaObra(obraAtiva);
    if (fotos.length <= 1) return;
    fotoAtiva = (fotoAtiva - 1 + fotos.length) % fotos.length;
    atualizarLightbox();
  }

  function fotoProxima() {
    const fotos = fotosDaObra(obraAtiva);
    if (fotos.length <= 1) return;
    fotoAtiva = (fotoAtiva + 1) % fotos.length;
    atualizarLightbox();
  }

  overlay.querySelector(".lightbox-close").addEventListener("click", fecharLightbox);
  overlay.querySelector(".lightbox-arrow.prev").addEventListener("click", function (e) {
    e.stopPropagation();
    fotoAnterior();
  });
  overlay.querySelector(".lightbox-arrow.next").addEventListener("click", function (e) {
    e.stopPropagation();
    fotoProxima();
  });
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) fecharLightbox();
  });

  overlay.addEventListener("touchstart", function (e) {
    lightboxTouchX = e.touches[0].clientX;
  }, { passive: true });

  overlay.addEventListener("touchend", function (e) {
    const diff = e.changedTouches[0].clientX - lightboxTouchX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) fotoProxima();
      else fotoAnterior();
    }
  }, { passive: true });

  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") { fecharLightbox(); e.preventDefault(); }
    else if (e.key === "ArrowLeft") { fotoAnterior(); e.preventDefault(); }
    else if (e.key === "ArrowRight") { fotoProxima(); e.preventDefault(); }
  });

  // ---------------- RENDERIZAÇÃO DO COVERFLOW ----------------

  function indiceRelativo(i) {
    let d = (i - indice + itens.length) % itens.length;
    if (d > itens.length / 2) d -= itens.length;
    return d;
  }

  function atualizarCobertura() {
    const cards = Array.from(stage.children);
    if (!cards.length) return;

    const cardW = cards[0].offsetWidth || 320;

    cards.forEach(function (card, i) {
      const d = indiceRelativo(i);
      const sinal = d < 0 ? -1 : 1;
      const abs = Math.abs(d);
      let transformo = "";
      let opacidade = 0;
      let z = 1;
      let filtro = "brightness(0.4) blur(2px)";
      let centro = false;

      if (d === 0) {
        transformo = "none";
        opacidade = 1;
        z = 30;
        filtro = "none";
        centro = true;
      } else if (abs === 1) {
        transformo = "translateX(" + Math.round(0.62 * cardW * sinal) + "px) scale(0.84) rotateY(" + (-24 * sinal) + "deg)";
        opacidade = 0.6;
        z = 20;
        filtro = "brightness(0.75)";
      } else if (abs === 2) {
        transformo = "translateX(" + Math.round(1.05 * cardW * sinal) + "px) scale(0.68) rotateY(" + (-38 * sinal) + "deg)";
        opacidade = 0.35;
        z = 10;
        filtro = "brightness(0.55) blur(1px)";
      } else {
        transformo = "translateX(" + Math.round(1.35 * cardW * sinal) + "px) scale(0.55) rotateY(" + (-45 * sinal) + "deg)";
        opacidade = 0;
      }

      card.style.transform = transformo;
      card.style.opacity = opacidade;
      card.style.zIndex = z;
      card.style.filter = filtro;
      card.setAttribute("aria-hidden", centro ? "false" : "true");
      card.classList.toggle("is-center", centro);
    });

    if (ambBg) ambBg.src = itens[indice].imagem;

    const dots = Array.from(dotsContainer.children);
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === indice);
      dot.setAttribute("aria-selected", i === indice ? "true" : "false");
    });
  }

  function renderizarGaleria() {
    stage.innerHTML = "";
    dotsContainer.innerHTML = "";

    itens.forEach(function (item, i) {
      const card = document.createElement("div");
      card.className = "coverflow-card";
      card.dataset.index = i;
      card.setAttribute("role", "tabpanel");

      const img = document.createElement("img");
      img.src = item.imagem;
      img.alt = item.titulo;
      img.loading = "lazy";
      img.draggable = false;
      card.appendChild(img);

      const vignette = document.createElement("div");
      vignette.className = "coverflow-vignette";
      card.appendChild(vignette);

      const content = document.createElement("div");
      content.className = "coverflow-content";
      content.innerHTML =
        '<span class="coverflow-tag">' + item.tag + "</span>" +
        '<div class="coverflow-body">' +
          '<h3 class="coverflow-title">' + item.titulo + "</h3>" +
          (item.descricao ? '<p class="coverflow-desc">' + item.descricao + "</p>" : "") +
          (item.imagens && item.imagens.length > 1 ? '<span class="coverflow-hint">Ver todas as fotos</span>' : "") +
          '<button class="coverflow-cta" data-categoria="' + (item.categoria || "") + '">Solicitar orçamento</button>' +
        "</div>";
      card.appendChild(content);

      card.addEventListener("click", function () {
        abrirLightbox(i);
      });

      card.addEventListener("mouseenter", function () {
        if (hoverLock) return;
        if (indiceRelativo(i) !== 0) {
          hoverLock = true;
          setTimeout(function () { hoverLock = false; }, 850);
          irPara(i);
        }
      });

      content.querySelector(".coverflow-cta").addEventListener("click", function (e) {
        e.stopPropagation();
        enviarOrcamento(e.currentTarget.dataset.categoria);
      });

      stage.appendChild(card);
    });

    itens.forEach(function (_, i) {
      const dot = document.createElement("button");
      dot.className = "coverflow-dot";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Ir para o projeto " + (i + 1));
      dot.addEventListener("click", function () { irPara(i); });
      dotsContainer.appendChild(dot);
    });

    indice = indice % itens.length;
    atualizarCobertura();
    if (window.lucide) window.lucide.createIcons();
  }

  function proximo() {
    if (itens.length <= 1) return;
    indice = (indice + 1) % itens.length;
    atualizarCobertura();
  }

  function anterior() {
    if (itens.length <= 1) return;
    indice = (indice - 1 + itens.length) % itens.length;
    atualizarCobertura();
  }

  function irPara(i) {
    indice = (i + itens.length) % itens.length;
    atualizarCobertura();
  }

  function pararAutoplay() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  function iniciarAutoplay() {
    pararAutoplay();
    if (reduzirMovimento || itens.length <= 1) return;
    if (overlay.classList.contains("open")) return;
    timer = setInterval(proximo, 5200);
  }

  btnPrev.addEventListener("click", anterior);
  btnNext.addEventListener("click", proximo);

  stage.addEventListener("keydown", function (e) {
    if (overlay.classList.contains("open")) return;
    if (e.key === "ArrowLeft") { anterior(); e.preventDefault(); }
    if (e.key === "ArrowRight") { proximo(); e.preventDefault(); }
  });

  stage.addEventListener("touchstart", function (e) {
    touchX = e.touches[0].clientX;
  }, { passive: true });

  stage.addEventListener("touchend", function (e) {
    const diff = e.changedTouches[0].clientX - touchX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) proximo();
      else anterior();
    }
  }, { passive: true });

  const cover = document.getElementById("coverflow");
  if (cover) {
    cover.addEventListener("mouseenter", pararAutoplay);
    cover.addEventListener("mouseleave", iniciarAutoplay);
    cover.addEventListener("focusin", pararAutoplay);
    cover.addEventListener("focusout", iniciarAutoplay);
  }

  renderizarGaleria();
  iniciarAutoplay();

  return {
    filtrar: function (categoria) {
      itens = categoria === "Todos"
        ? todos.slice()
        : todos.filter(function (item) { return item.categoria === categoria; });
      indice = 0;
      renderizarGaleria();
      iniciarAutoplay();
    }
  };
}

/* --------------------------------------------------------------------------
   FILTROS DO PORTFÓLIO
   -------------------------------------------------------------------------- */

function inicializarFiltros(callbackFiltrar) {
  const botoes = document.querySelectorAll("[data-galeria-filtro]");
  if (!botoes.length || typeof callbackFiltrar !== "function") return;

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      botoes.forEach(function (b) { b.classList.remove("active"); });
      botao.classList.add("active");
      const filtro = botao.getAttribute("data-galeria-filtro");
      callbackFiltrar(filtro);
    });
  });
}

/* --------------------------------------------------------------------------
   MENU MOBILE
   -------------------------------------------------------------------------- */

function inicializarMenuMobile() {
  const botao = document.getElementById("mobileMenuBtn");
  const menu = document.querySelector(".nav-menu");

  if (!botao || !menu) return;

  function fecharMenu() {
    menu.classList.remove("active");
    botao.classList.remove("open");
    botao.setAttribute("aria-expanded", "false");
    botao.setAttribute("aria-label", "Abrir menu");
  }

  botao.addEventListener("click", function () {
    const aberto = menu.classList.toggle("active");
    botao.classList.toggle("open", aberto);
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      fecharMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   ANIMAÇÕES DE ENTRADA (REVEAL AO ROLAR)
   -------------------------------------------------------------------------- */

function iniciarReveal() {
  const seletoresReveal = [
    ".diff-item",
    ".services-grid > *",
    ".about-content > *:not(.reveal)",
    ".coverage-grid > *",
    ".form-grid > *",
    ".form-info-features > *",
    ".process-step",
    ".type-row",
    ".section-title",
    ".impact-quote .reveal",
    ".material-chips",
    ".experience-copy p"
  ];

  const seletoresLeft = [".about-image", ".type-media"];
  const seletoresRight = [".about-content", ".type-content"];
  const seletoresScale = [".comparison", ".coverflow"];

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      .forEach(function (el) { el.classList.add("visible"); });
    return;
  }

  function observar(seletores, classe) {
    const items = document.querySelectorAll(seletores);
    if (!items.length) return;

    items.forEach(function (el) {
      el.classList.add(classe);
      const idx = Array.prototype.indexOf.call(el.parentElement.childNodes, el);
      el.style.transitionDelay = (Math.max(idx, 0) % 6 * 0.1) + "s";
    });

    const obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          obs.unobserve(entrada.target);
          const atraso = parseFloat(entrada.target.style.transitionDelay || 0);
          setTimeout(function () {
            entrada.target.style.transitionDelay = "0s";
          }, atraso * 1000 + 800);
        }
      });
    }, { threshold: 0.12 });

    items.forEach(function (el) { obs.observe(el); });
  }

  observar(seletoresReveal.join(","), "reveal");
  observar(seletoresLeft.join(","), "reveal-left");
  observar(seletoresRight.join(","), "reveal-right");
  observar(seletoresScale.join(","), "reveal-scale");

  // Palavras da seção de experiência visual
  const palavras = document.querySelectorAll(".word-reveal .word");
  if (palavras.length && "IntersectionObserver" in window) {
    const obsPalavras = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          setTimeout(function () {
            entrada.target.classList.add("visible");
          }, Array.prototype.indexOf.call(entrada.target.parentElement.children, entrada.target) * 250);
          obsPalavras.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.6 });

    palavras.forEach(function (w) { obsPalavras.observe(w); });
  }
}

/* --------------------------------------------------------------------------
   PARTÍCULAS / LUZ DO HERO
   -------------------------------------------------------------------------- */

function criarParticulasHero() {
  const container = document.querySelector(".hero-particles");
  if (!container) return;

  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduzirMovimento) return;

  const isMobile = window.innerWidth < 900;
  const total = isMobile ? 10 : 20;

  for (let i = 0; i < total; i++) {
    const p = document.createElement("div");
    p.className = "hero-particle";
    const size = Math.random() * 3 + 1.5;
    const left = Math.random() * 100;
    const dur = Math.random() * 14 + 12;
    const delay = Math.random() * 16;
    const isCaramel = Math.random() > 0.45;

    p.style.cssText =
      "width:" + size + "px;height:" + size + "px;left:" + left + "%;" +
      "background:" + (isCaramel ? "rgba(216,195,165,0.5)" : "rgba(255,255,255,0.3)") + ";" +
      "animation-duration:" + dur + "s;animation-delay:" + delay + "s;";
    container.appendChild(p);
  }
}

/* --------------------------------------------------------------------------
   NAVEGAÇÃO ATIVA (SCROLL SPY)
   -------------------------------------------------------------------------- */

function iniciarScrollSpy() {
  const links = document.querySelectorAll(".nav-menu a");
  if (!links.length) return;

  const secoes = [];
  links.forEach(function (link) {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const secao = document.querySelector(href);
      if (secao) secoes.push({ el: secao, link: link });
    }
  });

  if (!secoes.length) return;

  const observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        links.forEach(function (l) { l.classList.remove("active"); });
        const item = secoes.find(function (s) { return s.el === entrada.target; });
        if (item) item.link.classList.add("active");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });

  secoes.forEach(function (s) { observer.observe(s.el); });
}

/* --------------------------------------------------------------------------
   ANTES E DEPOIS — COMPARADOR (MOUSE + TOUCH + TECLADO)
   -------------------------------------------------------------------------- */

function inicializarAntesDepois() {
  const slider = document.getElementById("comparison-slider");
  if (!slider) return;

  const handle = document.getElementById("comparison-handle");
  const beforeImg = slider.querySelector(".comparison-before");
  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let arrastando = false;

  function setPosicao(pos) {
    pos = Math.max(0, Math.min(100, pos));
    if (beforeImg) {
      beforeImg.style.clipPath = "inset(0 calc(100% - " + pos + "%) 0 0)";
      beforeImg.style.webkitClipPath = "inset(0 calc(100% - " + pos + "%) 0 0)";
    }
    if (handle) handle.style.left = pos + "%";
    handle.setAttribute("aria-valuenow", Math.round(pos));
  }

  function posicaoDoEvento(e) {
    const rect = slider.getBoundingClientRect();
    const x = e.type.indexOf("touch") === 0 ? e.touches[0].clientX : e.clientX;
    return ((x - rect.left) / rect.width) * 100;
  }

  function aoMover(e) {
    if (!arrastando) return;
    e.preventDefault();
    setPosicao(posicaoDoEvento(e));
  }

  function aoSoltar() {
    arrastando = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }

  handle.addEventListener("mousedown", function (e) {
    arrastando = true;
    e.preventDefault();
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
  });

  handle.addEventListener("touchstart", function (e) {
    arrastando = true;
    e.preventDefault();
  }, { passive: false });

  window.addEventListener("mousemove", aoMover, { passive: false });
  window.addEventListener("touchmove", aoMover, { passive: false });

  window.addEventListener("mouseup", aoSoltar);
  window.addEventListener("touchend", aoSoltar);

  // Clique direto na imagem move o divisor
  slider.addEventListener("click", function (e) {
    if (e.target === handle) return;
    setPosicao(posicaoDoEvento(e));
  });

  // Teclado
  slider.setAttribute("tabindex", "0");
  slider.addEventListener("keydown", function (e) {
    const atual = parseFloat(handle.getAttribute("aria-valuenow")) || 50;
    if (e.key === "ArrowLeft") { setPosicao(atual - 3); e.preventDefault(); }
    else if (e.key === "ArrowRight") { setPosicao(atual + 3); e.preventDefault(); }
  });

  if (reduzirMovimento) setPosicao(50);
}

/* --------------------------------------------------------------------------
   PARALLAX SUAVE (SCROLL)
   -------------------------------------------------------------------------- */

function inicializarParallax() {
  const alvos = document.querySelectorAll("[data-speed]");
  if (!alvos.length) return;

  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduzirMovimento) return;

  if (!("IntersectionObserver" in window)) return;

  const emCena = {};

  const observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      emCena[entrada.target.dataset.speed] = entrada.isIntersecting;
    });
  }, { rootMargin: "10% 0px 10% 0px" });

  alvos.forEach(function (alvo) {
    observer.observe(alvo);
  });

  let rodando = false;

  function animar() {
    rodando = false;
    const velocidade = window.scrollY;
    alvos.forEach(function (alvo) {
      if (!emCena[alvo.dataset.speed]) return;
      const desloc = velocidade * parseFloat(alvo.dataset.speed);
      const limite = 110;
      if (Math.abs(desloc) > limite) return;
      alvo.style.transform = "translate3d(0, " + (-desloc) + "px, 0)";
    });
  }

  window.addEventListener("scroll", function () {
    if (!rodando) {
      rodando = true;
      window.requestAnimationFrame(animar);
    }
  }, { passive: true });

  animar();
}

/* --------------------------------------------------------------------------
   SEÇÃO MATERIAL — CHIPS DE DETALHE
   -------------------------------------------------------------------------- */

function inicializarMaterialChips() {
  const chips = document.querySelectorAll(".material-chip");
  const preview = document.getElementById("material-preview");
  if (!chips.length || !preview) return;

  const informacoes = {
    "VEIOS": "Os veios contam a história da madeira — cada um único, como uma assinatura.",
    "TEXTURA": "O toque, o relevo e a sensação tátil que a madeira proporciona ao ambiente.",
    "TONALIDADE": "Do claro ao escuro, a cor natural da madeira transforma a luz do espaço.",
    "ACABAMENTO": "A proteção final que realça a beleza e prolonga a vida do piso."
  };

  const imagens = {
    "VEIOS": "assets/images/material/veios.jpg",
    "TEXTURA": "assets/images/material/textura.jpg",
    "TONALIDADE": "assets/images/material/tonalidade.jpg",
    "ACABAMENTO": "assets/images/material/acabamento.png"
  };

  const bgImg = document.querySelector(".experience-parallax img");

  if (bgImg) {
    Object.keys(imagens).forEach(function (k) {
      const pre = new Image();
      pre.src = imagens[k];
    });
  }

  function trocarImagem(material) {
    const src = imagens[material];
    if (!bgImg || !src || bgImg.getAttribute("src") === src) return;
    const pre = new Image();
    pre.onload = function () {
      bgImg.style.opacity = "0";
      setTimeout(function () {
        bgImg.src = src;
        requestAnimationFrame(function () { bgImg.style.opacity = "1"; });
      }, 220);
    };
    pre.src = src;
  }

  const valorEl = preview.querySelector(".material-preview-value");

  function mostrar(texto, ativo, material) {
    if (valorEl) {
      valorEl.classList.add("fade");
      setTimeout(function () {
        valorEl.textContent = texto;
        setTimeout(function () { valorEl.classList.remove("fade"); }, 120);
      }, 220);
    }
    chips.forEach(function (c) { c.classList.remove("active"); });
    if (ativo) ativo.classList.add("active");
    trocarImagem(material);
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      mostrar(informacoes[chip.dataset.material] || chip.dataset.material, chip, chip.dataset.material);
    });
    chip.addEventListener("mouseenter", function () {
      mostrar(informacoes[chip.dataset.material] || chip.dataset.material, chip, chip.dataset.material);
    });
  });
}

/* ==========================================================================
   INICIALIZAÇÃO
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  aplicarConfiguracao();
  animarTituloHero();

  const galeria = montarCoverflow();
  inicializarFiltros(galeria ? galeria.filtrar : null);

  inicializarAntesDepois();
  criarParticulasHero();
  iniciarReveal();
  inicializarMenuMobile();
  iniciarScrollSpy();
  inicializarParallax();
  inicializarMaterialChips();

  // Scroll do header — transparente no hero, vidro fosco ao rolar
  const header = document.getElementById("topo");
  const hero = document.querySelector(".hero");

  function aoRolar() {
    const scrollY = window.scrollY;
    const limiteGlass = hero
      ? hero.offsetTop + hero.offsetHeight * 0.7
      : window.innerHeight * 0.85;

    header.classList.toggle("scrolled", scrollY > 40);
    header.classList.toggle("glass", scrollY > limiteGlass);
  }

  if (header) {
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
  }

  // Clique nas logos → topo (rolagem suave)
  document.querySelectorAll(".logo, .footer-logo").forEach(function (logo) {
    logo.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Ícones Lucide
  if (window.lucide) window.lucide.createIcons();
});