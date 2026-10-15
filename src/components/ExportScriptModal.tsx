import React, { useState } from 'react';
import { X, Copy, Check, Download, FileText } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';

interface ExportScriptModalProps {
  onClose: () => void;
}

export function ExportScriptModal({ onClose }: ExportScriptModalProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const generateMarkdown = () => {
    let md = `# 🚀 GUION DE PRESENTACIÓN: La Revolución de los Agentes de IA\n\n`;
    md += `*De Chatbots Reactivos a Agentes Autónomos: Cómo el Harness, las Skills y la Automatización están redefiniendo el software.*\n\n`;
    md += `---\n\n`;

    SLIDES_DATA.forEach((slide) => {
      md += `### 🎬 DIAPOSITIVA ${slide.id}: ${slide.title}\n\n`;
      md += `**Subtítulo:** ${slide.subtitle}\n\n`;
      md += `**Categoría:** ${slide.category} | **Tiempo Estimado:** ${slide.speakerNotes.durationMinutes} minutos\n\n`;
      md += `#### 📌 Puntos de Apoyo Clave:\n`;
      slide.speakerNotes.talkingPoints.forEach((pt) => {
        md += `- ${pt}\n`;
      });
      md += `\n`;
      md += `#### 🎙️ Guion Sugerido para el Orador:\n`;
      md += `> ${slide.speakerNotes.speakerScript.split('\n').join('\n> ')}\n\n`;
      md += `💡 **Frase Clave / Punchline:** "${slide.speakerNotes.keyPunchline}"\n\n`;

      if (slide.speakerNotes.potentialAudienceQuestions.length > 0) {
        md += `#### ❓ Preguntas Anticipadas del Público:\n`;
        slide.speakerNotes.potentialAudienceQuestions.forEach((q) => {
          md += `- **P:** ${q.question}\n`;
          md += `  **R:** ${q.suggestedAnswer}\n`;
        });
        md += `\n`;
      }
      md += `---\n\n`;
    });

    return md;
  };

  const fullMarkdown = generateMarkdown();

  const handleCopy = () => {
    navigator.clipboard.writeText(fullMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([fullMarkdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Guion_La_Revolucion_de_los_Agentes_IA.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col justify-center items-center p-6 text-slate-100 overflow-y-auto">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col max-h-[85vh] space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <div>
              <h2 className="text-lg font-bold text-white">Guion Completo de Presentación (Markdown)</h2>
              <p className="text-xs text-slate-400">
                Listo para compartir con el equipo o imprimir como tarjetas de apoyo para la exposición.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado!' : 'Copiar Texto'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-xs font-bold text-slate-950 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar .md</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Markdown previewer */}
        <div className="flex-1 overflow-y-auto p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
          {fullMarkdown}
        </div>
      </div>
    </div>
  );
}
