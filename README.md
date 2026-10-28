# Nutrir — site de nutrição

Modelo responsivo em português, em HTML, CSS e JavaScript, sem dependências de build.

## Executar

Na pasta do projeto, execute `python3 -m http.server 8000 --bind 0.0.0.0`.

## Personalizar

- `index.html`: marca, textos, serviços, nome e registro profissional, modalidades e contatos.
- `styles.css`: cores em `:root`, fontes e estilos responsivos.
- `script.js`: menu mobile e botão de contato. O botão exibe um aviso de demonstração; substitua-o por um link de WhatsApp ou agendamento com o contato real.

Ilustração local em `assets/prato.svg`, substituível por uma fotografia. Fontes: Google Fonts, com fallback local. Para independência desse serviço, hospede as fontes localmente respeitando suas licenças.

Este modelo não coleta dados nem realiza agendamentos. Substitua o conteúdo provisório e inclua os dados profissionais antes de publicar.
