import React from 'react';
import { SLIDES_DATA } from '../data/slidesData';

interface HeaderProps {
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onOpenPresenter: () => void;
}

export function Header({ currentSlideIndex, onSelectSlide, onOpenPresenter }: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md shrink-0">
      {/* Zone 1: Single text element wordmark */}
      <button
        onClick={() => onSelectSlide(0)}
        className="text-base font-extrabold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 text-left"
      >
        La Revolución de los Agentes de IA
      </button>

      {/* Zone 2: 4–5 clean single-line text navigation links */}
      <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-400">
        {SLIDES_DATA.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(idx)}
              className={`hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
                isActive
                  ? 'text-cyan-400 font-bold border-b-2 border-cyan-400'
                  : 'text-slate-400'
              }`}
            >
              {slide.numberStr}. {slide.title.replace('¿Cómo Piensa y Actúa un Agente?', 'Bucle ReAct').replace('La Fórmula Secreta de la IA Agéntica', 'La Fórmula').replace('El HARNESS – El Sistema Operativo Invisible', 'El Harness').replace('Las SKILLS – Superpoderes Modulares', 'Skills & MCP').replace('AUTOMATIZACIÓN – La Guerra de los Frameworks Multi-Agente', 'Multi-Agente').replace('Conclusiones y Próximos Pasos', 'Conclusiones')}
            </button>
          );
        })}
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onOpenPresenter}
          className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors whitespace-nowrap shrink-0 shadow-sm"
        >
          Notas de Orador
        </button>
      </div>
    </header>
  );
}
