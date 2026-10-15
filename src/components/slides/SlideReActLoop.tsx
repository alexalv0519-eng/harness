import React, { useState } from 'react';
import { Eye, ArrowRight, Play, RotateCcw, AlertTriangle, CheckCircle, Terminal, HelpCircle, Activity } from 'lucide-react';
import { REACT_SIMULATION_SCENARIOS } from '../../data/slidesData';

export function SlideReActLoop() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const scenario = REACT_SIMULATION_SCENARIOS[selectedScenarioIndex];
  const step = scenario.steps[currentStepIndex];

  const handleNextStep = () => {
    if (currentStepIndex < scenario.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setCurrentStepIndex(0);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsAutoPlaying(false);
  };

  const phases = [
    {
      id: 'reason',
      num: '1',
      title: 'Razonar (Reason)',
      desc: 'El cerebro analiza el objetivo, la memoria y las pistas del entorno.',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/30'
    },
    {
      id: 'act',
      num: '2',
      title: 'Actuar (Act)',
      desc: 'El Harness ejecuta la orden (API, código o base de datos).',
      color: 'border-amber-500 text-amber-400 bg-amber-950/30'
    },
    {
      id: 'observe',
      num: '3',
      title: 'Observar (Observe)',
      desc: 'El sistema captura el resultado o el error y lo entrega como contexto.',
      color: 'border-purple-500 text-purple-400 bg-purple-950/30'
    },
    {
      id: 'correct',
      num: '4',
      title: 'Autocorrección',
      desc: 'Si algo falla, ¡ajusta su estrategia y reintenta autónomamente!',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/30'
    }
  ];

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
            <span>Diapositiva 02</span>
            <span aria-hidden="true">·</span>
            <span>Mecanismo Cognitivo</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            ¿Cómo Piensa y Actúa un Agente?
          </h2>
          <p className="text-sm lg:text-base text-slate-400 mt-1">
            Del Prompt Estático al Ciclo Vivo de Acción (El Bucle <strong className="text-cyan-300 font-mono">ReAct</strong>).
          </p>
        </div>

        {/* Scenario selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">Escenario:</span>
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            {REACT_SIMULATION_SCENARIOS.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => {
                  setSelectedScenarioIndex(idx);
                  setCurrentStepIndex(0);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedScenarioIndex === idx
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {sc.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* The 4 Phases Diagram Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {phases.map((ph, idx) => {
          const isCurrent = step.phase === ph.id || (ph.id === 'observe' && step.phase === 'act');
          return (
            <div
              key={ph.id}
              className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                isCurrent
                  ? `${ph.color} ring-1 ring-cyan-500/50 shadow-lg shadow-cyan-950/40 scale-[1.02]`
                  : 'bg-slate-900/50 border-slate-800/80 text-slate-400 opacity-80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                    {ph.num}
                  </span>
                  {isCurrent && (
                    <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                      Fase Activa
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-sm text-slate-100">{ph.title}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">{ph.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulation Stage: Agent vs Script Traditional */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-stretch">
        {/* Left 7 cols: The Agent's Internal Mind & Execution */}
        <div className="lg:col-span-7 flex flex-col justify-between p-5 rounded-xl bg-slate-900/60 border border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-300 font-semibold uppercase">
                  Agente Autónomo · {step.title}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Paso {currentStepIndex + 1} de {scenario.steps.length}
              </span>
            </div>

            {/* Cognitive Stream */}
            <div className="space-y-3 font-mono text-xs">
              {/* 1. Reasoning Thought */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-cyan-900/40">
                <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
                  <span>🧠 1. Razonamiento (Thought):</span>
                </div>
                <p className="text-slate-300 leading-relaxed pl-5 border-l border-cyan-500/30">
                  {step.agentThought}
                </p>
              </div>

              {/* 2. Action Executed */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-amber-900/40">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                  <span>⚡ 2. Acción Despachada (Action):</span>
                </div>
                <p className="text-amber-200/90 leading-relaxed pl-5 border-l border-amber-500/30">
                  {step.agentAction}
                </p>
              </div>

              {/* 3. Observation Received */}
              <div className={`p-3.5 rounded-lg bg-slate-950 border ${
                step.isErrorState ? 'border-rose-900/60' : 'border-purple-900/40'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <div className={`flex items-center gap-2 font-bold ${
                    step.isErrorState ? 'text-rose-400' : 'text-purple-400'
                  }`}>
                    <span>📡 3. Observación del Entorno (Observation):</span>
                  </div>
                  {step.isErrorState && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                      Error Detectado
                    </span>
                  )}
                </div>
                <p className="text-slate-300 leading-relaxed pl-5 border-l border-purple-500/30">
                  {step.systemObservation}
                </p>
              </div>
            </div>
          </div>

          {/* Stepper controls */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white rounded-lg bg-slate-950 border border-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleNextStep}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-950 transition-colors"
              >
                <span>
                  {currentStepIndex === scenario.steps.length - 1 ? 'Repetir Ciclo' : 'Siguiente Paso (ReAct)'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right 5 cols: Traditional Script Comparison (Failure) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-slate-950 border border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono text-slate-300 font-semibold uppercase">
                  Script Tradicional (RPA / Python rígido)
                </span>
              </div>
              <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                currentStepIndex === 0
                  ? 'bg-rose-950 text-rose-300 border border-rose-800'
                  : 'bg-slate-900 text-slate-500'
              }`}>
                {currentStepIndex === 0 ? 'STATUS: CRASH' : 'PROCESO MUERTO'}
              </span>
            </div>

            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-400 space-y-3">
              <div className="text-slate-500">
                # Ejecutando cron_nightly_job.py...
              </div>
              <div className="p-3 rounded bg-slate-950 border border-rose-900/40 text-rose-300 leading-relaxed">
                {step.scriptComparisonText}
              </div>
              <div className="text-[11px] text-slate-500">
                Diagnóstico: El script convencional asume condiciones ideales; carece de bucle de realimentación y no puede reaccionar a desviaciones.
              </div>
            </div>

            {/* Key Comparison Quote */}
            <div className="mt-5 p-4 rounded-lg bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-800/40 text-xs text-slate-200">
              <div className="font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>La Diferencia Crítica:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Un script tradicional se rompe ante el primer error inesperado y requiere un hotfix humano. Un agente con bucle ReAct interpreta el error como un <em>dato de entrada</em> para formular una nueva estrategia y completar la misión.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Resiliencia operativa:</span>
            <span className="text-emerald-400 font-bold">100% Autocorrección</span>
          </div>
        </div>
      </div>
    </div>
  );
}
