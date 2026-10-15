import React, { useState } from 'react';
import { Target, ShieldCheck, Zap, Layers, CheckSquare, ArrowRight, BookOpen, Download, Sparkles } from 'lucide-react';

interface SlideConclusionsProps {
  onOpenExportModal: () => void;
  onOpenPresenterModal: () => void;
}

export function SlideConclusions({ onOpenExportModal, onOpenPresenterModal }: SlideConclusionsProps) {
  const [selectedUseCase, setSelectedUseCase] = useState<'finance' | 'coding' | 'support' | 'analytics'>('finance');
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    hooks: true,
    sandbox: true,
    mcp: true,
    compaction: false,
    hitl: true,
    telemetry: false
  });

  const toggleChecklist = (key: string) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;

  const useCases = {
    finance: {
      name: "Automatización Financiera & Auditoría",
      stack: "LangGraph + Model Context Protocol (MCP) + MicroVM Sandbox",
      pattern: "Grafo determinista con checkpoints obligatorios Human-in-the-Loop antes de movimientos de capital.",
      security: "Pre-execution hooks estrictos con listas blancas de endpoints bancarios y hashes SHA-256."
    },
    coding: {
      name: "Ingeniería de Software & Bugfixing",
      stack: "AutoGen o Claude Code / Gemini CLI + Docker Sandbox + MCP Git",
      pattern: "Ciclo dialéctico de programación, compilación iterativa, ejecución de tests y PR automatizado.",
      security: "Aislamiento de red para prevenir exfiltración de credenciales SSH o tokens de entorno."
    },
    support: {
      name: "Soporte al Cliente & Operaciones",
      stack: "CrewAI / LangGraph Híbrido + RAG Semántico + Context Compaction",
      pattern: "Agente de triaje y resolución con memoria compactada para conversaciones prolongadas.",
      security: "Sanitización de PII (información personal identificable) y guardrails de tono institucional."
    },
    analytics: {
      name: "Generación de Informes & BI",
      stack: "Code Execution over MCP + Postgres Read-Only + DuckDB local",
      pattern: "El agente escribe scripts SQL / Python en sandbox para agregar millones de filas y solo devuelve gráficos.",
      security: "Credenciales de sólo lectura y cuotas estrictas de tiempo de CPU y memoria RAM."
    }
  };

  const currentRecommendation = useCases[selectedUseCase];

  return (
    <div className="flex flex-col h-full space-y-5">
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
            <span>Diapositiva 06</span>
            <span aria-hidden="true">·</span>
            <span>Visión & Hoja de Ruta</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Conclusiones y Próximos Pasos
          </h2>
          <p className="text-sm lg:text-base text-slate-400 mt-1">
            El Futuro de la Ingeniería de Software Agéntica: Principios de Arquitectura y Preparación para Producción.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenExportModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Exportar Guion (MD)</span>
          </button>
          <button
            onClick={onOpenPresenterModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ver Modo Presentador</span>
          </button>
        </div>
      </div>

      {/* 3 Core Strategic Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pillar 1: Desacoplamiento */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">1. Desacoplamiento</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Los modelos son fungibles y se renuevan cada trimestre. Tu propiedad intelectual y ventaja competitiva reside en la madurez del <strong>Harness</strong> de tu organización.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
            Axioma: Modelo = Commodity · Harness = Valor
          </div>
        </div>

        {/* Pillar 2: Seguridad Primero */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400 border border-amber-500/30">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">2. Seguridad Primero</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              La gobernanza empresarial no se pide &quot;por favor&quot; en un prompt de lenguaje natural. Se impone de forma determinista mediante <strong>Hooks, Sandboxes y MicroVMs</strong>.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-400 font-mono">
            Axioma: Zero Trust en inferencia de LLMs
          </div>
        </div>

        {/* Pillar 3: Eficiencia por Diseño */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">3. Eficiencia & MCP</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              La escala económica exige estándares abiertos (MCP) y ejecución de código en sandbox para filtrar datos masivos antes de alimentar al modelo, reduciendo costes hasta un 95%.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-mono">
            Axioma: Code Execution over MCP
          </div>
        </div>
      </div>

      {/* Two-zone section: Interactive Architecture Recommender & Production Readiness Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left 7 cols: Interactive Architecture Decision Matrix */}
        <div className="lg:col-span-7 flex flex-col justify-between p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Matriz de Decisión: Elige tu Arquitectura Agéntica
              </h3>
            </div>

            {/* Use case buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4 p-1 bg-slate-950 rounded-lg border border-slate-800">
              <button
                onClick={() => setSelectedUseCase('finance')}
                className={`py-2 px-2 text-xs font-semibold rounded transition-colors text-center ${
                  selectedUseCase === 'finance'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Finanzas / Regulación
              </button>
              <button
                onClick={() => setSelectedUseCase('coding')}
                className={`py-2 px-2 text-xs font-semibold rounded transition-colors text-center ${
                  selectedUseCase === 'coding'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Ingeniería de Software
              </button>
              <button
                onClick={() => setSelectedUseCase('support')}
                className={`py-2 px-2 text-xs font-semibold rounded transition-colors text-center ${
                  selectedUseCase === 'support'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Atención & Operaciones
              </button>
              <button
                onClick={() => setSelectedUseCase('analytics')}
                className={`py-2 px-2 text-xs font-semibold rounded transition-colors text-center ${
                  selectedUseCase === 'analytics'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Analítica de Datos
              </button>
            </div>

            {/* Recommendation details */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500">Stack Recomendado</span>
                <h4 className="text-base font-bold text-cyan-300 mt-0.5">
                  {currentRecommendation.stack}
                </h4>
              </div>

              <div className="p-3 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <strong className="text-white block mb-0.5">Patrón de Orquestación:</strong>
                {currentRecommendation.pattern}
              </div>

              <div className="p-3 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <strong className="text-amber-400 block mb-0.5">Política de Seguridad Obligatoria:</strong>
                {currentRecommendation.security}
              </div>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-slate-400 font-mono">
            Diseño validado para despliegues en nubes corporativas (GCP Cloud Run / AWS ECS).
          </div>
        </div>

        {/* Right 5 cols: Enterprise Production Readiness Checklist */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Checklist de Madurez para Producción
              </h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
                {completedCount} / 6 Listos
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mb-3">
              Verifica los requisitos antes de liberar agentes con acceso a sistemas de misión crítica:
            </p>

            <div className="space-y-2 text-xs">
              <label
                onClick={() => toggleChecklist('hooks')}
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:bg-slate-900 transition-colors"
              >
                <span className="text-slate-300">Pre-execution Hooks deterministas</span>
                <span className={`font-mono text-xs font-bold ${checklist.hooks ? 'text-emerald-400' : 'text-slate-600'}`}>
                  {checklist.hooks ? '[✓ ACTIVO]' : '[○ PENDIENTE]'}
                </span>
              </label>

              <label
                onClick={() => toggleChecklist('sandbox')}
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:bg-slate-900 transition-colors"
              >
                <span className="text-slate-300">Sandbox aislado para ejecución de código</span>
                <span className={`font-mono text-xs font-bold ${checklist.sandbox ? 'text-emerald-400' : 'text-slate-600'}`}>
                  {checklist.sandbox ? '[✓ ACTIVO]' : '[○ PENDIENTE]'}
                </span>
              </label>

              <label
                onClick={() => toggleChecklist('mcp')}
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:bg-slate-900 transition-colors"
              >
                <span className="text-slate-300">Adopción de estándar MCP (JSON-RPC)</span>
                <span className={`font-mono text-xs font-bold ${checklist.mcp ? 'text-emerald-400' : 'text-slate-600'}`}>
                  {checklist.mcp ? '[✓ ACTIVO]' : '[○ PENDIENTE]'}
                </span>
              </label>

              <label
                onClick={() => toggleChecklist('compaction')}
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:bg-slate-900 transition-colors"
              >
                <span className="text-slate-300">Context Compaction para historiales largos</span>
                <span className={`font-mono text-xs font-bold ${checklist.compaction ? 'text-emerald-400' : 'text-slate-600'}`}>
                  {checklist.compaction ? '[✓ ACTIVO]' : '[○ PENDIENTE]'}
                </span>
              </label>

              <label
                onClick={() => toggleChecklist('hitl')}
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:bg-slate-900 transition-colors"
              >
                <span className="text-slate-300">Compuertas Human-in-the-Loop en acciones críticas</span>
                <span className={`font-mono text-xs font-bold ${checklist.hitl ? 'text-emerald-400' : 'text-slate-600'}`}>
                  {checklist.hitl ? '[✓ ACTIVO]' : '[○ PENDIENTE]'}
                </span>
              </label>

              <label
                onClick={() => toggleChecklist('telemetry')}
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 cursor-pointer hover:bg-slate-900 transition-colors"
              >
                <span className="text-slate-300">Trazabilidad de evaluación de inputs y outputs</span>
                <span className={`font-mono text-xs font-bold ${checklist.telemetry ? 'text-emerald-400' : 'text-slate-600'}`}>
                  {checklist.telemetry ? '[✓ ACTIVO]' : '[○ PENDIENTE]'}
                </span>
              </label>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Diagnóstico de tu equipo:</span>
            <span className="text-cyan-300 font-bold font-mono">
              {completedCount >= 5 ? 'Apto para Producción' : 'En Fase de Endurecimiento'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
