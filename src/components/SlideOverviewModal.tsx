import React from 'react';
import { X, ArrowRight, Play } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';

interface SlideOverviewModalProps {
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export function SlideOverviewModal({ currentSlideIndex, onSelectSlide, onClose }: SlideOverviewModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col justify-center items-center p-6 text-slate-100 overflow-y-auto">
      <div className="w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white">Índice Global de la Presentación</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Haz clic en cualquier diapositiva para saltar directamente a ella.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SLIDES_DATA.map((slide, idx) => {
            const isCurrent = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between space-y-3 group ${
                  isCurrent
                    ? 'bg-slate-950 border-cyan-400 ring-2 ring-cyan-500/30 shadow-lg shadow-cyan-950/50'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className={isCurrent ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                      Diapositiva {slide.numberStr}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase">{slide.category}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {slide.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>~{slide.speakerNotes.durationMinutes} min</span>
                  <span className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                    <span>Presentar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
