import React, { useState } from 'react';
import { Brain, Cpu, ShieldCheck, Zap, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import heroImg from '../../assets/images/deck_hero_ai_agents_1792091009054.jpg';

export function SlideFormula() {
  const [harnessLevel, setHarnessLevel] = useState<number>(75);
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator'>('overview');

  // Computed state based on harness slider
  const getAgentPersona = (level: number) => {
    if (level < 25) {
      return {
        tier: "Chatbot Textual Básico",
        capability: "Solo responde preguntas con texto",
        autonomyScore: "15%",
        canAct: false,
        hasMemory: false,
        hasSecurity: false,
        example: "Usuario: 'Cancela la reserva #402'. Chatbot: 'Para cancelar reservas debes ir a www.ejemplo.com/reservas'",
        verdict: "Sin Harness: Cero capacidad operativa. El modelo razona en el vacío sin acceso a sistemas."
      };
    } else if (level < 60) {
      return {
        tier: "Asistente con Tool Calling Primitivo",
        capability: "Invoca APIs directas pero sin aislamiento ni reintentos",
        autonomyScore: "50%",
        canAct: true,
        hasMemory: true,
        hasSecurity: false,
        example: "Usuario: 'Cancela la reserva #402'. Asistente: Llama a DELETE /api/reservations/402 (pero si falla la red, arroja error y se detiene)",
        verdict: "Harness Parcial: Ejecuta acciones pero carece de resiliencia, compresión y sandboxes."
      };
    } else {
      return {
        tier: "Agente Autónomo Completo de Producción",
        capability: "Ciclo ReAct completo, memoria compactada, sandbox y firewall de seguridad",
        autonomyScore: "95%",
        canAct: true,
        hasMemory: true,
        hasSecurity: true,
        example: "Usuario: 'Cancela la reserva #402 y emite reembolso'. Agente: Valida política, pide token, reintenta con backoff, ejecuta en sandbox y emite comprobante criptográfico.",
        verdict: "Harness Maduro: Sistema autónomo de nivel empresarial con límites infranqueables."
      };
    }
  };

  const persona = getAgentPersona(harnessLevel);

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
            <span>Diapositiva 01</span>
            <span aria-hidden="true">·</span>
            <span>Arquitectura Fundamental</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            De Chatbots Reactivos a Agentes Autónomos
          </h2>
          <p className="text-sm lg:text-base text-slate-400 mt-1">
            Cómo el <strong className="text-slate-200">Harness</strong>, las <strong className="text-slate-200">Skills</strong> y la <strong className="text-slate-200">Automatización</strong> están redefiniendo el software moderno.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Concepto & Ecuación
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'simulator'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Simulador de Autonomía
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-stretch">
          {/* Left Column: The Architectural Equation & Concept */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* The Formula Callout */}
            <div className="relative overflow-hidden p-6 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl">
              <div className="text-xs uppercase tracking-widest font-mono text-cyan-400 font-semibold mb-2">
                La Ecuación Arquitectónica Fundamental
              </div>
              <div className="py-4 px-5 rounded-lg bg-slate-950/80 border border-cyan-500/30 flex items-center justify-center text-center">
                <span className="font-mono text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  <span className="text-amber-400">Agente</span>
                  <span className="text-slate-400 mx-3">=</span>
                  <span className="text-cyan-400">Modelo</span>
                  <span className="text-slate-400 mx-3">+</span>
                  <span className="text-emerald-400">Harness</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                Olvídate de los chats que solo devuelven texto. Un Agente de IA es un sistema socio-técnico completo donde el modelo piensa, pero la infraestructura ejecuta en el mundo real bajo estrictos límites de ingeniería.
              </p>
            </div>

            {/* Brain vs Body Dual Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {/* The Model (Brain) */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">El Modelo</h4>
                      <span className="text-xs text-cyan-300 font-mono">El Cerebro Probabilístico</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">·</span>
                      <span>Razona sobre objetivos complejos y planifica secuencias de pasos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">·</span>
                      <span>Toma decisiones probabilísticas analizando lenguaje natural y contexto.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">·</span>
                      <span>Genera hipótesis de solución y sintetiza observaciones.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 font-mono">
                  Naturaleza: No determinista · Creativo · Cognitivo
                </div>
              </div>

              {/* The Harness (Body) */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">El Harness</h4>
                      <span className="text-xs text-emerald-300 font-mono">El Cuerpo Determinista</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">·</span>
                      <span>Infraestructura que da <strong>manos</strong> (invocación de APIs y ejecución de código).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">·</span>
                      <span>Otorga <strong>memoria</strong> persistente y compactación de historiales largos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">·</span>
                      <span>Aplica <strong>límites y seguridad</strong> (Hooks, Sandboxes y control de costes).</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 font-mono">
                  Naturaleza: Determinista · Seguro · Software Engineering
                </div>
              </div>
            </div>

            {/* Quick takeaway banner */}
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Axioma de Producción:</strong> Cambiar de LLM cuesta 1 línea de configuración; reconstruir el Harness cuesta meses de ingeniería.
                </span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Keynote Asset */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/9] lg:aspect-auto lg:flex-1 shadow-2xl flex items-center justify-center group">
              <img
                src={heroImg}
                alt="Arquitectura de Agentes de IA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800/80">
                <p className="text-xs font-semibold text-white">
                  Infraestructura Agéntica Moderna
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  El razonamiento del modelo orquestado por interfaces de red, sandboxes y protocolos de herramientas.
                </p>
              </div>
            </div>

            {/* Key distinction metric block */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="text-xs font-semibold text-slate-300 mb-2">
                ¿Por qué fracasa el 90% de los proyectos sin Harness?
              </div>
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Alucinaciones de sintaxis y llamadas huérfanas:</span>
                  <span className="text-amber-400 font-mono">Sin validación tipada</span>
                </div>
                <div className="flex justify-between">
                  <span>Fugas de seguridad en ejecución de comandos:</span>
                  <span className="text-rose-400 font-mono">Sin sandbox aislado</span>
                </div>
                <div className="flex justify-between">
                  <span>Coste desorbitado por prompts kilométricos:</span>
                  <span className="text-cyan-400 font-mono">Sin context compaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Interactive Simulator Tab */
        <div className="flex-1 flex flex-col space-y-6 bg-slate-900/40 p-6 rounded-xl border border-slate-800">
          <div className="max-w-3xl">
            <h3 className="text-lg font-bold text-white mb-1">
              Laboratorio: Impacto del Nivel de Harness en la Autonomía
            </h3>
            <p className="text-xs text-slate-400">
              Desplaza el control deslizante para observar cómo añadir capas de infraestructura (Harness) transforma un LLM básico en un agente de producción resiliente.
            </p>
          </div>

          {/* Slider control */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Solo Modelo (Chatbot)</span>
              <span className="text-cyan-400 font-bold text-sm">Madurez del Harness: {harnessLevel}%</span>
              <span className="text-emerald-400">Harness Empresarial</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={harnessLevel}
              onChange={(e) => setHarnessLevel(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="grid grid-cols-3 text-center text-[11px] text-slate-500 font-mono">
              <button onClick={() => setHarnessLevel(15)} className="hover:text-slate-300">0–25%: Chatbot Reactivo</button>
              <button onClick={() => setHarnessLevel(45)} className="hover:text-slate-300">26–60%: Tool Calling Frágil</button>
              <button onClick={() => setHarnessLevel(85)} className="hover:text-slate-300">61–100%: Agente Autónomo</button>
            </div>
          </div>

          {/* Persona Result Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-stretch">
            <div className="md:col-span-5 p-5 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Nivel de Sistema
                </span>
                <h4 className="text-xl font-bold text-white mt-1 mb-2">
                  {persona.tier}
                </h4>
                <p className="text-xs text-slate-300 mb-4">
                  {persona.capability}
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Capacidad de Actuar:</span>
                    <span className={`font-semibold ${persona.canAct ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {persona.canAct ? 'Habilitada (APIs / Código)' : 'Bloqueada (Solo texto)'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Memoria Persistente:</span>
                    <span className={`font-semibold ${persona.hasMemory ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {persona.hasMemory ? 'Context Compaction Activo' : 'Olvido en cada turno'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Gobernanza & Sandboxes:</span>
                    <span className={`font-semibold ${persona.hasSecurity ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {persona.hasSecurity ? 'Hooks & Políticas Reales' : 'Vulnerable a Prompt Injection'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Índice de Autonomía Real:</span>
                <span className="text-lg font-bold font-mono text-cyan-400">{persona.autonomyScore}</span>
              </div>
            </div>

            {/* Practical Scenario Simulation Output */}
            <div className="md:col-span-7 p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    Caso Práctico en Producción
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Tarea: Cancelar Reserva Crítica</span>
                </div>

                <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed space-y-3">
                  <div className="text-slate-400">
                    <span className="text-cyan-400 font-bold">$</span> prompt: &quot;Cancela la reserva #402 y emite el reembolso correspondiente.&quot;
                  </div>
                  <div className="p-3 rounded bg-slate-950 border border-slate-800/80 text-slate-200">
                    {persona.example}
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200">
                <strong>Diagnóstico Arquitectónico:</strong> {persona.verdict}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
