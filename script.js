(() => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const activePage = currentPage === 'artigo.html' ? 'blog.html' : currentPage;
  const brand = '<a class="brand" href="index.html" aria-label="Nutrir, página principal"><svg viewBox="0 0 48 48" width="37" height="43" fill="none" aria-hidden="true"><path d="M24 42V19M24 29C9 29 6 19 7 9C20 10 24 18 24 29ZM24 22C24 10 32 5 42 6C41 17 35 23 24 22Z" stroke="currentColor" stroke-width="1.7"/></svg><span>nutrir<span class="brand-dot">.</span><small>CLÍNICA DE NUTRIÇÃO</small></span></a>';
  const links = [['index.html', 'Principal'], ['servicos.html', 'Serviços'], ['sobre.html', 'Sobre'], ['avaliacoes.html', 'Avaliações'], ['blog.html', 'Blog']];
  const header = document.querySelector('[data-site-header]');
  if (header) header.innerHTML = '<div class="demo-strip"><div class="container"><span>Ciência, acolhimento e comida de verdade.</span><span>Modelo demonstrativo · dados fictícios</span></div></div><div class="header-inner container">' + brand + '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="navigation" aria-label="Abrir menu"><span></span><span></span><span></span></button><nav id="navigation" aria-label="Navegação principal">' + links.map(([href, label]) => '<a href="' + href + '"' + (activePage === href ? ' aria-current="page"' : '') + '>' + label + '</a>').join('') + '<button class="button button-small" type="button" data-demo-contact>Agende uma conversa <span aria-hidden="true"><svg class="ui-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button></nav></div>';
  const footer = document.querySelector('[data-site-footer]');
  if (footer) footer.innerHTML = '<div class="container"><div class="footer-grid"><div class="footer-brand">' + brand + '<p>Nutrição com ciência.<br>Cuidado com afeto.</p><span class="demo-badge">Clínica fictícia para demonstração</span></div><div><h2>Explore</h2><nav aria-label="Navegação do rodapé">' + links.map(([href, label]) => '<a href="' + href + '">' + label + '</a>').join('') + '</nav></div><div><h2>Encontre a Nutrir</h2><address>Rua Jardim do Sol, 123 · Sala 04<br>Centro · Vila Serena – SP<br>CEP 00000-000</address><p>(00) 00000-0000<br>contato@nutrir.example</p><small>Endereço, cidade e contatos fictícios.</small></div><div><h2>Acompanhe</h2><div class="footer-socials"><button type="button" data-demo-contact="Instagram">Instagram <span aria-hidden="true"><svg class="ui-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button><button type="button" data-demo-contact="Facebook">Facebook <span aria-hidden="true"><svg class="ui-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button></div><p>@nutrir.clinica.exemplo<br><small>Redes sociais fictícias.</small></p></div></div><div class="footer-bottom"><span>© ' + new Date().getFullYear() + ' Nutrir · Modelo de site de nutrição.</span><span>Imagens ilustrativas · Conteúdo educativo e demonstrativo.</span><a href="assets/CREDITOS.md">Créditos das imagens <svg class="ui-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div></div>';

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
  navigation?.addEventListener('click', event => { if (event.target.closest('a,button')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation?.classList.contains('is-open')) { closeMenu(); menu.focus(); }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
  document.addEventListener('click', event => {
    if (navigation?.classList.contains('is-open') && !event.target.closest('.header-inner')) closeMenu();
  });

  const dialog = document.createElement('dialog');
  dialog.className = 'demo-dialog';
  dialog.setAttribute('aria-labelledby', 'demo-title');
  dialog.innerHTML = '<button class="dialog-close" type="button" aria-label="Fechar aviso">×</button><p class="eyebrow">CLÍNICA NUTRIR · DEMONSTRAÇÃO</p><h2 id="demo-title">Vamos conversar,<br><em>em breve.</em></h2><p id="demo-message">Os dados desta clínica são fictícios. O agendamento será disponibilizado quando os contatos reais forem adicionados.</p><div class="dialog-contact"><strong>Nutrir Clínica de Nutrição</strong><span>Vila Serena – SP · cidade fictícia</span><span>(00) 00000-0000 · telefone fictício</span><span>contato@nutrir.example · e-mail ilustrativo</span></div><button class="button dialog-confirm" type="button">Entendi <span aria-hidden="true">✓</span></button>';
  document.body.append(dialog);
  let dialogTrigger;
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-demo-contact]');
    if (!trigger) return;
    const platform = trigger.getAttribute('data-demo-contact');
    document.querySelector('#demo-message').textContent = platform ? 'O perfil de ' + platform + ' @nutrir.clinica.exemplo é fictício. Adicionaremos o endereço real na personalização.' : 'Os dados desta clínica são fictícios. O agendamento será disponibilizado quando os contatos reais forem adicionados.';
    dialogTrigger = trigger;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
  dialog.querySelectorAll('button').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); dialogTrigger?.focus(); });
})();
