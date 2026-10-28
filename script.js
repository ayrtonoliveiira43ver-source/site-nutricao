(() => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const activePage = currentPage === 'artigo.html' ? 'blog.html' : currentPage;
  const icon = name => `<svg aria-hidden="true" focusable="false"><use href="assets/icons.svg#${name}"/></svg>`;
  const brand = '<a class="brand" href="index.html" aria-label="Clínica Nutrir, página principal"><img src="assets/marca.svg" width="80" height="88" alt=""><span>CLÍNICA NUTRIR<small>NUTRIÇÃO E BEM-ESTAR</small></span></a>';
  const links = [['index.html', 'Página Principal'], ['servicos.html', 'Serviços'], ['sobre.html', 'Sobre'], ['avaliacoes.html', 'Avaliações'], ['blog.html', 'Blog']];
  const header = document.querySelector('[data-site-header]');
  if (header) header.innerHTML = '<div class="header-inner container">' + brand + '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="navigation" aria-label="Abrir menu"><span></span><span></span><span></span></button><nav id="navigation" aria-label="Navegação principal">' + links.map(([href, label]) => '<a href="' + href + '"' + (activePage === href ? ' aria-current="page"' : '') + '>' + label + '</a>').join('') + '</nav><div class="header-socials"><button type="button" data-demo-contact="Instagram" aria-label="Instagram fictício da clínica">' + icon('instagram') + '</button><button type="button" data-demo-contact="Facebook" aria-label="Facebook fictício da clínica">' + icon('facebook') + '</button><button type="button" data-demo-contact="WhatsApp" aria-label="Contato fictício pelo WhatsApp">' + icon('whatsapp') + '</button></div></div>';
  const footer = document.querySelector('[data-site-footer]');
  if (footer) footer.innerHTML = '<div class="footer-main"><div class="container footer-grid"><div class="footer-brand">' + brand + '</div><div class="footer-information"><p><strong>Clínica Nutrir · Nutrição e bem-estar</strong></p><address>Rua Jardim do Sol, 123 · Sala 04<br>Centro · Vila Serena – SP · CEP 00000-000</address><p>Telefone/WhatsApp: (00) 00000-0000<br>contato@nutrir.example</p><small>Clínica, profissional, cidade e contatos fictícios.</small></div><div class="footer-socials"><button type="button" data-demo-contact="WhatsApp">' + icon('whatsapp') + '<span>WhatsApp: (00) 00000-0000</span></button><button type="button" data-demo-contact="Instagram">' + icon('instagram') + '<span>Instagram:<br>@nutrir.clinica.exemplo</span></button><button type="button" data-demo-contact="Facebook">' + icon('facebook') + '<span>Facebook: Clínica Nutrir Exemplo</span></button><button type="button" data-demo-contact="YouTube">' + icon('youtube') + '<span>YouTube: Nutrir Exemplo</span></button><small>Perfis ilustrativos, sem contas reais vinculadas.</small></div></div></div><div class="footer-privacy"><a href="privacidade.html">Privacidade deste modelo</a><span aria-hidden="true">·</span><a href="assets/CREDITOS.md">Créditos das imagens</a></div><div class="footer-copyright">Copyright © ' + new Date().getFullYear() + ' Clínica Nutrir · Site demonstrativo</div>';

  const floating = document.createElement('button');
  floating.className = 'floating-contact';
  floating.type = 'button';
  floating.setAttribute('data-demo-contact', 'WhatsApp');
  floating.setAttribute('aria-label', 'Abrir aviso de contato fictício pelo WhatsApp');
  floating.innerHTML = icon('whatsapp');
  document.body.append(floating);

  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  function closeMenu() {
    if (!menu || !navigation) return;
    navigation.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Abrir menu');
  }
  menu?.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  navigation?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation?.classList.contains('is-open')) { closeMenu(); menu.focus(); }
  });
  window.matchMedia('(min-width: 1001px)').addEventListener('change', closeMenu);
  document.addEventListener('click', event => {
    if (navigation?.classList.contains('is-open') && !event.target.closest('.header-inner')) closeMenu();
  });

  const dialog = document.createElement('dialog');
  dialog.className = 'demo-dialog';
  dialog.setAttribute('aria-labelledby', 'demo-title');
  dialog.innerHTML = '<button class="dialog-close" type="button" aria-label="Fechar aviso">×</button><p class="eyebrow">CLÍNICA NUTRIR · DEMONSTRAÇÃO</p><h2 id="demo-title">Contato da clínica</h2><p id="demo-message"></p><div class="dialog-contact"><strong>Clínica Nutrir</strong><span>Vila Serena – SP · cidade fictícia</span><span>(00) 00000-0000 · telefone fictício</span><span>contato@nutrir.example · e-mail ilustrativo</span></div><button class="button dialog-confirm" type="button">Entendi</button>';
  document.body.append(dialog);
  let dialogTrigger;
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-demo-contact]');
    if (!trigger) return;
    const platform = trigger.getAttribute('data-demo-contact');
    let message = 'Os dados desta clínica são fictícios. O contato será disponibilizado quando as informações reais forem adicionadas.';
    if (platform === 'Agendamento') message = 'Este é um agendamento demonstrativo. Nenhuma consulta será marcada; o sistema real será vinculado na personalização.';
    else if (platform === 'WhatsApp') message = 'O número (00) 00000-0000 é fictício. Este botão não abre conversas nem envia mensagens pelo WhatsApp.';
    else if (platform) message = 'O perfil de ' + platform + ' é fictício. Esta é uma demonstração, sem vínculo com uma conta real.';
    document.querySelector('#demo-message').textContent = message;
    dialogTrigger = trigger;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
  dialog.querySelectorAll('button').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); dialogTrigger?.focus(); });

  const reviewSlides = [...document.querySelectorAll('[data-review-slide]')];
  if (reviewSlides.length) {
    const dots = [...document.querySelectorAll('[data-review-dot]')];
    let current = 0;
    function showReview(index) {
      current = (index + reviewSlides.length) % reviewSlides.length;
      reviewSlides.forEach((slide, i) => { slide.hidden = i !== current; });
      dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    }
    document.querySelector('[data-review-prev]').addEventListener('click', () => showReview(current - 1));
    document.querySelector('[data-review-next]').addEventListener('click', () => showReview(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => showReview(i)));
    showReview(0);
  }

  const posts = [...document.querySelectorAll('[data-home-post]')];
  if (posts.length) {
    const pagination = document.querySelector('[data-post-pagination]');
    const mobile = window.matchMedia('(max-width: 680px)');
    let perPage = mobile.matches ? 1 : 3;
    let current = 0;
    function renderPosts() {
      posts.forEach((post, i) => { post.hidden = i < current * perPage || i >= (current + 1) * perPage; });
      [...pagination.children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === current)));
    }
    function makePagination() {
      pagination.replaceChildren();
      for (let i = 0; i < Math.ceil(posts.length / perPage); i++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('aria-label', 'Mostrar página ' + (i + 1) + ' dos posts');
        button.setAttribute('aria-controls', 'home-posts');
        button.addEventListener('click', () => { current = i; renderPosts(); });
        pagination.append(button);
      }
      renderPosts();
    }
    mobile.addEventListener('change', () => { perPage = mobile.matches ? 1 : 3; current = 0; makePagination(); });
    makePagination();
  }
})();
