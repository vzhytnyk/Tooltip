// import React from 'react';
// import ArrowSvg from '@/icons/ArrowSvg';
// import ArrowDownSvg from '@/icons/ArrowDownSvg';
// import ArrowLeftSvg from '@/icons/ArrowLeftSvg';

// type ArrowDirection = 'right' | 'left' | 'down';

// interface ArrowDirectionInfo {
//   arrowIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   arrowClass: string;
// }

// const getDirection = (arrowDirection: ArrowDirection): ArrowDirectionInfo => {
//   let arrowIcon: React.ComponentType<React.SVGProps<SVGSVGElement>> ;
//   let arrowClass: string;

//   switch (arrowDirection) {
//     case 'right':
//       arrowIcon = <ArrowSvg/>;
//       arrowClass = 'rotate-[5deg] -top-[50px] -right-16';
//       break;
//     case 'left':
//       arrowIcon = <ArrowLeftSvg/>;
//       arrowClass = '-top-5 rotate-[43deg] right-28';
//       break;
//     case 'down':
//       arrowIcon = <ArrowDownSvg/>;
//       arrowClass = 'rotate-[12deg] -top-6 -right-30';
//       break;
//     default:
//       arrowIcon = <ArrowSvg/>;
//       arrowClass = '-rotate-[50deg] -top-11 -right-16';
//   }

//   return { arrowIcon, arrowClass };
// }

// export { getDirection };
