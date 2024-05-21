import ArrowDownSvg from "@/icons/ArrowDownSvg";
import ArrowLeftSvg from "@/icons/ArrowLeftSvg";
import ArrowSvg from "@/icons/ArrowSvg";

type ArrowType = 'right' | 'left' | 'down';

export const getArrow = (arrowDirection: ArrowType,) => {
  switch (arrowDirection) {
    case 'right':
      return <ArrowSvg color='#b8b8b8' />;

    case 'left':
      return <ArrowLeftSvg color='#b8b8b8' />;
  
    case 'down':
      return <ArrowDownSvg color='#b8b8b8' />;
    
    default:
      return <ArrowSvg color='#b8b8b8' />;
  }
}


