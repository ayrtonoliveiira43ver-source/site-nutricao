# Nutrir — Clínica de Nutrição

Site estático responsivo em português. Mantém a paleta verde, creme e sálvia, com cinco páginas de navegação e um blog de rotina.

## Executar

Na pasta do projeto:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Não exige instalação, build, banco de dados ou chaves de API. Também funciona no GitHub Pages, com publicação da branch `main`, diretório `/(root)`.

## Páginas e personalização

- `index.html`: página principal, serviços em destaque, clínica, avaliações, blog e contato.
- `servicos.html`, `sobre.html`, `avaliacoes.html`: páginas institucionais.
- `blog.html`: oito prévias, busca e filtros por Treino, Alimentação, Culinária e Receitas.
- `artigo.html?post=…`: leitura dos artigos, relacionados e estado de artigo não encontrado.
- `blog.js`: conteúdo, imagens e metadados dos oito artigos. Os parâmetros da URL só selecionam artigos conhecidos.
- `script.js`: cabeçalho, menu, rodapé e aviso dos contatos demonstrativos compartilhados.
- `styles.css`: paleta em `:root`, estilos comuns e página principal; `pages.css` e `blog.css` complementam as páginas.
- `assets/`: fotos locais, favicon e créditos das imagens em `CREDITOS.md`.

Nome da clínica, profissional, telefone, endereço, cidade, e-mail, horários, redes e avaliações são fictícios e estão identificados no site. O e-mail usa o domínio reservado `.example`. Os contatos e redes abrem um aviso de demonstração, sem ligação, envio de dados ou redirecionamento para terceiros. Não há integração de agenda, WhatsApp ou captação de dados.

Antes de usar como clínica real, substitua os dados em `index.html`, `script.js` e nas páginas institucionais; acrescente os dados profissionais verdadeiros e troque os botões demonstrativos pelos contatos corretos. Use apenas depoimentos autorizados e revise os direitos e os créditos das fotos para seu contexto de publicação.

## Imagens e referência

As fotos são públicas e ilustrativas, distribuídas localmente; não representam a clínica nem a profissional fictícias. Consulte as fontes em `assets/CREDITOS.md`. Não dependem de conexão a serviços de imagens no navegador. As fontes tipográficas utilizam alternativas do sistema.

A organização foi desenvolvida a partir das páginas e seções solicitadas. O acesso ao site de referência estava bloqueado pelo ambiente durante a implementação; não houve cópia do seu conteúdo, código ou identidade visual.
