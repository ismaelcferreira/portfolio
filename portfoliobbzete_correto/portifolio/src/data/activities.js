// ===== ACTIVITIES DATA =====
const activitiesData = {
  matematica: {
    '1': [
      {
        subject: 'Funções e Gráficos',
        description: 'Estudo das funções do 1º e 2º grau, análise de comportamento gráfico, domínio e imagem. Aplicação em problemas do cotidiano com modelagem matemática.',
        habilidades: ['Identificar funções lineares e quadráticas', 'Construir e interpretar gráficos', 'Resolver problemas de otimização'],
        preview: {
          text: 'Atividade focada na análise de gráficos e comportamento de funções.'
        }
      },
      {
        subject: 'Sistemas Lineares',
        description: 'Resolução de sistemas de equações lineares pelos métodos da substituição, adição e comparação. Interpretação geométrica de sistemas.',
        habilidades: ['Método da substituição', 'Método da adição', 'Interpretação geométrica'],
        preview: {
          text: 'Exercícios práticos com aplicações em problemas reais.'
        }
      }
    ],
    '2': [
      {
        subject: 'Geometria Analítica',
        description: 'Estudo do plano cartesiano, distância entre pontos, equação da reta e ponto médio. Aplicações em problemas de geometria plana.',
        habilidades: ['Calcular distância entre pontos', 'Determinar equação da reta', 'Encontrar ponto médio de segmento'],
        preview: {
          text: 'Projetos gráficos usando GeoGebra para visualização interativa.'
        }
      }
    ],
    '3': [
      {
        subject: 'Trigonometria',
        description: 'Relações trigonométricas no triângulo retângulo: seno, cosseno e tangente. Lei dos senos e cossenos para triângulos quaisquer.',
        habilidades: ['Razões trigonométricas básicas', 'Lei dos senos', 'Lei dos cossenos'],
        preview: {
          text: 'Aplicações em engenharia e física no mundo real.'
        }
      },
      {
        subject: 'Estatística e Probabilidade',
        description: 'Conceitos de probabilidade, média, moda, mediana e desvio padrão. Análise e interpretação de dados estatísticos.',
        habilidades: ['Calcular medidas de tendência central', 'Determinar probabilidade de eventos', 'Construir gráficos estatísticos'],
        preview: {
          text: 'Análise de dados reais coletados em pesquisa de campo.'
        }
      }
    ]
  },

  natureza: {
    '1': [
      {
        subject: 'Princípios de Química Orgânica',
        description: 'Introdução à química orgânica: carbono e suas propriedades, ligações covalentes, hibridização e cadeias carbônicas. Nomenclatura de compostos orgânicos simples.',
        habilidades: ['Identificar cadeias carbônicas', 'Nomear compostos orgânicos', 'Reconhecer grupos funcionais'],
        preview: {
          text: 'Experimentos de identificação de compostos orgânicos em laboratório.'
        }
      }
    ],
    '2': [
      {
        subject: 'Física: Eletricidade e Magnetismo',
        description: 'Estudo dos fenômenos elétricos e magnéticos: campo elétrico, potencial, corrente elétrica, resistência e circuitos básicos. Lei de Ohm e suas aplicações.',
        habilidades: ['Aplicar a Lei de Ohm', 'Calcular resistência equivalente', 'Analisar circuitos simples'],
        preview: {
          text: 'Montagem de circuitos básicos com multímetro e componentes reais.'
        }
      },
      {
        subject: 'Biologia: Genética e Hereditariedade',
        description: 'Leis de Mendel, conceitos de genótipo e fenótipo, cruzamentos monohíbridos e dihíbridos. Herança ligada ao sexo e doenças genéticas.',
        habilidades: ['Realizar cruzamentos mendelianos', 'Calcular proporções fenotípicas', 'Identificar padrões de herança'],
        preview: {
          text: 'Simulação de cruzamentos com árvores genealógicas familiares.'
        }
      }
    ],
    '3': [
      {
        subject: 'Ecologia e Impacto Ambiental',
        description: 'Cadeias alimentares, ciclos biogeoquímicos, biomas brasileiros e impacto das atividades humanas no meio ambiente. Sustentabilidade e preservação.',
        habilidades: ['Identificar relações ecológicas', 'Analisar impactos ambientais', 'Propor soluções sustentáveis'],
        preview: {
          text: 'Projeto de análise ambiental da região da escola com propostas de ação.'
        }
      }
    ]
  },

  humanas: {
    '1': [
      {
        subject: 'Brasil Colonial e Formação Nacional',
        description: 'Processo de colonização do Brasil, exploração dos recursos naturais, formação da sociedade colonial e resistência dos povos indígenas e africanos.',
        habilidades: ['Analisar o processo de colonização', 'Identificar resistências históricas', 'Relacionar passado e presente'],
        preview: {
          text: 'Apresentação sobre o impacto da colonização nas populações originais.'
        }
      }
    ],
    '2': [
      {
        subject: 'Geografia: Globalização e Desigualdades',
        description: 'Análise do processo de globalização, fluxos econômicos e culturais, desigualdades sociais e regionais em escala global e local.',
        habilidades: ['Identificar fluxos globais', 'Analisar desigualdades regionais', 'Relacionar economia e cultura'],
        preview: {
          text: 'Mapeamento das desigualdades regionais no Brasil com dados do IBGE.'
        }
      },
      {
        subject: 'Filosofia: Ética e Moral',
        description: 'Conceitos fundamentais de ética e moral, teorias filosóficas clássicas (Aristóteles, Kant, Utilitarismo) e suas aplicações no mundo contemporâneo.',
        habilidades: ['Distinguir ética de moral', 'Analisar teorias filosóficas', 'Aplicar conceitos em situações reais'],
        preview: {
          text: 'Debate filosófico sobre dilemas éticos contemporâneos.'
        }
      }
    ],
    '3': [
      {
        subject: 'Sociologia: Movimentos Sociais',
        description: 'Análise dos principais movimentos sociais brasileiros e mundiais, direitos civis, democracia participativa e papel da sociedade civil.',
        habilidades: ['Identificar movimentos sociais', 'Analisar conquistas históricas', 'Relacionar cidadania e democracia'],
        preview: {
          text: 'Pesquisa sobre movimentos sociais atuais e seus impactos legislativos.'
        }
      }
    ]
  },

  linguagens: {
    '1': [
      {
        subject: 'Redação Argumentativa',
        description: 'Estrutura da redação argumentativa: introdução, desenvolvimento e conclusão. Técnicas de argumentação, uso de repertório sociocultural e coesão textual.',
        habilidades: ['Estruturar argumentação', 'Usar repertório cultural', 'Elaborar proposta de intervenção'],
        preview: {
          text: 'Redações no formato ENEM com feedback e reescrita.'
        }
      }
    ],
    '2': [
      {
        subject: 'Literatura Brasileira: Modernismo',
        description: 'Características do Modernismo brasileiro, Semana de Arte Moderna de 1922, principais autores e obras. Análise literária de poemas e contos modernistas.',
        habilidades: ['Identificar características modernistas', 'Analisar textos literários', 'Contextualizar historicamente'],
        preview: {
          text: 'Análise comparativa de poemas de Manuel Bandeira e Carlos Drummond.'
        }
      },
      {
        subject: 'Língua Inglesa: Comunicação Profissional',
        description: 'Desenvolvimento de habilidades comunicativas em inglês para o contexto profissional: e-mails, apresentações e vocabulário técnico de tecnologia.',
        habilidades: ['Redigir e-mails profissionais', 'Vocabulário técnico de TI', 'Comunicação oral em inglês'],
        preview: {
          text: 'Simulação de entrevista de emprego em inglês para a área de tecnologia.'
        }
      }
    ],
    '3': [
      {
        subject: 'Semiótica e Linguagem Digital',
        description: 'Análise de diferentes linguagens e sistemas de signos na era digital: memes, infográficos, redes sociais e sua influência na comunicação contemporânea.',
        habilidades: ['Analisar linguagem digital', 'Identificar sistemas de signos', 'Produzir conteúdo digital'],
        preview: {
          text: 'Produção de infográfico digital sobre tema social contemporâneo.'
        }
      }
    ]
  },

  modelagem: {
    '1': [
      {
        subject: 'UML: Diagramas de Caso de Uso',
        description: 'Introdução à UML (Unified Modeling Language), criação de diagramas de caso de uso para modelagem de sistemas. Atores, casos de uso e relacionamentos.',
        habilidades: ['Identificar atores e casos de uso', 'Criar diagramas UML', 'Modelar fluxos de sistema'],
        preview: {
          text: 'Modelagem de sistema de biblioteca com todos os casos de uso mapeados.'
        }
      },
      {
        subject: 'Modelagem de Processos de Negócio (BPMN)',
        description: 'Notação BPMN para modelagem de processos de negócio, fluxos de trabalho e automação de processos. Ferramentas: Camunda, Draw.io.',
        habilidades: ['Criar diagramas BPMN', 'Modelar fluxos de negócio', 'Identificar pontos de melhoria'],
        preview: {
          text: 'Modelagem do processo de matrícula escolar usando BPMN 2.0.'
        }
      }
    ],
    '2': [
      {
        subject: 'Diagrama de Classes e Objetos',
        description: 'Modelagem orientada a objetos com diagramas de classes, atributos, métodos, herança, composição e associação. Padrões de projeto básicos.',
        habilidades: ['Criar diagrama de classes', 'Modelar herança e composição', 'Aplicar encapsulamento'],
        preview: {
          text: 'Sistema de gerenciamento de e-commerce modelado com diagrama de classes.'
        }
      }
    ],
    '3': [
      {
        subject: 'Prototipagem e Design de Interface',
        description: 'Criação de protótipos de interface de baixa e alta fidelidade com Figma. Princípios de UX/UI, usabilidade e acessibilidade digital.',
        habilidades: ['Criar wireframes e protótipos', 'Aplicar princípios de UX', 'Testar usabilidade'],
        preview: {
          text: 'Protótipo completo de aplicativo mobile de agendamento no Figma.'
        }
      }
    ]
  },

  bancoDeDados: {
    '1': [
      {
        subject: 'Modelagem Entidade-Relacionamento',
        description: 'Criação de diagramas ER para modelagem de banco de dados: entidades, atributos, relacionamentos, cardinalidade e normalização de dados.',
        habilidades: ['Criar diagrama ER', 'Definir cardinalidade', 'Normalizar até 3FN'],
        preview: {
          text: 'Modelo de banco de dados para sistema hospitalar com todas as entidades.'
        }
      }
    ],
    '2': [
      {
        subject: 'SQL: Consultas e Manipulação de Dados',
        description: 'Linguagem SQL completa: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE) e DQL (SELECT, JOIN, GROUP BY, HAVING). Bancos: MySQL e PostgreSQL.',
        habilidades: ['Escrever consultas SQL complexas', 'Usar JOINs e subconsultas', 'Otimizar queries'],
        preview: {
          text: 'Projeto de banco de dados para sistema de vendas com relatórios SQL.'
        }
      },
      {
        subject: 'Banco de Dados NoSQL',
        description: 'Introdução aos bancos NoSQL: MongoDB (documento), Redis (chave-valor) e neo4j (grafos). Quando usar SQL vs NoSQL e casos práticos.',
        habilidades: ['Operar MongoDB com queries', 'Estruturar documentos JSON', 'Comparar modelos SQL/NoSQL'],
        preview: {
          text: 'API REST integrada ao MongoDB Atlas para catálogo de produtos.'
        }
      }
    ],
    '3': [
      {
        subject: 'Segurança e Administração de BD',
        description: 'Administração de banco de dados: backups, controle de acesso, transactions, índices e tuning de performance. Segurança e proteção de dados.',
        habilidades: ['Configurar backups automáticos', 'Gerenciar permissões de usuário', 'Otimizar índices'],
        preview: {
          text: 'Plano de DBA para empresa fictícia com políticas de segurança de dados.'
        }
      }
    ]
  },

  iot: {
    '1': [
      {
        subject: 'Introdução ao Arduino e Eletrônica',
        description: 'Fundamentos de eletrônica digital, programação de microcontroladores Arduino. Componentes básicos: resistores, LEDs, sensores e atuadores.',
        habilidades: ['Programar Arduino em C/C++', 'Montar circuitos básicos', 'Usar sensores e atuadores'],
        preview: {
          text: 'Projeto de semáforo inteligente com sensor de presença em Arduino.'
        }
      }
    ],
    '2': [
      {
        subject: 'Protocolos IoT: MQTT e HTTP',
        description: 'Comunicação em IoT com protocolo MQTT para mensagens leves e HTTP/REST para APIs. Broker Mosquitto, publish/subscribe e integração com nuvem.',
        habilidades: ['Configurar broker MQTT', 'Publicar e assinar tópicos', 'Integrar com APIs REST'],
        preview: {
          text: 'Sistema de monitoramento de temperatura com dashboard em tempo real.'
        }
      },
      {
        subject: 'ESP32 e Conectividade Wi-Fi/Bluetooth',
        description: 'Programação do ESP32 com Wi-Fi e Bluetooth integrados. Desenvolvimento de projetos conectados à internet, leitura de sensores e envio para nuvem.',
        habilidades: ['Programar ESP32 com Wi-Fi', 'Conectar dispositivos à nuvem', 'Criar servidor web embarcado'],
        preview: {
          text: 'Estação meteorológica conectada com dados enviados para Thingspeak.'
        }
      }
    ],
    '3': [
      {
        subject: 'Projeto Final IoT: Smart Home',
        description: 'Desenvolvimento de projeto integrado de automação residencial: controle de lâmpadas, temperatura e segurança via app. Dashboard e alertas em tempo real.',
        habilidades: ['Integrar múltiplos dispositivos IoT', 'Criar dashboard de controle', 'Implementar automações'],
        preview: {
          text: 'Protótipo funcional de casa inteligente com controle via smartphone.'
        }
      }
    ]
  }
};

export function getActivities(subject, trimester) {
  return activitiesData[subject]?.[trimester] || [];
}

export function getAllActivities(subject) {
  const data = activitiesData[subject];
  if (!data) return [];
  return [...(data['1'] || []), ...(data['2'] || []), ...(data['3'] || [])];
}
