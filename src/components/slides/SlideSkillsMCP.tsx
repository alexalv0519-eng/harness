import React, { useState } from 'react';
import { Layers, Zap, Code2, Server, ArrowRight, Check, X, FileCode, Sliders } from 'lucide-react';

export function SlideSkillsMCP() {
  const [toolCount, setToolCount] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'comparison' | 'calculator' | 'protocol'>('comparison');

  // Math calculations for Direct Tool Calling vs Code Execution over MCP
  // Direct Tool Calling: ~350 tokens per tool schema in system prompt every turn!
  // Intermediate data overhead: passes ~5,000 tokens of raw JSON through LLM context
  const directSchemaTokens = toolCount * 360;
  const directDataTokens = 6500;
  const directTotalTokens = directSchemaTokens + directDataTokens;
  const directCostPer1kTurns = ((directTotalTokens * 1000) / 1000000) * 3.0; // Assume $3 per 1M tokens

  // Code Execution over MCP: Only imports what it needs!
  // Dynamic tool search ~400 tokens + script execution in sandbox ~350 tokens + filtered summary ~300 tokens = ~1050 tokens total!
  const mcpTotalTokens = 950;
  const mcpCostPer1kTurns = ((mcpTotalTokens * 1000) / 1000000) * 3.0;
  const tokenSavingsPercent = Math.round(((directTotalTokens - mcpTotalTokens) / directTotalTokens) * 100);

  return (
    <div className="flex flex-col h-full space-y-5">
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1 tracking-wider uppercase">
            <span>Diapositiva 04</span>
            <span aria-hidden="true">·</span>
            <span>Protocolos & Eficiencia</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Las SKILLS – Superpoderes Modulares
          </h2>
          <p className="text-sm lg:text-base text-slate-400 mt-1">
            Modularidad y Estándares: Dándole Habilidades al Agente con <strong className="text-cyan-300 font-mono">MCP (Model Context Protocol)</strong>.
          </p>
        </div>

        {/* View toggles */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'comparison'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Direct vs Code over MCP
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'calculator'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Calculadora de Tokens (-95%)
          </button>
          <button
            onClick={() => setActiveTab('protocol')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'protocol'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Protocolo JSON-RPC 2.0
          </button>
        </div>
      </div>

      {activeTab === 'comparison' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
          {/* Left Column: Conceptual MCP Explanation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">¿Qué es una Skill?</h3>
                  <span className="text-xs text-cyan-300 font-mono">Paquete modular bajo demanda</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Una Skill es un paquete reutilizable de conocimiento de dominio, esquemas de herramientas y directrices operativas que el agente carga <em>únicamente cuando las necesita</em>, evitando saturar la memoria base.
              </p>
            </div>

            {/* MCP Highlight */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 space-y-3">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                El Estándar Unificado: MCP
              </span>
              <h4 className="font-bold text-white text-sm">
                El USB-C para la Inteligencia Artificial
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-rose-400">El Problema Tradicional:</strong> Conectar un agente a 100 herramientas requería 100 conectores ad-hoc y cargar megabytes de esquemas en cada prompt.
                </div>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                  <strong className="text-emerald-400">La Solución MCP:</strong> Protocolo abierto basado en JSON-RPC 2.0. El agente descubre, inspecciona y consume herramientas dinámicamente.
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Arquitectura recomendada:</span>
              <span className="text-cyan-300 font-mono font-semibold">Code Execution over MCP</span>
            </div>
          </div>

          {/* Right Column: Side-by-side Architectural Comparison Table */}
          <div className="lg:col-span-7 flex flex-col justify-between p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Matriz Comparativa de Arquitectura de Herramientas
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-800 font-mono text-slate-400">
                      <th className="py-2.5 px-3">Dimensión</th>
                      <th className="py-2.5 px-3 text-rose-400">Direct Tool Calling (Tradicional)</th>
                      <th className="py-2.5 px-3 text-emerald-400">Code Execution over MCP (Avanzado)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-200">Carga de Esquemas</td>
                      <td className="py-3 px-3 text-rose-300/80">
                        Inyecta los 100 esquemas JSON en el prompt base.
                      </td>
                      <td className="py-3 px-3 text-emerald-300">
                        Descubrimiento dinámico semántico bajo demanda.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-200">Tratamiento de Datos</td>
                      <td className="py-3 px-3 text-rose-300/80">
                        Pasa miles de filas de datos crudos por el LLM.
                      </td>
                      <td className="py-3 px-3 text-emerald-300">
                        El agente escribe un script en sandbox que filtra y agrega localmente.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-200">Consumo de Tokens</td>
                      <td className="py-3 px-3 text-rose-300/80 font-mono">
                        35,000+ tokens por iteración
                      </td>
                      <td className="py-3 px-3 text-emerald-300 font-mono font-bold">
                        ~900 tokens por iteración (-97%)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-200">Latencia & Red</td>
                      <td className="py-3 px-3 text-rose-300/80">
                        Lenta: múltiples saltos HTTP pesados de ida y vuelta.
                      </td>
                      <td className="py-3 px-3 text-emerald-300">
                        Ultra rápida: ejecución compilada en microVM.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-slate-200">Escalabilidad</td>
                      <td className="py-3 px-3 text-rose-300/80">
                        Colapsa al superar ~20 herramientas.
                      </td>
                      <td className="py-3 px-3 text-emerald-300">
                        Soporta miles de herramientas sin penalización.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs text-emerald-300 flex items-center justify-between">
              <span>⚡ <strong>Conclusión Técnica:</strong> &quot;Code Execution over MCP&quot; convierte una factura de $3,000/mes en $90/mes con menor latencia.</span>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Calculator Tab */}
      {activeTab === 'calculator' && (
        <div className="flex-1 flex flex-col justify-between p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-white">
                Calculadora en Vivo: Ahorro de Tokens y Coste con MCP
              </h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                Ahorro: {tokenSavingsPercent}%
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Ajusta el número de herramientas en tu catálogo empresarial para comparar el impacto en tokens y costes de inferencia.
            </p>
          </div>

          {/* Slider for Tool Count */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">5 Herramientas</span>
              <span className="text-cyan-400 font-bold text-sm">Herramientas en el Sistema: {toolCount}</span>
              <span className="text-slate-400">100 Herramientas</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={toolCount}
              onChange={(e) => setToolCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>Prototipo inicial (10 tools)</span>
              <span>Mediana empresa (50 tools)</span>
              <span>Suite corporativa (100 tools)</span>
            </div>
          </div>

          {/* Live comparison metrics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Direct Tool Calling card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-rose-950/60 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-rose-400 font-bold">Direct Tool Calling</span>
                <span className="text-rose-300 font-bold">{directTotalTokens.toLocaleString()} tokens / turno</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Esquemas en System Prompt:</span>
                  <span className="font-mono text-slate-300">{directSchemaTokens.toLocaleString()} tokens</span>
                </div>
                <div className="flex justify-between">
                  <span>Payloads de datos intermedios:</span>
                  <span className="font-mono text-slate-300">{directDataTokens.toLocaleString()} tokens</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-800 font-semibold text-rose-300">
                  <span>Coste estimado por 1,000 tareas:</span>
                  <span className="font-mono">${directCostPer1kTurns.toFixed(2)} USD</span>
                </div>
              </div>
            </div>

            {/* Code Execution over MCP card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-950/60 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-bold">Code Execution over MCP</span>
                <span className="text-emerald-300 font-bold font-mono">{mcpTotalTokens.toLocaleString()} tokens / turno</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Búsqueda dinámica de herramientas:</span>
                  <span className="font-mono text-slate-300">~400 tokens</span>
                </div>
                <div className="flex justify-between">
                  <span>Script local + resultado procesado:</span>
                  <span className="font-mono text-slate-300">~550 tokens</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-800 font-semibold text-emerald-300">
                  <span>Coste estimado por 1,000 tareas:</span>
                  <span className="font-mono">${mcpCostPer1kTurns.toFixed(2)} USD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-800/40 text-xs text-cyan-200">
            📊 <strong>Impacto Empresarial:</strong> Para una empresa que corre 100,000 ejecuciones agénticas al mes, este cambio ahorra más de <strong>${((directCostPer1kTurns - mcpCostPer1kTurns) * 100).toFixed(0)} USD mensuales</strong> y reduce el tiempo de espera por turno de 4.2s a 0.8s.
          </div>
        </div>
      )}

      {/* Protocol Inspector Tab */}
      {activeTab === 'protocol' && (
        <div className="flex-1 flex flex-col justify-between p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Inspección de Protocolo: Estándar MCP (JSON-RPC 2.0)
            </h3>
            <p className="text-xs text-slate-400">
              Así se comunica el agente con los servidores de herramientas de forma normalizada y agnóstica a la plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                1. Descubrimiento Dinámico (Client -&gt; Server)
              </span>
              <pre className="p-3 rounded bg-slate-900 font-mono text-[11px] text-slate-300 overflow-x-auto">
{`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list",
  "params": {
    "filter": "database.query"
  }
}`}
              </pre>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                2. Invocación Segura en Sandbox
              </span>
              <pre className="p-3 rounded bg-slate-900 font-mono text-[11px] text-emerald-300/90 overflow-x-auto">
{`{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "sql_query_readonly",
    "arguments": {
      "query": "SELECT count(*) FROM users;"
    }
  }
}`}
              </pre>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono">
            Protocolo: JSON-RPC 2.0 sobre stdio o Server-Sent Events (SSE) con TLS mutuo.
          </div>
        </div>
      )}
    </div>
  );
}
