import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import { Header } from './components/Header';
import { SlideController } from './components/SlideController';
import { SlideViewer } from './components/SlideViewer';
import { PresenterModal } from './components/PresenterModal';
import { SlideOverviewModal } from './components/SlideOverviewModal';
import { ExportScriptModal } from './components/ExportScriptModal';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showPresenterModal, setShowPresenterModal] = useState<boolean>(false);
  const [showOverviewModal, setShowOverviewModal] = useState<boolean>(false);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  const totalSlides = SLIDES_DATA.length;
  const currentSlide = SLIDES_DATA[currentSlideIndex];

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleSelectSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  }, [totalSlides]);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  }, []);

  // Listen to full screen change events from browser
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If user is focused on an input/textarea, ignore
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setShowPresenterModal((prev) => !prev);
      } else if (e.key === 'o' || e.key === 'O') {
        e.preventDefault();
        setShowOverviewModal((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShowPresenterModal(false);
        setShowOverviewModal(false);
        setShowExportModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev, handleToggleFullscreen]);

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden font-sans select-text">
      {/* Top Bar Contract compliant Header */}
      <Header
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={handleSelectSlide}
        onOpenPresenter={() => setShowPresenterModal(true)}
      />

      {/* Slide Visual Content Stage */}
      <SlideViewer
        currentSlideIndex={currentSlideIndex}
        onOpenExportModal={() => setShowExportModal(true)}
        onOpenPresenterModal={() => setShowPresenterModal(true)}
      />

      {/* Bottom Slide Controller & Timeline */}
      <SlideController
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenOverview={() => setShowOverviewModal(true)}
        onOpenExport={() => setShowExportModal(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        recommendedDurationMinutes={currentSlide.speakerNotes.durationMinutes}
      />

      {/* Modals & Overlays */}
      {showPresenterModal && (
        <PresenterModal
          currentSlideIndex={currentSlideIndex}
          onSelectSlide={handleSelectSlide}
          onClose={() => setShowPresenterModal(false)}
        />
      )}

      {showOverviewModal && (
        <SlideOverviewModal
          currentSlideIndex={currentSlideIndex}
          onSelectSlide={handleSelectSlide}
          onClose={() => setShowOverviewModal(false)}
        />
      )}

      {showExportModal && (
        <ExportScriptModal onClose={() => setShowExportModal(false)} />
      )}
    </div>
  );
}
