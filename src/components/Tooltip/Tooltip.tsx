import { ITooltip } from './types';
import { getDirection } from '@/utils/getDirection';


const Tooltip = ({
  text,
  children,
  arrowDirection = 'right',
}: ITooltip) => {

  const { arrowIcon, mainStyle, rotateArrow } = getDirection(arrowDirection);
  
  return (
    <div>
      <div className='relative'>
        {children}
        <div className='absolute'>
          <div className={`${mainStyle} `}>
            <p className={`text-[#b8b8b8] ${arrowDirection === 'down' ? 'self-start' : 'self-end'}  ${text.trim().length > 15 ? 'max-w-30 ' : 'whitespace-nowrap'} ${arrowDirection === 'left' ? 'order-1' : 'order-0'}`}>{text}</p>
            <div className={`${rotateArrow}`}>{arrowIcon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;