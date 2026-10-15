import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid, Download, Play, Pause, RotateCcw, Keyboard } from 'lucide-react';

interface SlideControllerProps {
  currentSlideIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenOverview: () => void;
  onOpenExport: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  recommendedDurationMinutes: number;
}

export function SlideController({
  currentSlideIndex,
  totalSlides,
  onPrev,
  onNext,
  onOpenOverview,
  onOpenExport,
  isFullscreen,
  onToggleFullscreen,
  recommendedDurationMinutes
}: SlideControllerProps) {
  // Practice timer state
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [showKeyboardHints, setShowKeyboardHints] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setSecondsElapsed(0);
  };

  const targetSeconds = recommendedDurationMinutes * 60;
  const isPacingOver = secondsElapsed > targetSeconds && targetSeconds > 0;

  return (
    <div className="flex flex-col border-t border-slate-800 bg-slate-950/90 backdrop-blur-md px-6 py-3.5 shrink-0 select-none">
      {/* Visual Progress Bar */}
      <div className="w-full bg-slate-900 h-1 rounded-full mb-3 overflow-hidden">
        <div
          className="bg-cyan-400 h-full transition-all duration-300"
          style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
        {/* Left: Slide Counter & Overview Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenOverview}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            title="Vista de Miniaturas (O)"
          >
            <Grid className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Índice</span>
          </button>

          <span className="font-mono text-slate-400 text-xs">
            <strong className="text-white">0{currentSlideIndex + 1}</strong> / 0{totalSlides}
          </span>
        </div>

        {/* Center: Slide Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            disabled={currentSlideIndex === 0}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-colors ${
              currentSlideIndex === 0
                ? 'bg-slate-900/40 text-slate-600 cursor-not-allowed border border-slate-900'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800'
            }`}
            title="Anterior (←)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          <button
            onClick={onNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className={`flex items-center gap-1 px-4 py-1.5 rounded-lg font-bold transition-colors ${
              currentSlideIndex === totalSlides - 1
                ? 'bg-slate-900/40 text-slate-600 cursor-not-allowed border border-slate-900'
                : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md shadow-cyan-950'
            }`}
            title="Siguiente (→ o Espacio)"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Speaker Timer, Export & Fullscreen */}
        <div className="flex items-center gap-3">
          {/* Practice Timer */}
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px]">
            <span className={isPacingOver ? 'text-amber-400 font-bold' : 'text-slate-300'}>
              ⏱️ {formatTimer(secondsElapsed)}
            </span>
            <span className="text-slate-500">/ ~{recommendedDurationMinutes}m</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-1 hover:text-cyan-400 text-slate-400"
              title={isTimerRunning ? "Pausar cronómetro" : "Iniciar ensayo"}
            >
              {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={handleResetTimer}
              className="p-1 hover:text-slate-200 text-slate-500"
              title="Reiniciar cronómetro"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Export script button */}
          <button
            onClick={onOpenExport}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title="Exportar guion completo (MD)"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

          {/* Keyboard hints tooltip toggle */}
          <button
            onClick={() => setShowKeyboardHints(!showKeyboardHints)}
            className={`p-2 rounded-lg transition-colors border ${
              showKeyboardHints
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
            title="Atajos de teclado"
          >
            <Keyboard className="w-3.5 h-3.5" />
          </button>

          {/* Fullscreen button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title={isFullscreen ? "Salir de pantalla completa (F / Esc)" : "Pantalla completa (F)"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Floating Keyboard Shortcuts Guide */}
      {showKeyboardHints && (
        <div className="mt-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-4">
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-200">←</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-200">→</kbd> Navegar</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-200">Espacio</kbd> Siguiente</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-200">F</kbd> Pantalla Completa</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-200">N</kbd> Notas Orador</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-200">O</kbd> Miniaturas</span>
          </div>
          <button
            onClick={() => setShowKeyboardHints(false)}
            className="text-slate-500 hover:text-slate-300"
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}
