import ArrowDownSvg from '@/icons/ArrowDownSvg';
import ArrowLeftSvg from '@/icons/ArrowLeftSvg';
import ArrowSvg from '@/icons/ArrowSvg';
import { ITooltip } from './types';


const Tooltip = ({
  text,
  children,
  arrowDirection = 'right',
  topR = '-top-[50px]',
  rotateR = 'rotate-[5deg]',
  rightR = '-right-16',
  topL = '-top-5',
  rotateL = 'rotate-[43deg]',
  rightL = 'right-28',
  topD = '-top-6',
  rotateD = 'rotate-[12deg]',
  rightD = '-right-30',
  tooltipPositionRbottom = '-bottom-28',
  tooltipPositionRleft = '-left-20',
  tooltipPositionLbottom = '-bottom-[70px]',
  tooltipPositionLright = '-right-[118px]',
  tooltipPositionDtop = '-top-[40px]',
  tooltipPositionDleft = '-left-12',
}: ITooltip) => {

  

  const getDirection = () => {
    let arrowIcon;
    let arrowClass;

    switch (arrowDirection) {
      case 'right':
        arrowIcon = <ArrowSvg color='#b8b8b8' />;
        arrowClass = `${rotateR} ${topR} ${rightR}`;
        break;
      case 'left':
        arrowIcon = <ArrowLeftSvg color='#b8b8b8' />;
        arrowClass = `${topL} ${rotateL} ${rightL}`;
        break;
      case 'down':
        arrowIcon = <ArrowDownSvg color='#b8b8b8' />;
        arrowClass = `${topD} ${rightD} ${rotateD}`;
        break;
      default:
        arrowIcon = <ArrowSvg color='#b8b8b8' />;
        arrowClass = `${rotateR} ${topR} ${rightR}`;
    }
    return { arrowIcon, arrowClass };
  }

  const {arrowIcon, arrowClass} = getDirection();
    
  const tooltipClass = arrowDirection === 'right' ? `${tooltipPositionRbottom} ${tooltipPositionRleft} ` : (arrowDirection === 'down' ? `${tooltipPositionDtop} ${tooltipPositionDleft}` : `${tooltipPositionLbottom} ${tooltipPositionLright}`);

  return (
    <div className="tooltip-container relative inline-block">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={`tooltip absolute ${tooltipClass}`}>
          <div className={`absolute ${arrowClass}`}>
            {arrowIcon}
          </div>
          <p className={`text-[#b8b8b8] ${arrowDirection === 'right' ? 'mb-6' : (arrowDirection === 'left' ? 'mt-6' : 'mb-6')} ml-[-32px]`}>{text}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;