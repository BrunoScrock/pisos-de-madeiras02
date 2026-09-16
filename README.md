# Arte Final — Pisos de Madeira

Site institucional **estático** da Arte Final, empresa especializada em **instalação, restauração e acabamento de pisos de madeira**.

Design premium com identidade visual em **verde institucional `#1E543A`** (cor da logo), combinado com tons naturais de madeira das fotografias, com foco em **gerar contatos e solicitações de orçamento via WhatsApp**.

---

## Visão geral

- **Tecnologia:** HTML5, CSS3, JavaScript ES6+ (sem backend)
- **Hospedagem compatível:** GitHub Pages, Netlify, Vercel, Cloudflare Pages
- **Fontes:** Cormorant Garamond (títulos) + Inter (textos)
- **Ícones:** Lucide Icons
- **Mapa:** OpenStreetMap (iframe, sem API)

## Como executar localmente

Você pode usar qualquer servidor estático. Exemplos:

```bash
# Opção 1 — Python
python -m http.server 8000

# Opção 2 — Node.js
npx serve .

# Opção 3 — VS Code Live Server
# Instale a extensão "Live Server" e clique em "Go Live"
```

Abra `http://localhost:8000` no navegador.

## Configuração

Todas as informações da empresa ficam centralizadas em um único arquivo:

```
js/config.js
```

Edite os valores de:

| Campo | Descrição |
| --- | --- |
| `whatsapp` | Número no formato `55 + DDD + número` (somente dígitos). Ex.: `5541999999999` |
| `telefone` | Telefone para exibição |
| `email` | E-mail de contato |
| `cidade` / `endereco` / `atendimento` | Localização e região atendida |
| `horario` / `horarioResumo` | Horários (completo e resumido) |
| `instagram` / `facebook` | URLs das redes sociais |
| `mensagem*` | Mensagens enviadas pelo WhatsApp |

> O WhatsApp **deve** conter somente números. Nunca envie credenciais, senhas ou chaves.

## Imagens

As imagens do site estão organizadas em:

```
assets/images/
├── logo/            # Logo (SVG)
├── hero/            # Foto de fundo do topo
├── sobre/           # Fotos da seção "Sobre"
├── servicos/        # Fotos dos cards de serviço
├── material/        # Fotos dos chips (veios/textura/tonalidade/acabamento)
├── antes-depois/    # Fotos do comparador (antes.jpg / depois.jpg)
└── portfolio/
    ├── projeto-01/  # Fotos do projeto 1
    ├── projeto-02/  # Fotos do projeto 2
    ├── projeto-03/  # Fotos do projeto 3
    └── projeto-04/  # Fotos do projeto 4
```

O site já vem com **fotos reais demonstrativas** (arquivos `.jpg` locais, originários do Wikimedia Commons) aplicadas no `index.html` e no `js/config.js`. Elas servem de exemplo e **devem ser trocadas pelas fotos reais da empresa**. Para substituir:

1. Coloque as fotos reais nos diretórios acima mantendo os mesmos nomes (ou prefira **WebP** otimizado, com `width`/`height` definidos).
2. Se mudar nomes/extensões, ajuste os `src` das imagens no `index.html`.
3. Atualize o array `PORTFOLIO` no `js/config.js`.

> Observação legal: as fotos demonstrativas vêm do Wikimedia Commons e são usadas apenas como placeholder. Verifique a licença de cada arquivo antes de manter em produção e prefira substituí-las por fotos próprias.

Créditos das principais fotos demonstrativas (Wikimedia Commons):

- `hero/hero.jpg` — *Kleiner Sitzungssaal des Rathauses Hof* — PantheraLeo1359531 — CC BY 4.0.
- `material/tonalidade.jpg` — *16 wood samples* — CC BY-SA.
- Demais fotos — verifique a página de origem de cada arquivo no Commons.

## Portfólio (galeria dinâmica)

A galeria de projetos é montada automaticamente a partir do array `PORTFOLIO` no arquivo `js/config.js`.

Para **adicionar um novo projeto**, copie um item e edite:

```javascript
{
  tag: "Residencial",               // Rótulo do cartão
  titulo: "Nome do Projeto",        // Título
  descricao: "Descrição curta.",    // Resumo
  imagem: "assets/images/portfolio/projeto-01/imagem-01.jpg", // Capa
  imagens: [                        // Fotos do lightbox
    "assets/images/portfolio/projeto-01/imagem-01.jpg",
    "assets/images/portfolio/projeto-01/imagem-02.jpg"
  ],
  categoria: "Residencial"          // Filtro: Residencial / Comercial / Restauração / Instalação
}
```

Os filtros exibidos (`Todos`, `Residencial`, etc.) funcionam automaticamente conforme as categorias presentes no array. Se quiser adicionar um novo filtro (ex.: "Antes e Depois"), crie um botão no `index.html` com `data-galeria-filtro="Antes e Depois"` e use essa categoria nos itens.

## Estrutura de arquivos

```
arte-final/
├── index.html
├── robots.txt
├── sitemap.xml
├── llms.txt
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   ├── config.js      ← informações da empresa + portfólio
│   └── script.js      ← funcionalidades
└── assets/
    └── images/        ← imagens da empresa
```

## Antes de publicar

- [ ] Preencha `js/config.js` com os dados reais da empresa
- [ ] Substitua as imagens demonstrativas pelas fotos reais
- [ ] Complete os campos `[INSERIR ...]` do `index.html` (endereço, telefone etc.)
- [ ] Atualize `[DOMINIO]` no `robots.txt`, `sitemap.xml`, `llms.txt` e no `index.html` (canonical / Open Graph)
- [ ] Troque as coordenadas do mapa no iframe do OpenStreetMap pela localização real
- [ ] Confirme os serviços oferecidos e os tipos de piso trabalhados

## Publicação no GitHub Pages

```bash
git init
git add .
git commit -m "feat: cria site Arte Final Pisos de Madeira"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

Depois de publicar, ative o **GitHub Pages** em: `Settings → Pages → Source: main` (branch principal).

## Licença

© 2026 Arte Final — Pisos de Madeira. Todos os direitos reservados.