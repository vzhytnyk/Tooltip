import { ReactNode } from 'react';

export interface ITooltip {
  text: string;
  children: ReactNode;
  arrowDirection?: 'right' | 'left' | 'down';
  maxContentWidth?: string;
  arrowRotate?: string
  tooltipPosition: string
}
