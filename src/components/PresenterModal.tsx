import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, ChevronLeft, ChevronRight, MessageSquare, HelpCircle, Check, Quote } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';

interface PresenterModalProps {
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export function PresenterModal({ currentSlideIndex, onSelectSlide, onClose }: PresenterModalProps) {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const slide = SLIDES_DATA[currentSlideIndex];
  const nextSlide = currentSlideIndex < SLIDES_DATA.length - 1 ? SLIDES_DATA[currentSlideIndex + 1] : null;

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col overflow-hidden text-slate-100">
      {/* Top Presenter Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800 bg-slate-900/80 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
            MODO ORADOR / PRESENTER VIEW
          </span>
          <span className="text-sm font-semibold text-white">
            Diapositiva {slide.numberStr} de 0{SLIDES_DATA.length}: {slide.title}
          </span>
        </div>

        {/* Live Timer Control */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs">
            <span className="text-slate-400">Tiempo de Charla:</span>
            <span className="text-emerald-400 font-bold text-sm">{formatTimer(seconds)}</span>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="p-1 text-slate-400 hover:text-white"
              title={isRunning ? "Pausar" : "Reanudar"}
            >
              {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => {
                setIsRunning(false);
                setSeconds(0);
              }}
              className="p-1 text-slate-500 hover:text-white"
              title="Reiniciar"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Cerrar vista de notas (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Dual-Pane Presenter Screen */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 overflow-hidden">
        {/* Left Column: Speaker Script & Talking Points */}
        <div className="lg:col-span-7 flex flex-col space-y-4 overflow-y-auto pr-2">
          {/* Punchline Card */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-500/30">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold mb-1">
              <Quote className="w-4 h-4" />
              <span>Frase Clave / Punchline Para Grabar en la Audiencia:</span>
            </div>
            <p className="text-sm font-semibold text-white italic pl-4 border-l-2 border-cyan-400">
              &quot;{slide.speakerNotes.keyPunchline}&quot;
            </p>
          </div>

          {/* Verbatim Script (El guion exacto sugerido) */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold">
                🎙️ Guion Sugerido (Palabra por palabra para la exposición):
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                Duración sugerida: ~{slide.speakerNotes.durationMinutes} minutos
              </span>
            </div>
            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line font-sans">
              {slide.speakerNotes.speakerScript}
            </div>
          </div>

          {/* Bullet Talking Points */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-mono uppercase text-slate-400 font-bold">
              📌 Puntos de Apoyo Clave:
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              {slide.speakerNotes.talkingPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold shrink-0">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Anticipated Audience Questions & Answers */}
          {slide.speakerNotes.potentialAudienceQuestions.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 font-bold uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Preguntas Difíciles Anticipadas del Público:</span>
              </div>
              {slide.speakerNotes.potentialAudienceQuestions.map((q, idx) => (
                <div key={idx} className="space-y-1.5 text-xs">
                  <div className="font-semibold text-slate-200">
                    Q: {q.question}
                  </div>
                  <div className="p-3 rounded bg-slate-900 border border-slate-800 text-slate-300 leading-relaxed">
                    <strong className="text-emerald-400">Respuesta recomendada:</strong> {q.suggestedAnswer}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Slide Context & Next Slide Preview */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Current Slide Info */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400">
                Diapositiva Actual ({slide.numberStr}/0{SLIDES_DATA.length})
              </span>
              <span className="text-xs text-slate-400 font-mono">{slide.category}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{slide.title}</h3>
            <p className="text-xs text-slate-300">{slide.subtitle}</p>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400">
              <strong>Objetivo de esta slide:</strong> {slide.speakerNotes.objective}
            </div>
          </div>

          {/* Next Slide Teaser */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-slate-500 font-bold block mb-2">
                ⏭️ Próxima Diapositiva:
              </span>
              {nextSlide ? (
                <div className="space-y-2">
                  <div className="text-sm font-bold text-slate-200">
                    {nextSlide.numberStr}. {nextSlide.title}
                  </div>
                  <p className="text-xs text-slate-400">
                    {nextSlide.subtitle}
                  </p>
                  <p className="text-[11px] text-slate-500 italic mt-2">
                    &quot;{nextSlide.summary}&quot;
                  </p>
                </div>
              ) : (
                <div className="text-xs text-slate-500 italic">
                  Esta es la diapositiva final de conclusiones. Prepara tu cierre y sesión de preguntas abiertas.
                </div>
              )}
            </div>

            {/* Slide Quick Navigation */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onSelectSlide(Math.max(0, currentSlideIndex - 1))}
                disabled={currentSlideIndex === 0}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-300"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <button
                onClick={() => onSelectSlide(Math.min(SLIDES_DATA.length - 1, currentSlideIndex + 1))}
                disabled={currentSlideIndex === SLIDES_DATA.length - 1}
                className="flex items-center gap-1 text-xs font-bold px-4 py-1.5 rounded bg-cyan-400 text-slate-950 hover:bg-cyan-300 disabled:opacity-40"
              >
                <span>Avanzar Slide</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
