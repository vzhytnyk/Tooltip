import { ReactNode } from 'react';

export interface ITooltip {
  text: string;
  children: ReactNode;
  arrowDirection?: 'right' | 'left' | 'down';
  topR?: string;
  rightR?: string
  rotateR?: string
  positionL?: string;
  topL?: string;
  rightL?: string
  rotateL?: string
  positionD?: string;
  topD?: string;
  rightD?: string;
  rotateD?: string;
  tooltipPositionRbottom?:string;
  tooltipPositionRleft?:string;
  tooltipPositionLbottom?:string;
  tooltipPositionLright?:string;
  tooltipPositionDtop?:string;
  tooltipPositionDleft?:string;
}