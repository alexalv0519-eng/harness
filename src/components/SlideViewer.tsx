import React from 'react';
import { SlideFormula } from './slides/SlideFormula';
import { SlideReActLoop } from './slides/SlideReActLoop';
import { SlideHarnessOS } from './slides/SlideHarnessOS';
import { SlideSkillsMCP } from './slides/SlideSkillsMCP';
import { SlideFrameworks } from './slides/SlideFrameworks';
import { SlideConclusions } from './slides/SlideConclusions';

interface SlideViewerProps {
  currentSlideIndex: number;
  onOpenExportModal: () => void;
  onOpenPresenterModal: () => void;
}

export function SlideViewer({ currentSlideIndex, onOpenExportModal, onOpenPresenterModal }: SlideViewerProps) {
  const renderSlideContent = () => {
    switch (currentSlideIndex) {
      case 0:
        return <SlideFormula />;
      case 1:
        return <SlideReActLoop />;
      case 2:
        return <SlideHarnessOS />;
      case 3:
        return <SlideSkillsMCP />;
      case 4:
        return <SlideFrameworks />;
      case 5:
        return (
          <SlideConclusions
            onOpenExportModal={onOpenExportModal}
            onOpenPresenterModal={onOpenPresenterModal}
          />
        );
      default:
        return <SlideFormula />;
    }
  };

  return (
    <main className="flex-1 overflow-y-auto px-4 py-5 sm:px-8 sm:py-6 max-w-7xl w-full mx-auto flex flex-col">
      {renderSlideContent()}
    </main>
  );
}
