# Nutrir — Clínica de Nutrição

Site estático responsivo em português. Mantém a paleta azul-marinho, azul-petróleo e cinza claro, com cinco páginas de navegação e um blog de rotina. A estrutura foi refeita com base nas sete capturas fornecidas: cabeçalho com redes, apresentação em duas colunas, quatro destaques e quatro atendimentos fotográficos, biografia, diferenciais, avaliações em carrossel, posts sobre fotos, galeria social, contato, mapa ilustrativo e rodapé em três colunas.

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
- `script.js`: cabeçalho, menu, rodapé, contatos demonstrativos e carrosséis de avaliações e posts. Os carrosséis são manuais, com botões acessíveis; o blog da home mostra três posts no desktop e um no celular.
- `styles.css`: paleta em `:root`, estilos comuns e página principal; `pages.css` e `blog.css` complementam as páginas.
- `assets/`: fotos locais, ícones SVG, marca, mapa fictício, fontes Lato locais e créditos das imagens em `CREDITOS.md`.
- `privacidade.html`: informações de privacidade do modelo, sem formulários, rastreadores ou agendamento real.

O Dr. Rafael Oliveira é um personagem fictício, sem titulação ou registro real atribuído. Nome da clínica, profissional, telefone, endereço, cidade, e-mail, horários, redes e avaliações são fictícios e estão identificados no site. O e-mail usa o domínio reservado `.example`. Os contatos e redes abrem um aviso de demonstração, sem ligação, envio de dados ou redirecionamento para terceiros. Não há integração de agenda, WhatsApp ou captação de dados.

Antes de usar como clínica real, substitua os dados em `index.html`, `script.js` e nas páginas institucionais; acrescente os dados profissionais verdadeiros e troque os botões demonstrativos pelos contatos corretos. Use apenas depoimentos autorizados e revise os direitos e os créditos das fotos para seu contexto de publicação.

## Imagens e referência

As fotos são públicas e ilustrativas, distribuídas localmente; não representam a clínica nem o profissional fictícios. Consulte as fontes em `assets/CREDITOS.md`. Não dependem de conexão a serviços de imagens no navegador. A tipografia Lato é servida localmente, com alternativas do sistema e licença em `assets/fonts/OFL.txt`.

A organização e os enquadramentos seguem as sete capturas do site de referência enviadas pelo usuário. A paleta foi atualizada para azul-marinho, azul-petróleo e cinza claro; fotos, textos, logotipo e dados da clínica de referência não foram reutilizados. O mapa é um desenho esquemático de uma localização fictícia, sem integração com mapas externos. A galeria do Instagram é demonstrativa, sem consulta a perfis reais.
