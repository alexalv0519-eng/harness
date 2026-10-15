import React, { useState } from 'react';
import { Users, GitBranch, MessageSquare, CheckCircle, ShieldCheck, UserCheck, ArrowRight, Play, RefreshCw } from 'lucide-react';
import { FRAMEWORKS_DATA } from '../../data/slidesData';
import multiAgentImg from '../../assets/images/multi_agent_network_1792091009237.jpg';

export function SlideFrameworks() {
  const [selectedFramework, setSelectedFramework] = useState<string>('LangGraph');
  const [activeTab, setActiveTab] = useState<'comparison' | 'hybridPipeline'>('hybridPipeline');

  // Interactive Hybrid Pipeline State
  const [hybridStep, setHybridStep] = useState<number>(0);
  const [humanDecision, setHumanDecision] = useState<'pending' | 'approved' | 'rejected'>('pending');

  const fw = FRAMEWORKS_DATA.find(f => f.name === selectedFramework) || FRAMEWORKS_DATA[0];

  const handleRunHybridStep = () => {
    if (hybridStep === 2 && humanDecision === 'pending') {
      // Must wait for human in the loop!
      return;
    }
    if (hybridStep < 3) {
      setHybridStep(prev => prev + 1);
    } else {
      setHybridStep(0);
      setHumanDecision('pending');
    }
  };

  const handleResetHybrid = () => {
    setHybridStep(0);
    setHumanDecision('pending');
  };

  return (
    <div className="flex flex-col h-full space-y-5">
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
            <span>Diapositiva 05</span>
            <span aria-hidden="true">·</span>
            <span>Orquestación & Ecosistema</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            AUTOMATIZACIÓN – La Guerra de los Frameworks Multi-Agente
          </h2>
          <p className="text-sm lg:text-base text-slate-400 mt-1">
            De la Automatización Rígida (RPA) a la Colaboración Multi-Agente: <strong className="text-cyan-300">LangGraph</strong>, <strong className="text-amber-300">CrewAI</strong>, <strong className="text-emerald-300">AutoGen</strong> y la Arquitectura Híbrida.
          </p>
        </div>

        {/* View toggles */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            onClick={() => setActiveTab('hybridPipeline')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'hybridPipeline'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Arquitectura Híbrida (Ganadora)
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'comparison'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Batalla de Frameworks
          </button>
        </div>
      </div>

      {activeTab === 'hybridPipeline' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
          {/* Left Column: Visual Asset & Concept */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-52 shadow-xl group">
              <img
                src={multiAgentImg}
                alt="Red de Colaboración Multi-Agente con Checkpoint Humano"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 p-2.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300">
                <span className="font-bold text-amber-300">El Patrón de Oro:</span> Equipos creativos exploran libremente; grafos de estado deterministas ejecutan las acciones críticas.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <h4 className="font-bold text-white text-sm">
                ¿Por qué una sola metodología no basta?
              </h4>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">·</span>
                  <span>Si solo usas roles creativos (CrewAI/AutoGen): careces de determinismo y auditabilidad estricta ante auditores.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-400 font-bold">·</span>
                  <span>Si solo usas grafos rígidos (LangGraph): pierdes la riqueza de brainstorming y síntesis divergente.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">·</span>
                  <span><strong>La solución:</strong> Hibridación simbiótica con compuertas Human-in-the-Loop.</span>
                </li>
              </ul>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Gobernanza regulada:</span>
              <span className="text-cyan-300 font-mono font-semibold">HITL Obligatorio en Nivel 3</span>
            </div>
          </div>

          {/* Right Column: Interactive Hybrid Pipeline Runner */}
          <div className="lg:col-span-7 flex flex-col justify-between p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Pipeline Interactivo: Auditoría y Despliegue Financiero
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Observa la transición de la fase creativa a la fase determinista con checkpoint humano.
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-400">
                  Fase {hybridStep + 1} de 4
                </span>
              </div>

              {/* Step Flow Indicators */}
              <div className="grid grid-cols-4 gap-2 mb-4 font-mono text-[11px]">
                <div className={`p-2 rounded border text-center transition-all ${
                  hybridStep === 0
                    ? 'border-amber-500 bg-amber-950/40 text-amber-200'
                    : 'border-slate-800 bg-slate-950 text-slate-500'
                }`}>
                  1. Exploración
                </div>
                <div className={`p-2 rounded border text-center transition-all ${
                  hybridStep === 1
                    ? 'border-sky-500 bg-sky-950/40 text-sky-200'
                    : 'border-slate-800 bg-slate-950 text-slate-500'
                }`}>
                  2. Paquete Tipado
                </div>
                <div className={`p-2 rounded border text-center transition-all ${
                  hybridStep === 2
                    ? 'border-purple-500 bg-purple-950/40 text-purple-200'
                    : 'border-slate-800 bg-slate-950 text-slate-500'
                }`}>
                  3. Checkpoint HITL
                </div>
                <div className={`p-2 rounded border text-center transition-all ${
                  hybridStep === 3
                    ? 'border-emerald-500 bg-emerald-950/40 text-emerald-200'
                    : 'border-slate-800 bg-slate-950 text-slate-500'
                }`}>
                  4. Despliegue
                </div>
              </div>

              {/* Active Step Content */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
                {hybridStep === 0 && (
                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center gap-2 text-amber-400 font-bold">
                      <Users className="w-4 h-4" />
                      <span>Fase 1: Equipo Creativo de Investigación (CrewAI / AutoGen)</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Tres agentes con roles especializados colaboran de forma desestructurada:
                    </p>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1 text-[11px]">
                      <div>🔍 <strong>Agente Investigador:</strong> &quot;He analizado 1,200 transacciones y detecté una discrepancia de $14,200 en la cuenta 99.&quot;</div>
                      <div>✍️ <strong>Agente Redactor:</strong> &quot;Formulo la propuesta de ajuste contable y la justificación legal según IFRS-15.&quot;</div>
                      <div>⚖️ <strong>Agente Crítico:</strong> &quot;Revisada la legislación: la propuesta cumple normativas pero requiere autorización ejecutiva.&quot;</div>
                    </div>
                  </div>
                )}

                {hybridStep === 1 && (
                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center gap-2 text-sky-400 font-bold">
                      <GitBranch className="w-4 h-4" />
                      <span>Fase 2: Compilación hacia Grafo de Estado (LangGraph)</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      El equipo libre genera un objeto fuertemente tipado (Pydantic / Zod) que se inyecta en el State Graph determinista:
                    </p>
                    <pre className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-sky-300 overflow-x-auto">
{`StateSnapshot: {
  "task_id": "TX_ADJUST_9941",
  "amount": 14200.00,
  "action": "LEDGER_CORRECTION",
  "requires_hitl": true,
  "state_node": "AWAITING_HUMAN_APPROVAL"
}`}
                    </pre>
                  </div>
                )}

                {hybridStep === 2 && (
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center gap-2 text-purple-400 font-bold">
                      <UserCheck className="w-4 h-4" />
                      <span>Fase 3: Compuerta Crítica Human-in-the-Loop</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      El grafo se detiene (Time-Travel Breakpoint). El sistema no moverá ni un céntimo sin la firma explícita del humano responsable:
                    </p>

                    <div className="p-3 rounded-lg bg-purple-950/20 border border-purple-800/40 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-purple-200">
                          Acción solicitada: Ajuste contable por $14,200.00
                        </span>
                        <span className="font-mono text-amber-400 text-[11px]">Riesgo: Financiero</span>
                      </div>

                      {humanDecision === 'pending' ? (
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => {
                              setHumanDecision('approved');
                              setHybridStep(3);
                            }}
                            className="flex-1 py-2 px-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
                          >
                            ✅ Autorizar Transacción ($14,200)
                          </button>
                          <button
                            onClick={() => setHumanDecision('rejected')}
                            className="py-2 px-3 text-xs font-semibold text-rose-300 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-800 rounded-md transition-colors"
                          >
                            ❌ Rechazar y Reabrir Discusión
                          </button>
                        </div>
                      ) : (
                        <div className={`p-2 rounded text-center text-xs font-bold ${
                          humanDecision === 'approved'
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            : 'bg-rose-950 text-rose-300 border border-rose-800'
                        }`}>
                          {humanDecision === 'approved'
                            ? '¡Autorizado por el operador humano! Continuando ejecución...'
                            : 'Rechazado por el operador. El grafo retrocede al nodo de revisión.'}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {hybridStep === 3 && (
                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Fase 4: Ejecución Determinista en Producción</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Con la aprobación registrada en el log de auditoría criptográfico, el nodo final de LangGraph despacha la llamada:
                    </p>
                    <div className="p-2.5 rounded bg-slate-900 border border-emerald-900/50 space-y-1 text-[11px] text-emerald-300">
                      <div>✓ Transacción bancaria TX_ADJUST_9941 ejecutada en Core Banking API.</div>
                      <div>✓ Libro mayor actualizado con hash SHA-256 inmutable.</div>
                      <div>✓ Notificación ejecutiva archivada en sistema de cumplimiento.</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Pipeline Controls */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={handleResetHybrid}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white rounded bg-slate-950 border border-slate-800 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reiniciar Demo</span>
              </button>

              <button
                onClick={handleRunHybridStep}
                disabled={hybridStep === 2 && humanDecision === 'pending'}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                  hybridStep === 2 && humanDecision === 'pending'
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md shadow-cyan-950'
                }`}
              >
                <span>
                  {hybridStep === 3 ? 'Repetir Flujo Híbrido' : 'Siguiente Fase del Grafo'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Frameworks Battle Comparison View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
          <div className="lg:col-span-4 space-y-3">
            {FRAMEWORKS_DATA.map((framework) => {
              const isSelected = framework.name === selectedFramework;
              return (
                <button
                  key={framework.name}
                  onClick={() => setSelectedFramework(framework.name)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? `${framework.badgeColor} ring-1 ring-cyan-500/50 shadow-lg`
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl">{framework.logo}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                      {framework.name}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-base mt-1">{framework.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{framework.philosophy}</p>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{fw.logo}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{fw.name}</h3>
                    <span className="text-xs text-slate-400 font-mono">{fw.philosophy}</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                  {fw.enterpriseVerdict}
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800/80 mb-4 text-xs">
                <strong className="text-slate-300 block mb-1">🎯 Caso de Uso Óptimo:</strong>
                <p className="text-slate-400">{fw.bestFor}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-emerald-950/50">
                  <span className="text-emerald-400 font-bold block mb-2">✅ Fortalezas Principales:</span>
                  <ul className="space-y-1.5 text-slate-300 text-[11px]">
                    {fw.strengths.map((str, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">·</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-rose-950/50">
                  <span className="text-rose-400 font-bold block mb-2">⚠️ Puntos Débiles / Compromisos:</span>
                  <ul className="space-y-1.5 text-slate-300 text-[11px]">
                    {fw.weaknesses.map((weak, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-400 font-bold">·</span>
                        <span>{weak}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Modelo de Estado Interno:</span>
              <span className="text-slate-300 font-mono text-[11px]">{fw.stateModel}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
