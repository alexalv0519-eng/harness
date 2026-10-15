import { SlideData, HarnessDimension, FrameworkComparison } from '../types/presentation';

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    numberStr: "01",
    title: "La Fórmula Secreta de la IA Agéntica",
    subtitle: "De Chatbots Reactivos a Agentes Autónomos",
    category: "Arquitectura Fundamental",
    summary: "Un Agente de IA no es solo un modelo de lenguaje (LLM), sino un sistema socio-técnico completo: Modelo (el cerebro que razona) + Harness (el cuerpo que ejecuta con seguridad).",
    speakerNotes: {
      durationMinutes: 3,
      objective: "Desmitificar el concepto de 'agente' y erradicar la confusión común entre un chatbot y un sistema agéntico autónomo.",
      talkingPoints: [
        "El 90% de las empresas fracasan al intentar usar LLMs puros como agentes porque esperan que el modelo ejecute tareas del mundo real sin infraestructura.",
        "La ecuación fundacional: Agente = Modelo + Harness. Sin Harness, el modelo solo alucina o redacta; no actúa.",
        "El Modelo aporta razonamiento probabilístico, mientras el Harness aporta determinismo de ingeniería de software."
      ],
      speakerScript: "Buenos días a todos. Cuando la mayoría de las organizaciones piensa en Inteligencia Artificial, visualiza una ventana de chat: le haces una pregunta y te devuelve texto. Pero hoy no venimos a hablar de redactar correos. Venimos a hablar de la transición más profunda en la historia del software: pasar de chatbots reactivos a agentes autónomos que ejecutan trabajo real.\n\nY para entenderlo, debemos desterrar un mito: un LLM no es un agente. Un modelo de lenguaje es un cerebro brillante metido en un frasco. Si le pides 'arregla este bug en producción' o 'audita estas 5,000 transacciones y ejecuta la conciliación', el modelo no tiene manos, no tiene ojos y no tiene cinturón de seguridad. Para convertir ese cerebro en un agente operativo necesitamos la segunda mitad de la ecuación: EL HARNESS. Hoy veremos cómo esta combinación cambia las reglas del juego.",
      keyPunchline: "El Modelo es el cerebro probabilístico; el Harness es el cuerpo determinista de ingeniería que le da manos, ojos y límites infranqueables.",
      potentialAudienceQuestions: [
        {
          question: "¿Si el modelo es cada vez más inteligente (GPT-5, Gemini 2.5), ¿el Harness dejará de ser necesario?",
          suggestedAnswer: "Todo lo contrario. Cuanto más potente es el motor de un coche, más robusto debe ser el chasis, los frenos y la dirección. Un modelo superinteligente sin Harness sigue sin tener sockets de red autenticados, límites de gasto o sandboxes de seguridad."
        }
      ]
    }
  },
  {
    id: 2,
    numberStr: "02",
    title: "¿Cómo Piensa y Actúa un Agente?",
    subtitle: "Del Prompt Estático al Ciclo Vivo de Acción (El Bucle ReAct)",
    category: "Mecanismo Cognitivo",
    summary: "El bucle Reason-Act-Observe permite a los agentes ejecutar tareas no deterministas, recuperarse de fallos y autocorregirse en tiempo real.",
    speakerNotes: {
      durationMinutes: 4,
      objective: "Demostrar visualmente cómo el ciclo ReAct dota al agente de resiliencia ante la incertidumbre, en contraste con los scripts tradicionales frágiles.",
      talkingPoints: [
        "Un script convencional sigue una ruta lineal: ante un error inesperado (código 429, timeout, esquema modificado), lanza una excepción y muere.",
        "El bucle ReAct itera: Razonar (¿cuál es la meta?), Actuar (ejecuto una llamada), Observar (¿qué respondió el entorno?) y Autocorregirse si algo sale mal.",
        "La autonomía real no es acertar a la primera; es la capacidad de sobreponerse a errores sin despertar a un humano a las 3 AM."
      ],
      speakerScript: "Veamos ahora la diferencia entre el software clásico que llevamos programando 40 años y un agente. Un script tradicional es un tren sobre rieles: si hay una roca en el camino, descarrila y arroja un Fatal Error. Si una API devuelve un 429 de Rate Limit o la estructura JSON cambia un campo, el script colapsa.\n\nEn cambio, un agente opera en un ciclo continuo: ReAct (Reasoning and Acting). Primero razona: 'Necesito obtener las ventas de marzo'. Luego actúa: 'Llamo al endpoint /sales'. Tercero, observa: 'Vaya, el endpoint me devolvió 403 Forbidden por token expirado'. Y aquí viene la magia: en vez de morir, se autocorrige: 'Solicito un nuevo token a Auth Server y reintento con backoff exponencial'. Este ciclo es lo que convierte a un sistema en verdaderamente autónomo.",
      keyPunchline: "Un script tradicional se rompe ante el primer imprevisto; un agente investiga el fallo, formula una hipótesis y encuentra un camino alternativo.",
      potentialAudienceQuestions: [
        {
          question: "¿Cómo evitamos que el agente entre en un bucle infinito si la API nunca responde?",
          suggestedAnswer: "Aquí interviene el Harness con políticas de Max Iterations, detección de ciclos y presupuestos de tokens/coste por ejecución, derivando a un humano si se excede el umbral."
        }
      ]
    }
  },
  {
    id: 3,
    numberStr: "03",
    title: "El HARNESS – El Sistema Operativo Invisible",
    subtitle: "¿Por qué un buen modelo no sirve de nada sin un buen Harness?",
    category: "Infraestructura & Gobernanza",
    summary: "Las 6 dimensiones críticas: Ensamblaje de Contexto, Interacción con Herramientas, Control de Decodificación, Topología de Flujo, Gestión de Memoria y Sandboxes con Hooks de Seguridad.",
    speakerNotes: {
      durationMinutes: 5,
      objective: "Desglosar la anatomía de un Harness empresarial y subrayar que la seguridad y el rendimiento residen en la infraestructura, no en el prompt.",
      talkingPoints: [
        "El error de novato es pedirle al LLM por favor: 'No borres la base de datos'. Un agente seguro usa Hooks deterministas que interceptan y bloquean la llamada.",
        "La gestión de memoria mediante Context Compaction evita que el agente olvide instrucciones críticas o agote su ventana de contexto.",
        "Los sandboxes aíslan la ejecución de código impidiendo accesos no autorizados a la red corporativa."
      ],
      speakerScript: "Llegamos al corazón técnico de esta sesión: ¿Qué compone exactamente ese Harness? Piensen en el Harness como el sistema operativo del agente. No podemos confiar la seguridad de una empresa a 'pedirle amablemente al modelo en el prompt que se porte bien'. Los jailbreaks y las inyecciones de prompt existen.\n\nEl Harness resuelve 6 pilares innegociables: 1) Ensamblaje dinámico del contexto; 2) Interfaz segura con herramientas; 3) Control estricto de decodificación y esquemas JSON tipados; 4) Topología del flujo; 5) Compactación de memoria para no saturar tokens; y 6) Sandboxes y Hooks. Si el agente intenta ejecutar un comando destructivo como DROP TABLE o leer claves SSH, el Hook lo intercepta en el kernel del Harness antes de que toque la infraestructura real.",
      keyPunchline: "La seguridad empresarial no se pide por favor en un prompt; se impone por arquitectura en los Hooks del Harness.",
      potentialAudienceQuestions: [
        {
          question: "¿Qué es exactamente el Context Compaction y cuándo se dispara?",
          suggestedAnswer: "Es un proceso heurístico o semántico donde historiales largos se destilan en resúmenes estructurados de estado, podando tool outputs ya procesados y reduciendo el consumo de tokens hasta en un 80%."
        }
      ]
    }
  },
  {
    id: 4,
    numberStr: "04",
    title: "Las SKILLS – Superpoderes Modulares",
    subtitle: "Modularidad y Estándares: Dándole Habilidades al Agente con MCP",
    category: "Protocolos & Eficiencia",
    summary: "Cómo el Model Context Protocol (MCP) y el patrón 'Code Execution over MCP' eliminan el problema de los 100 conectores a medida y ahorran hasta un 95% de tokens.",
    speakerNotes: {
      durationMinutes: 4,
      objective: "Presentar el estándar de la industria MCP (Model Context Protocol) y la evolución radical desde Direct Tool Calling hacia Code Execution sobre herramientas.",
      talkingPoints: [
        "El problema N x M: 10 modelos x 50 herramientas = 500 integraciones frágiles. MCP unifica esto bajo JSON-RPC 2.0 como el 'USB-C de la IA'.",
        "Direct Tool Calling carga esquemas gigantes en cada llamada, saturando la ventana de contexto y encareciendo la factura.",
        "Code Execution over MCP: el agente escribe un script ligero en Python/TypeScript que consulta herramientas localmente, filtra datos y solo devuelve el resultado procesado."
      ],
      speakerScript: "Hablemos de escala. Cuando un agente necesita acceder a Salesforce, GitHub, Slack, Jira y la base de datos SQL, ¿cómo le otorgamos esas capacidades? Hasta hace poco, cada empresa inventaba su propio formato de tool calling. Eso era una pesadilla de mantenimiento.\n\nAquí entra MCP: Model Context Protocol. Es el equivalente al estándar USB-C para la IA agéntica. Un protocolo abierto basado en JSON-RPC 2.0 que permite al agente descubrir e invocar herramientas bajo demanda.\n\nPero hay un salto evolutivo aún mayor: el paso de Direct Tool Calling a Code Execution over MCP. En lugar de forzar al LLM a ingerir 10 megabytes de JSON para calcular una media aritmética, el agente escribe un script de 3 líneas que ejecuta el filtrado dentro del sandbox. Pasamos de 35,000 tokens a 800 tokens por consulta. Es la diferencia entre un prototipo inviable y una arquitectura de producción económica.",
      keyPunchline: "MCP es el USB-C de los agentes: descubrimiento universal, esquemas normalizados y máxima eficiencia mediante ejecución de código en sandbox.",
      potentialAudienceQuestions: [
        {
          question: "¿Quién respalda MCP hoy en día?",
          suggestedAnswer: "Iniciado por Anthropic y adoptado rápidamente como estándar de facto abierto por desarrolladores, herramientas de desarrollo y frameworks en todo el ecosistema de IA."
        }
      ]
    }
  },
  {
    id: 5,
    numberStr: "05",
    title: "AUTOMATIZACIÓN – La Guerra de los Frameworks Multi-Agente",
    subtitle: "De la Automatización Rígida (RPA) a la Colaboración Multi-Agente",
    category: "Orquestación & Ecosistema",
    summary: "Análisis comparativo de LangGraph, CrewAI y AutoGen. Por qué el futuro de producción pertenece a la Arquitectura Híbrida con Human-in-the-Loop.",
    speakerNotes: {
      durationMinutes: 4,
      objective: "Guiar a los líderes técnicos sobre qué framework elegir y revelar el patrón arquitectónico híbrido dominante en la industria.",
      talkingPoints: [
        "LangGraph destaca por control determinista, grafos de estado cíclicos y auditoría estricta para entornos regulados.",
        "CrewAI brilla en prototipado rápido asignando roles humanos (Investigador, Redactor, Crítico).",
        "AutoGen sobresale en dinámicas conversacionales emergentes y depuración de código.",
        "El patrón ganador: Equipos flexibles (CrewAI/AutoGen) exploran creativamente y entregan su trabajo a un grafo determinista (LangGraph) con aprobación humana obligatoria."
      ],
      speakerScript: "¿Qué ocurre cuando una tarea es demasiado grande para un solo agente? Formamos un equipo. En el mercado actual hay tres frameworks dominantes, cada uno con una filosofía muy distinta.\n\nLangGraph modela el trabajo como un grafo de estado finito. Si estás en banca, farmacia o seguros donde necesitas saber exactamente qué pasó en cada bifurcación y tener checkpoints de auditoría, LangGraph es el rey.\n\nCrewAI es intuitivo: defines agentes como si contrataras empleados: un Investigador, un Analista Financiero y un Editor. Es excelente para arrancar rápido.\n\nAutoGen utiliza chats conversacionales donde los agentes discuten entre sí hasta llegar a un consenso, ideal para generación de software.\n\n¿Cuál es la respuesta de la industria en producción? La Arquitectura Híbrida: dejamos que un equipo ágil investigue sin ataduras y luego canalizamos el resultado final hacia un grafo estricto en LangGraph donde un humano hace clic en 'Aprobar' antes de disparar transferencias de dinero o despliegues a producción.",
      keyPunchline: "No elijas entre creatividad y control: usa equipos libres para explorar y grafos de estado deterministas con Human-in-the-Loop para ejecutar.",
      potentialAudienceQuestions: [
        {
          question: "¿El patrón Human-in-the-Loop no ralentiza la automatización?",
          suggestedAnswer: "Solo se coloca en compuertas críticas de alto riesgo (ej. transferencias de capital >$10k o borrado de recursos). Todo el trabajo pesado de preparación e investigación ya fue resuelto en segundos por los agentes."
        }
      ]
    }
  },
  {
    id: 6,
    numberStr: "06",
    title: "Conclusiones y Próximos Pasos",
    subtitle: "El Futuro de la Ingeniería de Software Agéntica",
    category: "Visión & Hoja de Ruta",
    summary: "Los tres principios irrenunciables: Desacoplamiento de modelos, Seguridad a nivel de infraestructura y Eficiencia basada en estándares.",
    speakerNotes: {
      durationMinutes: 3,
      objective: "Cerrar con una llamada a la acción clara para los equipos de ingeniería y un marco de decisión práctico para implementar hoy.",
      talkingPoints: [
        "1. Desacoplamiento: Los modelos son commodities que se reemplazan cada 6 meses; la propiedad intelectual reside en el Harness de tu empresa.",
        "2. Gobernanza Real: La seguridad se garantiza en contenedores y sandboxes, nunca en el prompt.",
        "3. Estándares: Invertir en MCP y orquestación híbrida prepara a la organización para la próxima década."
      ],
      speakerScript: "Para concluir nuestra sesión de hoy, quiero dejarles tres conclusiones estratégicas que cualquier CTO, arquitecto de software o líder técnico debe grabar en su hoja de ruta:\n\nPrimero: Desacoplamiento. Los modelos de lenguaje cambian cada trimestre. Lo que hoy es Gemini 2.5 mañana será Claude 4 o GPT-5. Si construyen su lógica acoplada al modelo, tendrán que reescribir todo cada año. En cambio, si invierten en un Harness robusto, cambiar de cerebro es cambiar una sola variable de entorno.\n\nSegundo: Seguridad e infraestructura. No dejen la gobernanza en manos de la suerte. Los Sandboxes, los Hooks de validación y los checkpoints humanos son los verdaderos garantes del cumplimiento corporativo.\n\nY tercero: Eficiencia por diseño. La IA agéntica no tiene por qué ser costosa si adoptamos estándares abiertos como MCP y ejecución de código en sandbox.\n\nEl futuro del software ya no es escribir cada línea de código a mano, sino diseñar los entornos, herramientas y límites donde los agentes construyen y operan el valor. Muchas gracias.",
      keyPunchline: "Tu ventaja competitiva duradera no es el modelo de lenguaje que alquilas, sino el Harness y las herramientas que tu ingeniería posee.",
      potentialAudienceQuestions: [
        {
          question: "¿Por dónde debería empezar un equipo de ingeniería hoy?",
          suggestedAnswer: "Comiencen construyendo un único agente de ciclo cerrado con un Harness seguro (ReAct + Hooks) resolviendo un punto de dolor interno con bajo riesgo antes de escalar a multi-agente."
        }
      ]
    }
  }
];

export const HARNESS_DIMENSIONS: HarnessDimension[] = [
  {
    id: "context",
    title: "1. Ensamblaje de Contexto",
    subtitle: "Context Assembly",
    description: "Algoritmos que seleccionan, ordenan y podan dinámicamente el estado del sistema, instrucciones de rol y datos relevantes para no saturar la ventana de atención.",
    impactLevel: "Crítico",
    enterpriseRiskWithoutIt: "Alucinaciones por pérdida de instrucciones en historiales largos ('Lost-in-the-Middle').",
    implementationDetail: "RAG semántico local, priorización de mensajes recientes y re-inyección de objetivos.",
    metrics: "-60% Tokens de entrada desperdiciados"
  },
  {
    id: "tools",
    title: "2. Interacción con Herramientas",
    subtitle: "Tool Interaction & Discovery",
    description: "Capa que traduce las intenciones del LLM en llamadas deterministas a APIs, bases de datos o comandos del sistema con validación de tipos JSON Schema.",
    impactLevel: "Fundamental",
    enterpriseRiskWithoutIt: "Fallos de tipado en runtime y llamadas a funciones inexistentes.",
    implementationDetail: "Generación de esquemas tipados (Zod / Pydantic) y serialización estructurada bidireccional.",
    metrics: "99.8% Tasa de éxito en parsing de argumentos"
  },
  {
    id: "decoding",
    title: "3. Control de Decodificación",
    subtitle: "Decoding Control & Constrained Sampling",
    description: "Configuración matemática de temperatura, top_p, gramáticas BNF y esquemas de salida forzada para garantizar respuestas en formatos predecibles.",
    impactLevel: "Alto",
    enterpriseRiskWithoutIt: "Respuestas con texto libre inútiles para alimentar pipelines automáticos.",
    implementationDetail: "Temperature = 0.0 para acciones deterministas; gramáticas guiadas por motor de inferencia.",
    metrics: "100% Salidas conformes a esquema JSON"
  },
  {
    id: "topology",
    title: "4. Topología de Flujo",
    subtitle: "Execution Topology & Graph Routing",
    description: "Estructura que orquesta la ejecución: bucles monológicos, autómatas finitos, pipelines lineales o grafos distribuidos con branching condicional.",
    impactLevel: "Crítico",
    enterpriseRiskWithoutIt: "Bucles infinitos no controlados y fuga de costos computacionales.",
    implementationDetail: "Control de número máximo de saltos (max_hops) y detección de recursividad estancada.",
    metrics: "0 Bucles infinitos desatendidos"
  },
  {
    id: "memory",
    title: "5. Gestión de Memoria",
    subtitle: "Context Compaction & State Persistence",
    description: "Sistemas de memoria de corto plazo (working memory), memoria de largo plazo (vector/relacional) y compactación inteligente que resume pasos pasados.",
    impactLevel: "Alto",
    enterpriseRiskWithoutIt: "Límite de ventana de contexto alcanzado a mitad de una tarea crítica.",
    implementationDetail: "Summarization en segundo plano y podado agresivo de payloads intermedios obsoletos.",
    metrics: "Reducción de coste de memoria hasta 85%"
  },
  {
    id: "sandbox",
    title: "6. Sandboxes & Hooks de Seguridad",
    subtitle: "Sandboxes, Jailbreak Firewalls & Pre-execution Hooks",
    description: "Entornos de cómputo herméticos (gVisor, microVMs, Docker aislado) con interceptores que auditan y bloquean comandos destructivos antes de su ejecución.",
    impactLevel: "Crítico",
    enterpriseRiskWithoutIt: "Borrado accidental de bases de datos, exfiltración de credenciales y ataques de Prompt Injection.",
    implementationDetail: "Pre-call validation hooks, lista de denegación de comandos y aislamiento de red.",
    metrics: "100% Intercepción de comandos destructivos"
  }
];

export const FRAMEWORKS_DATA: FrameworkComparison[] = [
  {
    name: "LangGraph",
    logo: "🕸️",
    philosophy: "Grafos de Estado Cíclicos Deterministas",
    bestFor: "Aplicaciones empresariales, finanzas, medicina, flujos auditables y control estricto.",
    stateModel: "Estado centralizado e inmutable con transiciones mediante nodos y aristas condicionales.",
    strengths: [
      "Persistencia de estado nativa (Time Travel / Rebobinado)",
      "Puntos de interrupción Human-in-the-Loop impecables",
      "Auditoría completa de cada paso de ejecución",
      "Soporta bucles y ciclos deterministas sin sorpresas"
    ],
    weaknesses: [
      "Curva de aprendizaje empinada",
      "Mayor código ceremonial comparado con frameworks basados en prompts"
    ],
    enterpriseVerdict: "Estándar de Oro para Producción en Entornos Regulados",
    badgeColor: "border-sky-500/40 bg-sky-950/30 text-sky-300"
  },
  {
    name: "CrewAI",
    logo: "👥",
    philosophy: "Orquestación Basada en Roles de Trabajo Humanos",
    bestFor: "Equipos de agentes colaborativos (Investigador, Redactor, Crítico), prototipado ágil y tareas de contenido.",
    stateModel: "Paso de tareas secuenciales o jerárquicas delegadas por un agente mánager.",
    strengths: [
      "Extremadamente intuitivo y rápido de poner en marcha",
      "Excelente definición de objetivos, contexto y 'backstory' por rol",
      "Ecosistema rico en herramientas empaquetadas",
      "Muy adecuado para flujos de trabajo orientados a tareas creativas"
    ],
    weaknesses: [
      "Menos control fino sobre estados condicionales complejos",
      "Depuración más opaca cuando los agentes conversan intensamente"
    ],
    enterpriseVerdict: "Ideal para Prototipado Rápido y Flujos de Conocimiento",
    badgeColor: "border-amber-500/40 bg-amber-950/30 text-amber-300"
  },
  {
    name: "AutoGen",
    logo: "💬",
    philosophy: "Conversación Dialéctica Multi-Agente & Asíncrona",
    bestFor: "Ingeniería de software autónoma, resolución creativa de acertijos matemáticos y depuración interactiva de código.",
    stateModel: "Intercambio continuo de mensajes en canales compartidos con terminación por consenso.",
    strengths: [
      "Generación y ejecución iterativa de código muy potente",
      "Comportamiento emergente sofisticado en resolución de problemas complejos",
      "Arquitectura distribuida y altamente extensible"
    ],
    weaknesses: [
      "Riesgo de conversaciones redundantes con alto consumo de tokens",
      "Dificultad para garantizar determinismo estricto en auditorías"
    ],
    enterpriseVerdict: "Poderoso para Laboratorios de I+D y Programación Asistida",
    badgeColor: "border-emerald-500/40 bg-emerald-950/30 text-emerald-300"
  }
];

export const REACT_SIMULATION_SCENARIOS = [
  {
    id: "finance",
    label: "Conciliación Bancaria con Error 429",
    difficulty: "Alta Concurrencia",
    steps: [
      {
        phase: "reason" as const,
        title: "Paso 1: Análisis del Objetivo",
        agentThought: "Objetivo: Obtener las 200 transacciones del cliente 8841 y conciliar con el balance de contabilidad.",
        agentAction: "GET /api/v2/transactions?account=8841&limit=200",
        systemObservation: "HTTP 429 Too Many Requests | Rate limit exceeded. Retry-After: 2s",
        isErrorState: true,
        scriptComparisonText: "CRASH: UnhandledException 'HttpRateLimitError'. El script de Python finaliza de inmediato con código de salida 1."
      },
      {
        phase: "correct" as const,
        title: "Paso 2: Diagnóstico y Autocorrección",
        agentThought: "El servidor aplicó limitador de tasa. El encabezado indica reintentar en 2 segundos. No aborto; activo temporizador de espera y particiono la consulta en 2 lotes de 100 con backoff exponencial.",
        agentAction: "Sleep(2100ms) -> GET /api/v2/transactions?account=8841&limit=100&page=1",
        systemObservation: "HTTP 200 OK | Recibidos 100 registros. Balance intermedio calculado: $42,350.00.",
        isErrorState: false,
        scriptComparisonText: "El script tradicional ya está muerto. Requiere intervención manual del ingeniero de guardia."
      },
      {
        phase: "act" as const,
        title: "Paso 3: Segunda Consulta y Conciliación",
        agentThought: "Lote 1 recibido con éxito. Descargo el Lote 2 y cruzo hashes criptográficos con el libro mayor de Postgres.",
        agentAction: "GET /api/v2/transactions?page=2 -> SELECT sum(amount) FROM ledger WHERE account=8841",
        systemObservation: "HTTP 200 OK | Postgres reporta $42,350.00. Cuadre exacto al céntimo. Cero discrepancias.",
        isErrorState: false,
        scriptComparisonText: "El equipo de operaciones recibe una alerta de PagerDuty por el script caído."
      },
      {
        phase: "complete" as const,
        title: "Paso 4: Tarea Culminada",
        agentThought: "Conciliación completada con éxito. Escribo informe de auditoría con huella SHA-256.",
        agentAction: "AuditLogger.recordSuccess({ account: 8841, matched: 200, balance: 42350.00 })",
        systemObservation: "Reporte generado. Notificación enviada a Slack #finance-ops.",
        isErrorState: false,
        scriptComparisonText: "Sin resultados generados."
      }
    ]
  },
  {
    id: "database",
    label: "Modificación de Esquema SQL en Migración",
    difficulty: "Desfase de Esquema",
    steps: [
      {
        phase: "reason" as const,
        title: "Paso 1: Consulta Inicial",
        agentThought: "Necesito el listado de clientes activos para generar el reporte de facturación trimestral.",
        agentAction: "SELECT id, full_name, is_active FROM users WHERE is_active = true",
        systemObservation: "ERROR: column 'full_name' does not exist in relation 'users'. Did you mean 'first_name', 'last_name'?",
        isErrorState: true,
        scriptComparisonText: "CRASH: psycopg2.errors.UndefinedColumn. La tubería ETL de las 2 AM se detiene por completo."
      },
      {
        phase: "correct" as const,
        title: "Paso 2: Inspección del Esquema y Adaptación",
        agentThought: "La columna 'full_name' fue descompuesta en la última migración. Reviso el catálogo 'information_schema.columns' y reformulo la consulta concatenando first_name y last_name.",
        agentAction: "SELECT id, CONCAT(first_name, ' ', last_name) AS full_name, status FROM users WHERE status = 'ACTIVE'",
        systemObservation: "Query exitosa: 1,420 filas devueltas en 38ms.",
        isErrorState: false,
        scriptComparisonText: "El script requiere un hotfix manual, un PR en GitHub y un nuevo despliegue."
      },
      {
        phase: "complete" as const,
        title: "Paso 3: Finalización sin Fricción",
        agentThought: "Exporto los datos a CSV comprimido y actualizo la caché de esquema para futuras ejecuciones.",
        agentAction: "SaveReportToS3('users_active_q3.parquet') + LogSchemaShiftNotice()",
        systemObservation: "Archivo subido exitosamente. Alerta preventiva registrada en canal de data.",
        isErrorState: false,
        scriptComparisonText: "El informe trimestral se entrega con 8 horas de retraso."
      }
    ]
  }
];
