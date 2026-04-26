// ===== ACTIVITIES DATA (inline, no module) =====
const activitiesData = {
  matematica: {
    '1': [
      {
        subject: 'Funções e Gráficos',
        description: 'Estudo das funções do 1º e 2º grau, análise de comportamento gráfico, domínio e imagem. Aplicação em problemas do cotidiano com modelagem matemática.',
        habilidades: ['Identificar funções lineares e quadráticas', 'Construir e interpretar gráficos', 'Resolver problemas de otimização'],
        preview: { text: 'Atividade focada na análise de gráficos e comportamento de funções.' }
      },
      {
        subject: 'Sistemas Lineares',
        description: 'Resolução de sistemas de equações lineares pelos métodos da substituição, adição e comparação. Interpretação geométrica de sistemas.',
        habilidades: ['Método da substituição', 'Método da adição', 'Interpretação geométrica'],
        preview: { text: 'Exercícios práticos com aplicações em problemas reais.' }
      }
    ],
    '2': [
      {
        subject: 'Geometria Analítica',
        description: 'Estudo do plano cartesiano, distância entre pontos, equação da reta e ponto médio. Aplicações em problemas de geometria plana.',
        habilidades: ['Calcular distância entre pontos', 'Determinar equação da reta', 'Encontrar ponto médio de segmento'],
        preview: { text: 'Projetos gráficos usando GeoGebra para visualização interativa.' }
      }
    ],
    '3': [
      {
        subject: 'Trigonometria',
        description: 'Relações trigonométricas no triângulo retângulo: seno, cosseno e tangente. Lei dos senos e cossenos para triângulos quaisquer.',
        habilidades: ['Razões trigonométricas básicas', 'Lei dos senos', 'Lei dos cossenos'],
        preview: { text: 'Aplicações em engenharia e física no mundo real.' }
      },
      {
        subject: 'Estatística e Probabilidade',
        description: 'Conceitos de probabilidade, média, moda, mediana e desvio padrão. Análise e interpretação de dados estatísticos.',
        habilidades: ['Calcular medidas de tendência central', 'Determinar probabilidade de eventos', 'Construir gráficos estatísticos'],
        preview: { text: 'Análise de dados reais coletados em pesquisa de campo.' }
      }
    ]
  },
  natureza: {
    '1': [
      {
        subject: 'Princípios de Química Orgânica',
        description: 'Introdução à química orgânica: carbono e suas propriedades, ligações covalentes, hibridização e cadeias carbônicas.',
        habilidades: ['Identificar cadeias carbônicas', 'Nomear compostos orgânicos', 'Reconhecer grupos funcionais'],
        preview: { text: 'Experimentos de identificação de compostos orgânicos em laboratório.' }
      }
    ],
    '2': [
      {
        subject: 'Física: Eletricidade e Magnetismo',
        description: 'Estudo dos fenômenos elétricos e magnéticos: campo elétrico, corrente elétrica, resistência e circuitos básicos. Lei de Ohm.',
        habilidades: ['Aplicar a Lei de Ohm', 'Calcular resistência equivalente', 'Analisar circuitos simples'],
        preview: { text: 'Montagem de circuitos básicos com multímetro e componentes reais.' }
      },
      {
        subject: 'Biologia: Genética e Hereditariedade',
        description: 'Leis de Mendel, conceitos de genótipo e fenótipo, cruzamentos monohíbridos e dihíbridos.',
        habilidades: ['Realizar cruzamentos mendelianos', 'Calcular proporções fenotípicas', 'Identificar padrões de herança'],
        preview: { text: 'Simulação de cruzamentos com árvores genealógicas familiares.' }
      }
    ],
    '3': [
      {
        subject: 'Ecologia e Impacto Ambiental',
        description: 'Cadeias alimentares, ciclos biogeoquímicos, biomas brasileiros e impacto das atividades humanas no meio ambiente.',
        habilidades: ['Identificar relações ecológicas', 'Analisar impactos ambientais', 'Propor soluções sustentáveis'],
        preview: { text: 'Projeto de análise ambiental da região da escola com propostas de ação.' }
      }
    ]
  },
  humanas: {
    '1': [
      {
        subject: 'Brasil Colonial e Formação Nacional',
        description: 'Processo de colonização do Brasil, exploração dos recursos naturais, formação da sociedade colonial e resistência dos povos originários.',
        habilidades: ['Analisar o processo de colonização', 'Identificar resistências históricas', 'Relacionar passado e presente'],
        preview: { text: 'Apresentação sobre o impacto da colonização nas populações originais.' }
      }
    ],
    '2': [
      {
        subject: 'Geografia: Globalização e Desigualdades',
        description: 'Análise do processo de globalização, fluxos econômicos e culturais, desigualdades sociais e regionais em escala global e local.',
        habilidades: ['Identificar fluxos globais', 'Analisar desigualdades regionais', 'Relacionar economia e cultura'],
        preview: { text: 'Mapeamento das desigualdades regionais no Brasil com dados do IBGE.' }
      },
      {
        subject: 'Filosofia: Ética e Moral',
        description: 'Conceitos fundamentais de ética e moral, teorias filosóficas clássicas (Aristóteles, Kant, Utilitarismo) e aplicações contemporâneas.',
        habilidades: ['Distinguir ética de moral', 'Analisar teorias filosóficas', 'Aplicar conceitos em situações reais'],
        preview: { text: 'Debate filosófico sobre dilemas éticos contemporâneos.' }
      }
    ],
    '3': [
      {
        subject: 'Sociologia: Movimentos Sociais',
        description: 'Análise dos principais movimentos sociais brasileiros e mundiais, direitos civis, democracia participativa e papel da sociedade civil.',
        habilidades: ['Identificar movimentos sociais', 'Analisar conquistas históricas', 'Relacionar cidadania e democracia'],
        preview: { text: 'Pesquisa sobre movimentos sociais atuais e seus impactos legislativos.' }
      }
    ]
  },
  linguagens: {
    '1': [
      {
        subject: 'Redação Argumentativa',
        description: 'Estrutura da redação argumentativa: introdução, desenvolvimento e conclusão. Técnicas de argumentação e coesão textual.',
        habilidades: ['Estruturar argumentação', 'Usar repertório cultural', 'Elaborar proposta de intervenção'],
        preview: { text: 'Redações no formato ENEM com feedback e reescrita.' }
      }
    ],
    '2': [
      {
        subject: 'Literatura Brasileira: Modernismo',
        description: 'Características do Modernismo brasileiro, Semana de Arte Moderna de 1922, principais autores e análise literária.',
        habilidades: ['Identificar características modernistas', 'Analisar textos literários', 'Contextualizar historicamente'],
        preview: { text: 'Análise comparativa de poemas de Manuel Bandeira e Carlos Drummond.' }
      },
      {
        subject: 'Língua Inglesa: Comunicação Profissional',
        description: 'Desenvolvimento de habilidades comunicativas em inglês para o contexto profissional: e-mails, vocabulário técnico de tecnologia.',
        habilidades: ['Redigir e-mails profissionais', 'Vocabulário técnico de TI', 'Comunicação oral em inglês'],
        preview: { text: 'Simulação de entrevista de emprego em inglês para a área de tecnologia.' }
      }
    ],
    '3': [
      {
        subject: 'Semiótica e Linguagem Digital',
        description: 'Análise de diferentes linguagens e sistemas de signos na era digital: memes, infográficos e redes sociais.',
        habilidades: ['Analisar linguagem digital', 'Identificar sistemas de signos', 'Produzir conteúdo digital'],
        preview: { text: 'Produção de infográfico digital sobre tema social contemporâneo.' }
      }
    ]
  },
  modelagem: {
    '1': [
      {
        subject: 'UML: Diagramas de Caso de Uso',
        description: 'Criação de diagramas de caso de uso para modelagem de sistemas. Atores, casos de uso e relacionamentos em UML.',
        habilidades: ['Identificar atores e casos de uso', 'Criar diagramas UML', 'Modelar fluxos de sistema'],
        preview: { text: 'Modelagem de sistema de biblioteca com todos os casos de uso mapeados.' }
      },
      {
        subject: 'Modelagem de Processos de Negócio (BPMN)',
        description: 'Notação BPMN para modelagem de processos de negócio, fluxos de trabalho e automação. Ferramentas: Camunda, Draw.io.',
        habilidades: ['Criar diagramas BPMN', 'Modelar fluxos de negócio', 'Identificar pontos de melhoria'],
        preview: { text: 'Modelagem do processo de matrícula escolar usando BPMN 2.0.' }
      }
    ],
    '2': [
      {
        subject: 'Diagrama de Classes e Objetos',
        description: 'Modelagem orientada a objetos com diagramas de classes, atributos, métodos, herança e composição.',
        habilidades: ['Criar diagrama de classes', 'Modelar herança e composição', 'Aplicar encapsulamento'],
        preview: { text: 'Sistema de gerenciamento de e-commerce modelado com diagrama de classes.' }
      }
    ],
    '3': [
      {
        subject: 'Prototipagem e Design de Interface',
        description: 'Criação de protótipos de interface de baixa e alta fidelidade com Figma. Princípios de UX/UI e acessibilidade.',
        habilidades: ['Criar wireframes e protótipos', 'Aplicar princípios de UX', 'Testar usabilidade'],
        preview: { text: 'Protótipo completo de aplicativo mobile de agendamento no Figma.' }
      }
    ]
  },
  bancoDeDados: {
    '1': [
      {
        subject: 'Modelagem Entidade-Relacionamento',
        description: 'Criação de diagramas ER para modelagem de banco de dados: entidades, atributos, relacionamentos e normalização.',
        habilidades: ['Criar diagrama ER', 'Definir cardinalidade', 'Normalizar até 3FN'],
        preview: { text: 'Modelo de banco de dados para sistema hospitalar com todas as entidades.' }
      }
    ],
    '2': [
      {
        subject: 'SQL: Consultas e Manipulação de Dados',
        description: 'Linguagem SQL completa: DDL, DML e DQL. SELECT, JOIN, GROUP BY, HAVING. MySQL e PostgreSQL.',
        habilidades: ['Escrever consultas SQL complexas', 'Usar JOINs e subconsultas', 'Otimizar queries'],
        preview: { text: 'Projeto de banco de dados para sistema de vendas com relatórios SQL.' }
      },
      {
        subject: 'Banco de Dados NoSQL',
        description: 'Introdução aos bancos NoSQL: MongoDB, Redis e Neo4j. Quando usar SQL vs NoSQL e casos práticos.',
        habilidades: ['Operar MongoDB com queries', 'Estruturar documentos JSON', 'Comparar modelos SQL/NoSQL'],
        preview: { text: 'API REST integrada ao MongoDB Atlas para catálogo de produtos.' }
      }
    ],
    '3': [
      {
        subject: 'Segurança e Administração de BD',
        description: 'Administração de banco de dados: backups, controle de acesso, transactions, índices e tuning de performance.',
        habilidades: ['Configurar backups automáticos', 'Gerenciar permissões de usuário', 'Otimizar índices'],
        preview: { text: 'Plano de DBA para empresa fictícia com políticas de segurança de dados.' }
      }
    ]
  },
  iot: {
    '1': [
      {
        subject: 'Introdução ao Arduino e Eletrônica',
        description: 'Fundamentos de eletrônica digital, programação de microcontroladores Arduino. Componentes: resistores, LEDs e sensores.',
        habilidades: ['Programar Arduino em C/C++', 'Montar circuitos básicos', 'Usar sensores e atuadores'],
        preview: { text: 'Projeto de semáforo inteligente com sensor de presença em Arduino.' }
      }
    ],
    '2': [
      {
        subject: 'Protocolos IoT: MQTT e HTTP',
        description: 'Comunicação em IoT com MQTT para mensagens leves e HTTP/REST para APIs. Broker Mosquitto e integração com nuvem.',
        habilidades: ['Configurar broker MQTT', 'Publicar e assinar tópicos', 'Integrar com APIs REST'],
        preview: { text: 'Sistema de monitoramento de temperatura com dashboard em tempo real.' }
      },
      {
        subject: 'ESP32 e Conectividade Wi-Fi/Bluetooth',
        description: 'Programação do ESP32 com Wi-Fi e Bluetooth integrados. Projetos conectados à internet e envio de dados para nuvem.',
        habilidades: ['Programar ESP32 com Wi-Fi', 'Conectar dispositivos à nuvem', 'Criar servidor web embarcado'],
        preview: { text: 'Estação meteorológica conectada com dados enviados para Thingspeak.' }
      }
    ],
    '3': [
      {
        subject: 'Projeto Final IoT: Smart Home',
        description: 'Desenvolvimento de projeto integrado de automação residencial: controle de lâmpadas, temperatura e segurança via app.',
        habilidades: ['Integrar múltiplos dispositivos IoT', 'Criar dashboard de controle', 'Implementar automações'],
        preview: { text: 'Protótipo funcional de casa inteligente com controle via smartphone.' }
      }
    ]
  }
};

// ===== STATE =====
const state = {
  currentScene: 0,
  totalScenes: 5,
  overlayOpen: false,
  overlaySubject: null,
  overlayTrimester: '1',
  theme: localStorage.getItem('portfolio-theme') || 'dark'
};

// ===== SUBJECT MAP =====
const subjectMap = {
  matematica:   { name: 'Matemática',            icon: '📐', meta: 'Exatas' },
  natureza:     { name: 'Ciências da Natureza',  icon: '🧬', meta: 'Bio · Fís · Quím' },
  humanas:      { name: 'Ciências Humanas',      icon: '🌎', meta: 'Hist · Geo · Fil' },
  linguagens:   { name: 'Linguagens',            icon: '📖', meta: 'Port · Ing · Lit' },
  modelagem:    { name: 'Modelagem de Sistemas', icon: '🗂️', meta: 'UML · BPMN' },
  bancoDeDados: { name: 'Banco de Dados',        icon: '🗄️', meta: 'SQL · NoSQL' },
  iot:          { name: 'IoT',                   icon: '📡', meta: 'Arduino · ESP32' },
};

const trimesterLabel = { '1': '1º TRI', '2': '2º TRI', '3': '3º TRI' };

// ===== HELPERS =====
function getActivities(subject, trimester) {
  return (activitiesData[subject] && activitiesData[subject][trimester]) ? activitiesData[subject][trimester] : [];
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  applyTheme(state.theme);
  initCursor();
  initCanvas();
  initThemeToggle();
  initScrollTracking();
  initNavDots();
  initBentoSpotlight();
  initCardTilt();
  initOverlay();
  initKeyboard();
});

// ===== THEME =====
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
  var btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? getSunIcon() : getMoonIcon();
    btn.setAttribute('aria-label', 'Mudar para tema ' + (theme === 'dark' ? 'claro' : 'escuro'));
  }
}

function initThemeToggle() {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });
}

function getSunIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
}

function getMoonIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

// ===== AMBIENT CANVAS =====
function initCanvas() {
  var canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  var particles = [];
  for (var i = 0; i < 35; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var isDark = state.theme === 'dark';
    var particleColor = isDark ? '200, 150, 80' : '139, 90, 43';
    var lineColor = isDark ? '184, 115, 51' : '122, 72, 32';

    particles.forEach(function(p) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + particleColor + ', ' + p.alpha + ')';
      ctx.fill();

      particles.forEach(function(q) {
        var dx = p.x - q.x, dy = p.y - q.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140 && dist > 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(' + lineColor + ', ' + (0.06 * (1 - dist / 140)) + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(draw);
  }
  draw();
}

// ===== SCROLL TRACKING =====
function initScrollTracking() {
  var scenes = document.querySelectorAll('.scene');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
        var idx = parseInt(entry.target.dataset.scene);
        if (!isNaN(idx)) {
          state.currentScene = idx;
          updateNavDots(idx);
          revealSceneElements(entry.target);
        }
      }
    });
  }, { threshold: [0.35, 0.6] });

  scenes.forEach(function(scene) { observer.observe(scene); });
}

function revealSceneElements(sceneEl) {
  var elements = sceneEl.querySelectorAll('.scene-element');
  elements.forEach(function(el, i) {
    var delay = (parseFloat(el.style.animationDelay) || i * 0.08) * 1000;
    setTimeout(function() { el.classList.add('revealed'); }, delay);
  });
}

// ===== NAV DOTS =====
function initNavDots() {
  document.querySelectorAll('.nav-dot').forEach(function(dot) {
    dot.addEventListener('click', function() {
      var idx = parseInt(dot.dataset.scene);
      scrollToScene(idx);
    });
  });
}

function updateNavDots(activeIdx) {
  document.querySelectorAll('.nav-dot').forEach(function(dot) {
    var idx = parseInt(dot.dataset.scene);
    dot.classList.toggle('active', idx === activeIdx);
  });
}

function scrollToScene(idx) {
  var scene = document.querySelector('[data-scene="' + idx + '"]');
  if (scene) scene.scrollIntoView({ behavior: 'smooth' });
}

// ===== BENTO SPOTLIGHT =====
function initBentoSpotlight() {
  document.querySelectorAll('.bento-tile').forEach(function(tile) {
    tile.addEventListener('mousemove', function(e) {
      var rect = tile.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      tile.style.setProperty('--mx', x + '%');
      tile.style.setProperty('--my', y + '%');
    });
  });
}

// ===== CARD TILT =====
function initCardTilt() {
  var cards = document.querySelectorAll('.skill-card, .p-card');
  cards.forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = (e.clientX - cx) / (rect.width / 2);
      var dy = (e.clientY - cy) / (rect.height / 2);
      var tiltX = -dy * 8;
      var tiltY = dx * 8;
      var mx = ((e.clientX - rect.left) / rect.width) * 100;
      var my = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--tilt-x', tiltX + 'deg');
      card.style.setProperty('--tilt-y', tiltY + 'deg');
      card.style.setProperty('--mx', mx + '%');
      card.style.setProperty('--my', my + '%');
    });
    card.addEventListener('mouseleave', function() {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}

// ===== CURSOR =====
function initCursor() {
  var dot = document.getElementById('cursor-dot');
  var ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  var mouseX = -100, mouseY = -100;
  var ringX = -100, ringY = -100;
  var ringSpeed = 0.12;

  function animate() {
    ringX += (mouseX - ringX) * ringSpeed;
    ringY += (mouseY - ringY) * ringSpeed;
    dot.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px) translate(-50%, -50%)';
    ring.style.transform = 'translate(' + ringX + 'px, ' + ringY + 'px) translate(-50%, -50%)';
    requestAnimationFrame(animate);
  }

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  var cursor = document.getElementById('cursor');
  var interactiveSelectors = 'a, button, [data-cursor-hover], .bento-tile, .skill-card, .p-card, .contact-tile, .social-link, .nav-dot';
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest && e.target.closest(interactiveSelectors)) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', function(e) {
    if (e.target.closest && e.target.closest(interactiveSelectors)) {
      document.body.classList.remove('cursor-hover');
    }
  });
  if (cursor) {
    document.addEventListener('mouseleave', function() { cursor.style.opacity = '0'; });
    document.addEventListener('mouseenter', function() { cursor.style.opacity = '1'; });
  }
  animate();
}

// ===== OVERLAY =====
function initOverlay() {
  var backdrop = document.getElementById('overlay-backdrop');
  var closeBtn = document.getElementById('overlay-close');
  if (backdrop) backdrop.addEventListener('click', closeOverlay);
  if (closeBtn) closeBtn.addEventListener('click', closeOverlay);

  document.querySelectorAll('.bento-tile[data-subject]').forEach(function(tile) {
    tile.addEventListener('click', function() {
      openOverlay(tile.dataset.subject);
    });
  });
}

function openOverlay(subject) {
  state.overlayOpen = true;
  state.overlaySubject = subject;
  state.overlayTrimester = '1';
  var info = subjectMap[subject];
  if (!info) return;
  var labelEl = document.getElementById('overlay-subject-label');
  var nameEl = document.getElementById('overlay-subject-name');
  if (labelEl) labelEl.textContent = info.meta;
  if (nameEl) nameEl.textContent = info.name;
  renderActivities();
  renderTrimesterSelector();
  var backdrop = document.getElementById('overlay-backdrop');
  var panel = document.getElementById('overlay-panel');
  if (backdrop) backdrop.classList.add('open');
  if (panel) panel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOverlay() {
  state.overlayOpen = false;
  var backdrop = document.getElementById('overlay-backdrop');
  var panel = document.getElementById('overlay-panel');
  if (backdrop) backdrop.classList.remove('open');
  if (panel) panel.classList.remove('open');
  document.body.style.overflow = '';
}

function renderTrimesterSelector() {
  var container = document.getElementById('trimester-pills');
  if (!container) return;
  container.innerHTML = '';
  ['1', '2', '3'].forEach(function(tri) {
    var btn = document.createElement('button');
    btn.className = 'trimester-btn' + (tri === state.overlayTrimester ? ' active' : '');
    btn.textContent = trimesterLabel[tri];
    btn.setAttribute('aria-label', 'Ver ' + trimesterLabel[tri]);
    btn.addEventListener('click', function() {
      state.overlayTrimester = tri;
      renderTrimesterSelector();
      renderActivities();
    });
    container.appendChild(btn);
  });
}

function renderActivities() {
  var content = document.getElementById('overlay-content');
  if (!content) return;
  content.innerHTML = '<div class="overlay-loading"><div class="loading-spinner"></div></div>';
  setTimeout(function() {
    var activities = getActivities(state.overlaySubject, state.overlayTrimester);
    if (!activities.length) {
      content.innerHTML = '<div class="overlay-empty"><div class="overlay-empty-icon">📭</div><p>Nenhuma atividade cadastrada para este trimestre ainda.</p></div>';
      return;
    }
    var list = document.createElement('div');
    list.className = 'activities-list';
    activities.forEach(function(act) {
      list.appendChild(buildActivityCard(act, state.overlayTrimester));
    });
    content.innerHTML = '';
    content.appendChild(list);
  }, 300);
}

function buildActivityCard(act, trimester) {
  var card = document.createElement('div');
  card.className = 'activity-card';
  var skillsHTML = '';
  if (act.habilidades && act.habilidades.length) {
    var items = act.habilidades.map(function(h) { return '<li class="skill-item">' + h + '</li>'; }).join('');
    skillsHTML = '<div class="activity-field"><span class="field-label">Habilidades</span><ul class="skills-list">' + items + '</ul></div>';
  }
  var previewHTML = '';
  if (act.preview) {
    previewHTML = '<div class="activity-preview"><span class="preview-label">Preview</span>';
    if (act.preview.image) {
      var href = act.preview.link || act.preview.image;
      previewHTML += '<a href="' + href + '" target="_blank" class="preview-image-link"><img src="' + act.preview.image + '" alt="Preview" class="preview-image" loading="lazy"></a>';
    }
    if (act.preview.link && !act.preview.image) {
      previewHTML += '<a href="' + act.preview.link + '" target="_blank" class="preview-link-btn">🔗 Ver documento</a>';
    }
    previewHTML += '<div class="preview-content">' + act.preview.text + '</div></div>';
  }
  card.innerHTML = '<div class="activity-header"><h3 class="activity-title">' + act.subject + '</h3><span class="activity-badge">' + trimesterLabel[trimester] + '</span></div><div class="activity-field"><span class="field-label">Descrição</span><p class="field-content">' + act.description + '</p></div>' + skillsHTML + previewHTML;
  return card;
}

// ===== KEYBOARD =====
function initKeyboard() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && state.overlayOpen) closeOverlay();
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement) {
      var el = document.activeElement;
      if (el.classList.contains('bento-tile') && el.dataset.subject) {
        e.preventDefault();
        openOverlay(el.dataset.subject);
      }
      if (el.classList.contains('nav-dot')) {
        e.preventDefault();
        el.click();
      }
    }
  });
}
