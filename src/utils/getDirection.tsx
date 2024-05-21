import ArrowDownSvg from "@/icons/ArrowDownSvg";
import ArrowLeftSvg from "@/icons/ArrowLeftSvg";
import ArrowSvg from "@/icons/ArrowSvg";

type ArrowType = 'right' | 'left' | 'down';

export const getDirection = (arrowDirection: ArrowType, rotateRightArrow: string, rotateLeftArrow: string, rotateDownArrow: string) => {
  let arrowIcon;
  let mainStyle;
  let rotateArrow = '';

  switch (arrowDirection) {
    case 'right':
      arrowIcon = <ArrowSvg color='#b8b8b8' />;
      mainStyle = 'flex -translate-x-1/2 translate-y-2'
      rotateArrow = rotateRightArrow;
      break;
    case 'left':
      arrowIcon = <ArrowLeftSvg color='#b8b8b8' />;
      mainStyle = 'flex translate-x-1/4 translate-y-1'
      rotateArrow = rotateLeftArrow;
      break;
    case 'down':
      arrowIcon = <ArrowDownSvg color='#b8b8b8' />;
      mainStyle = 'flex -translate-x-1/2 -translate-y-[110px]';
      rotateArrow = rotateDownArrow;
      break;
    default:
      arrowIcon = <ArrowSvg color='#b8b8b8' />;
      rotateArrow = 'rotate-[0]'
  }
  return { arrowIcon, mainStyle, rotateArrow };
}