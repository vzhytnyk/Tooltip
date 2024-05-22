import { ITooltip } from "./types";
import classNames from "classnames";
import { getArrow } from '@/utils/getArrow';

const Tooltip = ({
  text,
  children,
  arrowDirection = 'right',
  tooltipPosition,
  arrowRotate = 'rotate-[0deg]',
  maxContentWidth = '',
}: ITooltip) => {
  const ArrowIcon = getArrow(arrowDirection);

  const paragraphClasses = classNames(
      'text-[#b8b8b8]',{
        [maxContentWidth]:!!maxContentWidth?.length,
        'whitespace-nowrap':!maxContentWidth?.length,
        'self-start':arrowDirection === 'down',
        'self-end':arrowDirection !== 'down',
        'order-0':arrowDirection !== 'left',
        'order-1':arrowDirection === 'left',
      }
    );

  return (
    <div>
      <div className='relative'>
        {children}
        <div className={classNames('absolute',tooltipPosition )}>
          <div className="flex">
          <p className={paragraphClasses}>{text}</p>
            <div className={arrowRotate}>{ArrowIcon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tooltip; 