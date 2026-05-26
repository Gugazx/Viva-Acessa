document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    'inicio',
    'login',
    'cadastroPessoa',
    'listaAtendimento',
    'eventosMarcados',
    'acessibilidade',
  ];

  const translations = {
    pt: {
      appTitle: 'Viva Acessa',
      headerSubtitle: 'Portal da ONG com foco em inclusão e serviços comunitários',
      inicio: 'Início',
      login: 'Login',
      criarConta: 'Criar Conta',
      cadastroPessoa: 'Cadastro de Pessoa',
      listaAtendimento: 'Lista de Atendimento',
      eventosMarcados: 'Eventos Marcados',
      acessibilidade: 'Acessibilidade',
      homeIntro: 'Este é o portal da nossa organização voltada à inclusão, apoio social e informação para a comunidade.',
      homeInstructions: 'Use o menu ou os botões abaixo para acessar Login ou criar conta.',
      goToLogin: 'Ir para Login',
      createAccount: 'Criar Conta',
      labelEmail: 'Email',
      labelPassword: 'Senha',
      labelConfirmPassword: 'Confirmar senha',
      labelName: 'Nome',
      labelPhone: 'Telefone',
      btnEnter: 'Entrar',
      btnRegister: 'Cadastrar',
      alertLoginSuccess: 'Login enviado com sucesso!',
      alertAccountCreated: 'Conta criada com sucesso! Agora complete o cadastro de pessoa.',
      alertPasswordMismatch: 'As senhas não coincidem.',
      thSolicitante: 'Solicitante',
      thTipo: 'Tipo de Atendimento',
      thData: 'Data',
      eventName: 'Nome do Evento',
      date: 'Data',
      local: 'Local',
      motivo: 'Motivo',
      fontLabel: 'Fonte da página:',
      sizeLabel: 'Tamanho da fonte:',
      contactPhone: '<strong>Telefone:</strong> (11) 4000-0000',
      contactEmail: '<strong>Email:</strong> contato@vivaacessa.org',
      contactSocial: '<strong>Redes sociais:</strong> Instagram: @vivaacessa | Facebook: /vivaacessa',
      contactPlace: '<strong>Local:</strong> Rua Exemplo, 123 - Centro, Cidade/UF',
      languageLabel: 'Idioma',
      keyboardTitle: 'Atalhos de teclado',
      keyboardLine1: '← / → ou J / K — navegar entre páginas',
      keyboardLine2: 'Home — ir para Início',
      keyboardLine3: 'End — ir para Acessibilidade',
      keyboardLine4: '1..6 — ir para cada seção do menu',
      keyboardLine5: 'Enter — ativar botão de menu focado',
    },
    en: {
      appTitle: 'Viva Acessa',
      headerSubtitle: 'NGO portal focused on inclusion and community services',
      inicio: 'Home',
      login: 'Login',
      criarConta: 'Create Account',
      cadastroPessoa: 'Person Registration',
      listaAtendimento: 'Service List',
      eventosMarcados: 'Scheduled Events',
      acessibilidade: 'Accessibility',
      homeIntro: 'This is the portal of our organization focused on inclusion, social support and community information.',
      homeInstructions: 'Use the menu above or the buttons below to go to Login or create an account.',
      goToLogin: 'Go to Login',
      createAccount: 'Create Account',
      labelEmail: 'Email',
      labelPassword: 'Password',
      labelConfirmPassword: 'Confirm password',
      labelName: 'Full name',
      labelPhone: 'Phone',
      btnEnter: 'Enter',
      btnRegister: 'Register',
      alertLoginSuccess: 'Login submitted successfully!',
      alertAccountCreated: 'Account created successfully! Now complete the person registration.',
      alertPasswordMismatch: 'Passwords do not match.',
      thSolicitante: 'Requester',
      thTipo: 'Service Type',
      thData: 'Date',
      eventName: 'Event Name',
      date: 'Date',
      local: 'Location',
      motivo: 'Reason',
      fontLabel: 'Page font:',
      sizeLabel: 'Font size:',
      contactPhone: '<strong>Phone:</strong> (11) 4000-0000',
      contactEmail: '<strong>Email:</strong> contato@vivaacessa.org',
      contactSocial: '<strong>Social:</strong> Instagram: @vivaacessa | Facebook: /vivaacessa',
      contactPlace: '<strong>Address:</strong> Rua Exemplo, 123 - Centro, Cidade/UF',
      languageLabel: 'Language',
      keyboardTitle: 'Keyboard shortcuts',
      keyboardLine1: '← / → or J / K — navigate pages',
      keyboardLine2: 'Home — go to Home',
      keyboardLine3: 'End — go to Accessibility',
      keyboardLine4: '1..6 — jump to menu sections',
      keyboardLine5: 'Enter — activate focused menu button',
    }
    ,
    es: {
      appTitle: 'Viva Acessa',
      headerSubtitle: 'Portal ONG enfocado en inclusión y servicios comunitarios',
      inicio: 'Inicio',
      login: 'Iniciar sesión',
      criarConta: 'Crear Cuenta',
      cadastroPessoa: 'Registro de Persona',
      listaAtendimento: 'Lista de Atención',
      eventosMarcados: 'Eventos Programados',
      acessibilidade: 'Accesibilidad',
      homeIntro: 'Este es el portal de nuestra organización orientada a la inclusión, apoyo social e información comunitaria.',
      homeInstructions: 'Usa el menú o los botones abajo para ir a Iniciar sesión o crear cuenta.',
      goToLogin: 'Ir a Iniciar sesión',
      createAccount: 'Crear Cuenta',
      labelEmail: 'Correo',
      labelPassword: 'Contraseña',
      labelConfirmPassword: 'Confirmar contraseña',
      labelName: 'Nombre completo',
      labelPhone: 'Teléfono',
      btnEnter: 'Entrar',
      btnRegister: 'Registrarse',
      alertLoginSuccess: '¡Inicio de sesión enviado con éxito!',
      alertAccountCreated: '¡Cuenta creada con éxito! Ahora completa el registro de persona.',
      alertPasswordMismatch: 'Las contraseñas no coinciden.',
      thSolicitante: 'Solicitante',
      thTipo: 'Tipo de Atención',
      thData: 'Fecha',
      eventName: 'Nombre del Evento',
      date: 'Fecha',
      local: 'Lugar',
      motivo: 'Motivo',
      fontLabel: 'Fuente de la página:',
      sizeLabel: 'Tamaño de la fuente:',
      contactPhone: '<strong>Teléfono:</strong> (11) 4000-0000',
      contactEmail: '<strong>Correo:</strong> contato@vivaacessa.org',
      contactSocial: '<strong>Redes:</strong> Instagram: @vivaacessa | Facebook: /vivaacessa',
      contactPlace: '<strong>Dirección:</strong> Rua Exemplo, 123 - Centro, Cidade/UF',
      languageLabel: 'Idioma',
      keyboardTitle: 'Atajos de teclado',
      keyboardLine1: '← / → o J / K — navegar entre páginas',
      keyboardLine2: 'Home — ir a Inicio',
      keyboardLine3: 'End — ir a Accesibilidad',
      keyboardLine4: '1..6 — saltar a secciones del menú',
      keyboardLine5: 'Enter — activar botón de menú enfocado',
    }
  };

  const langOptions = [
    { label: 'Português', value: 'pt' },
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
  ];

  const fontOptions = [
    { label: "Padrão (Arial)", value: "Arial, sans-serif" },
    { label: "Serifada (Times New Roman)", value: "'Times New Roman', serif" },
    { label: "Monospace (Courier New)", value: "'Courier New', monospace" },
    { label: "Semifonteada (Verdana)", value: "Verdana, sans-serif" },
  ];

  const fontSizeOptions = [
    { label: "Padrão (16px)", value: 16 },
    { label: "Maior (18px)", value: 18 },
    { label: "Grande (20px)", value: 20 },
    { label: "Muito grande (22px)", value: 22 },
  ];

  const state = {
    currentPage: 'inicio',
    lang: 'pt',
    theme: 'blue',
    fontFamily: "Arial, sans-serif",
    fontSize: 16,
    loginData: { email: "", senha: "" },
    createAccount: { email: "", senha: "", confirmarSenha: "" },
    pessoa: { nome: "", email: "", telefone: "" },
    evento: { nome: "", data: "", local: "", motivo: "" },
    events: [
      { id: 1, nome: "Oficina de Inclusão Digital", data: "2026-05-30", local: "Rua Augusta, 1500 - Consolação, São Paulo - SP", motivo: "Capacitação" },
      { id: 2, nome: "Mutirão de Saúde", data: "2026-06-05", local: "Praça da Sé, s/n - Centro, São Paulo - SP", motivo: "Atendimento e triagem" },
      { id: 3, nome: "Feira de Doações", data: "2026-06-12", local: "Av. Brasil, 200 - Penha, Rio de Janeiro - RJ", motivo: "Distribuição de alimentos e roupas" },
      { id: 4, nome: "Roda de Conversa", data: "2026-06-20", local: "Pelourinho, Salvador - BA", motivo: "Apoio psicossocial" },
      { id: 5, nome: "Ação Cidadã", data: "2026-07-03", local: "Esplanada dos Ministérios, Brasília - DF", motivo: "Informação e serviços" },
      { id: 6, nome: "Oficina de Emprego", data: "2026-07-10", local: "Praça da Liberdade, Belo Horizonte - MG", motivo: "Capacitação profissional" },
      { id: 7, nome: "Mutirão Jurídico", data: "2026-07-18", local: "Largo da Ordem, Curitiba - PR", motivo: "Orientação jurídica" },
      { id: 8, nome: "Campanha de Vacinação", data: "2026-07-25", local: "Parque Farroupilha, Porto Alegre - RS", motivo: "Saúde pública" },
      { id: 9, nome: "Inclusão Digital na Comunidade", data: "2026-08-02", local: "Manaus - AM (Centro Comunitário)", motivo: "Capacitação tecnológica" },
      { id: 10, nome: "Mutirão de Educação", data: "2026-08-12", local: "Boa Viagem, Recife - PE", motivo: "Oficinas educativas" },
      { id: 11, nome: "Encontro de Jovens", data: "2026-08-20", local: "Meireles, Fortaleza - CE", motivo: "Engajamento comunitário" },
    ],
    atendimentos: [
      { id: 1, nome: "Maria Silva", motivo: "Apoio social", status: "Concluído" },
      { id: 2, nome: "João Santos", motivo: "Orientação jurídica", status: "Em andamento" },
      { id: 3, nome: "Ana Lima", motivo: "Encaminhamento médico", status: "Agendado" },
      { id: 4, nome: "Carlos Pereira", motivo: "Apoio psicológico", status: "Em andamento" },
      { id: 5, nome: "Renata Souza", motivo: "Reintegração social", status: "Concluído" },
      { id: 6, nome: "Bruno Costa", motivo: "Auxílio alimentação", status: "Agendado" },
      { id: 7, nome: "Larissa Almeida", motivo: "Encaminhamento de trabalho", status: "Em andamento" },
      { id: 8, nome: "Fábio Oliveira", motivo: "Orientação jurídica", status: "Concluído" },
      { id: 9, nome: "Patrícia Gomes", motivo: "Atendimento médico", status: "Agendado" },
    ],
  };

  const style = document.createElement("style");
  style.textContent = `
    .app { display: flex; flex-direction: column; min-height: 100vh; }
    .layout { display: flex; flex: 1; }
    .sidebar { width: 240px; padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; }
    .sidebar-bottom { margin-top: auto; padding-top: 12px; display: flex; flex-direction: column; gap: 8px; }
    .content { flex: 1; padding: 24px; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f7fbff;
      color: #0b3d91;
    }
    .vivaacessa-header {
      background-color: #0b3d91;
      color: #fff;
      padding: 18px 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 14px;
    }
    .header-brand { display: flex; align-items: center; gap: 12px; }
    .vivaacessa-header h1 { font-size: 2.4rem; margin: 0; }
    .vivaacessa-header p { font-size: 0.98rem; margin: 0; }
    .logo-icon { width: 56px; height: 56px; object-fit: contain; border-radius: 8px; background: transparent; padding: 0; display: none; }
    .header-text { text-align: left; }
    .center-logo { display: none; }
    .center-icon { display: none; }
    .nav-brand { text-align: center; margin: 8px 0 14px 0; }
    .nav-title { font-size: 1.25rem; font-weight: 800; color: #054a91; margin: 0; }
    .vivaacessa-nav {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 8px;
      background-color: #e8f1ff;
      border-right: 1px solid #d6e2ff;
      height: 100%;
      box-sizing: border-box;
    }
    .vivaacessa-nav button {
      border: 2px solid #0b3d91;
      background-color: #fff;
      color: #0b3d91;
      padding: 10px 14px;
      border-radius: 8px;
      cursor: pointer;
      text-align: left;
      width: 100%;
    }
    .vivaacessa-nav button.active {
      background-color: #0b3d91;
      color: #fff;
    }
    .vivaacessa-section {
      max-width: 960px;
      margin: 0 auto 24px auto;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 14px rgba(11, 61, 145, 0.12);
      padding: 24px;
    }
    .vivaacessa-section.inicio-section {
      max-width: 1180px;
      padding: 36px 40px;
    }
    .vivaacessa-section h2 {
      margin-top: 0;
      margin-bottom: 16px;
      border-bottom: 2px solid #0b3d91;
      padding-bottom: 8px;
    }
    .vivaacessa-form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    .vivaacessa-form-group label {
      margin-bottom: 6px;
      font-weight: 700;
    }
    .vivaacessa-form-group input {
      padding: 10px 12px;
      border-radius: 8px;
      border: 1px solid #0b3d91;
      font-size: 1rem;
    }
    .vivaacessa-button {
      background-color: #0b3d91;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 12px 18px;
      cursor: pointer;
      font-size: 1rem;
    }
    .vivaacessa-action-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 20px;
    }
    .vivaacessa-table {
      width: 100%;
      border-collapse: collapse;
    }
    .vivaacessa-table th,
    .vivaacessa-table td {
      padding: 12px;
      border-bottom: 1px solid #d6e2ff;
      text-align: left;
    }
    .vivaacessa-table th {
      border-bottom: 2px solid #0b3d91;
    }
    .vivaacessa-accessibility {
      background-color: #e8f1ff;
      padding: 18px;
      border-radius: 10px;
      border: 1px solid #c5d7ff;
    }
    .lang-box { background: linear-gradient(180deg,#ffffff, #f1f7ff); padding: 12px; border-radius: 10px; border: 1px solid #d6e2ff; }
    .lang-box label { display: block; color: #054a91; margin-bottom: 6px; }
    .vivaacessa-select { appearance: none; -webkit-appearance: none; background: #fff; }

    [data-theme="dark"] body {
      background-color: #000000;
      color: #ffffff;
    }
    [data-theme="dark"] .vivaacessa-header {
      background-color: #000000;
      color: #ffffff;
    }
    [data-theme="dark"] .vivaacessa-nav {
      background-color: #111111;
      border-right: 1px solid #222222;
    }
    [data-theme="dark"] .vivaacessa-nav button {
      background-color: #111111;
      color: #ffffff;
      border-color: #333333;
    }
    [data-theme="dark"] .vivaacessa-nav button.active {
      background-color: #222222;
      color: #ffffff;
    }
    [data-theme="dark"] .vivaacessa-section {
      background-color: #111111;
      color: #ffffff;
      border: 1px solid #333333;
      box-shadow: none;
    }
    [data-theme="dark"] .vivaacessa-form-group input {
      background: #0f0f0f;
      color: #fff;
      border-color: #333;
    }
  `;
  document.head.appendChild(style);

  const app = document.createElement("div");
  app.className = 'app';

  const header = document.createElement("header");
  header.className = "vivaacessa-header";
  header.innerHTML = `
    <div class="header-brand">
      <div class="header-text">
        <h1></h1>
        <p></p>
      </div>
    </div>
  `;

  const langSelect = document.createElement('select');
  langSelect.setAttribute('aria-label', 'Select language');
  langSelect.style.marginLeft = '12px';
  langOptions.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt.value;
    o.textContent = opt.label;
    if (opt.value === state.lang) o.selected = true;
    langSelect.appendChild(o);
  });
  langSelect.addEventListener('change', (e) => {
    state.lang = e.target.value;
    renderPage();
    buildNav();
  });

  const nav = document.createElement("nav");
  nav.className = "vivaacessa-nav";

  const main = document.createElement("main");
  main.setAttribute("aria-live", "polite");

  function buildNav() {
    nav.innerHTML = "";
    nav.style.fontFamily = state.fontFamily;
    nav.style.fontSize = state.fontSize + "px";
    pages.forEach((pageKey) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = t(pageKey);
      button.className = pageKey === state.currentPage ? "active" : "";
      if (pageKey === state.currentPage) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
      button.style.fontFamily = state.fontFamily;
      button.style.fontSize = state.fontSize + "px";
      button.tabIndex = 0;
      button.addEventListener("click", () => {
        state.currentPage = pageKey;
        renderPage();
        buildNav();
      });
      nav.appendChild(button);
    });
  }

  function createFormGroup(labelText, inputType, inputName, inputValue) {
    const group = document.createElement("div");
    group.className = "vivaacessa-form-group";

    const label = document.createElement("label");
    label.htmlFor = inputName;
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = inputType;
    input.id = inputName;
    input.name = inputName;
    input.value = inputValue;

    group.appendChild(label);
    group.appendChild(input);
    return { group, input };
  }

  function t(key) {
    return (translations[state.lang] && translations[state.lang][key]) || key;
  }

  function renderPage() {
    document.documentElement.style.fontFamily = state.fontFamily;
    document.documentElement.style.fontSize = state.fontSize + "px";
    if (header) {
      header.style.fontFamily = state.fontFamily;
      header.style.fontSize = state.fontSize + "px";
    }
    if (nav) {
      nav.style.fontFamily = state.fontFamily;
      nav.style.fontSize = state.fontSize + "px";
    }
    try {
      if (nav) {
        nav.querySelectorAll('button').forEach((b) => {
          b.style.fontFamily = state.fontFamily;
          b.style.fontSize = state.fontSize + 'px';
        });
      }
      if (header) {
        header.querySelectorAll('*').forEach((el) => {
          el.style.fontFamily = state.fontFamily;
          el.style.fontSize = state.fontSize + 'px';
        });
      }
      document.querySelectorAll('.vivaacessa-button').forEach((b) => {
        b.style.fontFamily = state.fontFamily;
        b.style.fontSize = state.fontSize + 'px';
      });
    } catch (e) {
    }
    document.documentElement.setAttribute('data-theme', state.theme);
    main.innerHTML = "";
    const section = document.createElement("section");
    section.className = "vivaacessa-section";
    if (state.currentPage === 'inicio') {
      section.classList.add('inicio-section');
    }

    const title = document.createElement("h2");
    title.textContent = t(state.currentPage);
    section.appendChild(title);

      const h1 = header.querySelector('h1');
      const hp = header.querySelector('p');
      if (h1) h1.textContent = t('appTitle');
      if (hp) hp.textContent = t('headerSubtitle');
      if (typeof langSelect !== 'undefined') langSelect.value = state.lang;
      const langBoxLabel = document.querySelector('.lang-box label');
      if (langBoxLabel) langBoxLabel.textContent = t('languageLabel');
      const navTitleEl = document.querySelector('.nav-brand .nav-title');
      if (navTitleEl) navTitleEl.textContent = t('appTitle');

    if (state.currentPage === 'inicio') {
      section.innerHTML += `
        <p>${t('homeIntro')}</p>
        <p>${t('homeInstructions')}</p>
      `;

      const actions = document.createElement("div");
      actions.className = "vivaacessa-action-row";

      const loginButton = document.createElement("button");
      loginButton.type = "button";
      loginButton.className = "vivaacessa-button";
      loginButton.textContent = t('goToLogin');
      loginButton.addEventListener("click", () => {
        state.currentPage = 'login';
        renderPage();
        buildNav();
      });

      const createButton = document.createElement("button");
      createButton.type = "button";
      createButton.className = "vivaacessa-button";
      createButton.textContent = t('createAccount');
      createButton.addEventListener("click", () => {
        state.currentPage = 'criarConta';
        renderPage();
        buildNav();
      });

      actions.appendChild(loginButton);
      actions.appendChild(createButton);
      section.appendChild(actions);
    }

    if (state.currentPage === 'login') {
      const form = document.createElement("form");
      const emailGroup = createFormGroup(t('labelEmail'), "email", "login-email", state.loginData.email);
      const passGroup = createFormGroup(t('labelPassword'), "password", "login-senha", state.loginData.senha);

      emailGroup.input.addEventListener("input", (event) => {
        state.loginData.email = event.target.value;
      });
      passGroup.input.addEventListener("input", (event) => {
        state.loginData.senha = event.target.value;
      });

      form.appendChild(emailGroup.group);
      form.appendChild(passGroup.group);

      const button = document.createElement("button");
      button.type = "submit";
      button.className = "vivaacessa-button";
      button.textContent = t('btnEnter');
      form.appendChild(button);

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert(t('alertLoginSuccess'));
      });

      section.appendChild(form);
    }

    if (state.currentPage === 'criarConta') {
      const form = document.createElement("form");
      const emailGroup = createFormGroup(t('labelEmail'), "email", "create-email", state.createAccount.email);
      const passGroup = createFormGroup(t('labelPassword'), "password", "create-senha", state.createAccount.senha);
      const confirmGroup = createFormGroup(t('labelConfirmPassword'), "password", "create-confirm", state.createAccount.confirmarSenha);

      emailGroup.input.addEventListener("input", (event) => {
        state.createAccount.email = event.target.value;
      });
      passGroup.input.addEventListener("input", (event) => {
        state.createAccount.senha = event.target.value;
      });
      confirmGroup.input.addEventListener("input", (event) => {
        state.createAccount.confirmarSenha = event.target.value;
      });

      form.appendChild(emailGroup.group);
      form.appendChild(passGroup.group);
      form.appendChild(confirmGroup.group);

      const button = document.createElement("button");
      button.type = "submit";
      button.className = "vivaacessa-button";
      button.textContent = t('createAccount');
      form.appendChild(button);

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (state.createAccount.senha !== state.createAccount.confirmarSenha) {
          alert(t('alertPasswordMismatch'));
          return;
        }
        alert(t('alertAccountCreated'));
        state.currentPage = 'cadastroPessoa';
        renderPage();
        buildNav();
      });

      section.appendChild(form);
    }

    if (state.currentPage === 'cadastroPessoa') {
      const form = document.createElement("form");
      const nomeGroup = createFormGroup(t('labelName'), "text", "pessoa-nome", state.pessoa.nome);
      const emailGroup = createFormGroup(t('labelEmail'), "email", "pessoa-email", state.pessoa.email);
      const telGroup = createFormGroup(t('labelPhone'), "tel", "pessoa-telefone", state.pessoa.telefone);

      nomeGroup.input.addEventListener("input", (event) => {
        state.pessoa.nome = event.target.value;
      });
      emailGroup.input.addEventListener("input", (event) => {
        state.pessoa.email = event.target.value;
      });
      telGroup.input.addEventListener("input", (event) => {
        state.pessoa.telefone = event.target.value;
      });

      form.appendChild(nomeGroup.group);
      form.appendChild(emailGroup.group);
      form.appendChild(telGroup.group);

      const button = document.createElement("button");
      button.type = "submit";
      button.className = "vivaacessa-button";
      button.textContent = t('btnRegister');
      form.appendChild(button);

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Pessoa cadastrada com sucesso!");
      });

      section.appendChild(form);
    }

    if (state.currentPage === 'listaAtendimento') {
      const table = document.createElement("table");
      table.className = "vivaacessa-table";
      table.innerHTML = `
        <thead>
          <tr>
            <th>${t('thSolicitante')}</th>
            <th>${t('thTipo')}</th>
            <th>${t('thData')}</th>
            <th>ID</th>
          </tr>
        </thead>
      `;
      const tbody = document.createElement("tbody");
      state.atendimentos.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.nome}</td>
          <td>${item.motivo}</td>
          <td>${item.status}</td>
          <td>${item.id}</td>
        `;
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      section.appendChild(table);
    }

    if (state.currentPage === 'eventosMarcados') {
      const table = document.createElement('table');
      table.className = 'vivaacessa-table';
      table.innerHTML = `
        <thead>
          <tr>
            <th>Nome do Evento</th>
            <th>Data</th>
            <th>Local</th>
            <th>Motivo</th>
          </tr>
        </thead>
      `;
      const tbody = document.createElement('tbody');
      state.events.forEach((ev) => {
        const row = document.createElement('tr');
        const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ev.local || ev.nome);
        row.innerHTML = `
          <td>${ev.nome}</td>
          <td>${ev.data}</td>
          <td><a href="${mapsUrl}" target="_blank" rel="noopener">${ev.local}</a></td>
          <td>${ev.motivo || ''}</td>
        `;
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      section.appendChild(table);
    }

    if (state.currentPage === 'acessibilidade') {
      const accessCard = document.createElement("div");
      accessCard.className = "vivaacessa-accessibility";
      accessCard.innerHTML = `
        <p>${t('contactPhone')}</p>
        <p>${t('contactEmail')}</p>
        <p>${t('contactSocial')}</p>
        <p>${t('contactPlace')}</p>
      `;

      const fontCard = document.createElement("div");
      fontCard.className = "vivaacessa-accessibility";
      const fontLabel = document.createElement("label");
      fontLabel.textContent = t('fontLabel');
      fontLabel.style.fontWeight = "700";
      fontLabel.style.display = "block";
      fontLabel.style.marginBottom = "10px";

      const fontSelect = document.createElement("select");
      fontSelect.style.padding = "10px 12px";
      fontSelect.style.borderRadius = "8px";
      fontSelect.style.border = "1px solid #0b3d91";
      fontSelect.style.width = "100%";
      fontSelect.style.marginBottom = "16px";
      fontOptions.forEach((option) => {
        const opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.label;
        if (option.value === state.fontFamily) opt.selected = true;
        fontSelect.appendChild(opt);
      });

      fontSelect.addEventListener("change", (event) => {
        state.fontFamily = event.target.value;
        renderPage();
      });

      fontCard.appendChild(fontLabel);
      fontCard.appendChild(fontSelect);

      const sizeLabel = document.createElement("label");
      sizeLabel.textContent = t('sizeLabel');
      sizeLabel.style.fontWeight = "700";
      sizeLabel.style.display = "block";
      sizeLabel.style.marginBottom = "10px";

      const sizeSelect = document.createElement("select");
      sizeSelect.style.padding = "10px 12px";
      sizeSelect.style.borderRadius = "8px";
      sizeSelect.style.border = "1px solid #0b3d91";
      sizeSelect.style.width = "100%";
      sizeSelect.style.marginBottom = "16px";
      fontSizeOptions.forEach((option) => {
        const opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.label;
        if (option.value === state.fontSize) opt.selected = true;
        sizeSelect.appendChild(opt);
      });

      sizeSelect.addEventListener("change", (event) => {
        state.fontSize = Number(event.target.value);
        renderPage();
      });

      fontCard.appendChild(sizeLabel);
      fontCard.appendChild(sizeSelect);
      section.appendChild(accessCard);
      section.appendChild(fontCard);

      const keyboardCard = document.createElement('div');
      keyboardCard.className = 'vivaacessa-accessibility';
      keyboardCard.style.marginTop = '16px';
      keyboardCard.innerHTML = `
        <h3>${t('keyboardTitle')}</h3>
        <ul>
          <li>${t('keyboardLine1')}</li>
          <li>${t('keyboardLine2')}</li>
          <li>${t('keyboardLine3')}</li>
          <li>${t('keyboardLine4')}</li>
          <li>${t('keyboardLine5')}</li>
        </ul>
      `;
      section.appendChild(keyboardCard);
    }

    main.appendChild(section);
  }

  buildNav();
  renderPage();

  const layout = document.createElement('div');
  layout.className = 'layout';
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  const navBrand = document.createElement('div');
  navBrand.className = 'nav-brand';
  const navTitle = document.createElement('div');
  navTitle.className = 'nav-title';
  navTitle.textContent = t('appTitle');
  navBrand.appendChild(navTitle);
  sidebar.appendChild(navBrand);
  sidebar.appendChild(nav);
  const sidebarBottom = document.createElement('div');
  sidebarBottom.className = 'sidebar-bottom';
  const langBox = document.createElement('div');
  langBox.className = 'lang-box';
  const langLabel = document.createElement('label');
  langLabel.textContent = t('languageLabel');
  langLabel.style.fontWeight = '700';
  langLabel.style.marginBottom = '6px';
  langBox.appendChild(langLabel);
  langSelect.className = 'vivaacessa-select';
  langSelect.style.width = '100%';
  langSelect.style.padding = '12px';
  langSelect.style.fontSize = (state.fontSize + 2) + 'px';
  langSelect.style.borderRadius = '8px';
  langSelect.style.border = '1px solid #0b3d91';
  langBox.appendChild(langSelect);
  sidebarBottom.appendChild(langBox);
  sidebar.appendChild(sidebarBottom);
  const content = document.createElement('div');
  content.className = 'content';
  content.appendChild(main);

  app.appendChild(header);
  layout.appendChild(sidebar);
  layout.appendChild(content);
  app.appendChild(layout);
  document.body.appendChild(app);

  function focusFirstInputForCurrentPage() {
    const mapping = {
      login: 'login-email',
      criarConta: 'create-email',
      cadastroPessoa: 'pessoa-nome',
    };
    const inputId = mapping[state.currentPage];
    if (!inputId) return false;
    const input = document.getElementById(inputId);
    if (input) {
      input.focus();
      return true;
    }
    return false;
  }

  document.addEventListener('keydown', (e) => {
    const active = document.activeElement;
    const ignoreTags = ['INPUT', 'TEXTAREA', 'SELECT'];
    if (active && (ignoreTags.includes(active.tagName) || active.isContentEditable)) {
      return;
    }

    const idx = pages.indexOf(state.currentPage);
    const updatePage = (pageKey, options = {}) => {
      if (!pageKey) return;
      state.currentPage = pageKey;
      renderPage();
      buildNav();
      const btn = nav.querySelector('button.active');
      if (btn) btn.focus();
      if (options.focusFirstInput) {
        setTimeout(focusFirstInputForCurrentPage, 0);
      }
    };

    if (e.key === 'Enter' || e.key === ' ') {
      const clickTarget = active && (active.matches('button, a') ? active : active.closest('button, a'));
      if (clickTarget) {
        clickTarget.click();
        e.preventDefault();
        return;
      }
      if (state.currentPage === 'inicio') {
        updatePage('login', { focusFirstInput: true });
        e.preventDefault();
        return;
      }
      if (focusFirstInputForCurrentPage()) {
        e.preventDefault();
        return;
      }
    }

    if (e.key === 'Backspace') {
      updatePage('inicio');
      e.preventDefault();
      return;
    }

    if (e.key === 'ArrowRight' || e.key === 'j' || e.key === 'J') {
      updatePage(pages[(idx + 1) % pages.length]);
      e.preventDefault();
      return;
    }

    if (e.key === 'ArrowLeft' || e.key === 'k' || e.key === 'K') {
      updatePage(pages[(idx - 1 + pages.length) % pages.length]);
      e.preventDefault();
      return;
    }

    if (e.key === 'ArrowDown') {
      const buttons = Array.from(nav.querySelectorAll('button'));
      const current = buttons.indexOf(active);
      if (current >= 0) {
        const nextButton = buttons[(current + 1) % buttons.length];
        nextButton.focus();
        e.preventDefault();
      }
      return;
    }

    if (e.key === 'ArrowUp') {
      const buttons = Array.from(nav.querySelectorAll('button'));
      const current = buttons.indexOf(active);
      if (current >= 0) {
        const prevButton = buttons[(current - 1 + buttons.length) % buttons.length];
        prevButton.focus();
        e.preventDefault();
      }
      return;
    }

    if (e.key === 'Home') {
      updatePage(pages[0]);
      e.preventDefault();
      return;
    }

    if (e.key === 'End') {
      updatePage(pages[pages.length - 1]);
      e.preventDefault();
      return;
    }

    if (/^[1-6]$/.test(e.key)) {
      const pageIndex = Number(e.key) - 1;
      if (pageIndex >= 0 && pageIndex < pages.length) {
        updatePage(pages[pageIndex]);
        e.preventDefault();
      }
      return;
    }

    if (e.key === 'h' || e.key === 'H') {
      updatePage('inicio');
      e.preventDefault();
      return;
    }

    if (e.key === 'l' || e.key === 'L') {
      updatePage('login');
      e.preventDefault();
      return;
    }

    if (e.key === 'a' || e.key === 'A') {
      updatePage('acessibilidade');
      e.preventDefault();
      return;
    }
  });
});