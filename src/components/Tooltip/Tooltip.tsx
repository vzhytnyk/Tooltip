
import { getDirection } from "@/utils/getDirection";
import { ITooltip } from "./types";


const Tooltip = ({
  text,
  children,
  arrowDirection = 'right',
  rotateRightArrow = '0deg',
  rotateLeftArrow = '30deg',
  rotateDownArrow = '30deg',
}: ITooltip) => {


  const { arrowIcon, mainStyle, rotateArrow } = getDirection(arrowDirection, rotateRightArrow, rotateLeftArrow, rotateDownArrow);
  console.log(rotateArrow)
  return (
    <div>
      <div className='relative'>
        {children}
        <div className='absolute'>
          <div className={`${mainStyle} `}>
            <p className={`text-[#b8b8b8] ${arrowDirection === 'down' ? 'self-start' : 'self-end'}  ${text.trim().length > 15 ? 'max-w-30 ' : 'whitespace-nowrap'} ${arrowDirection === 'left' ? 'order-1' : 'order-0'}`}>{text}</p>
            <div className={`rotate-[${rotateArrow}]`}>{arrowIcon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tooltip; 