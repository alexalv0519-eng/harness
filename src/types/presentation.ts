export interface SlideData {
  id: number;
  numberStr: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  speakerNotes: {
    durationMinutes: number;
    objective: string;
    talkingPoints: string[];
    speakerScript: string;
    keyPunchline: string;
    potentialAudienceQuestions: {
      question: string;
      suggestedAnswer: string;
    }[];
  };
}

export type ViewMode = 'slides' | 'interactive' | 'presenter' | 'overview';

export interface ReActStep {
  phase: 'reason' | 'act' | 'observe' | 'correct' | 'complete';
  title: string;
  agentThought: string;
  agentAction: string;
  systemObservation: string;
  isErrorState?: boolean;
  scriptComparisonText: string;
}

export interface HarnessDimension {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impactLevel: 'Crítico' | 'Alto' | 'Fundamental';
  enterpriseRiskWithoutIt: string;
  implementationDetail: string;
  metrics: string;
}

export interface FrameworkComparison {
  name: string;
  logo: string;
  philosophy: string;
  bestFor: string;
  stateModel: string;
  strengths: string[];
  weaknesses: string[];
  enterpriseVerdict: string;
  badgeColor: string;
}
