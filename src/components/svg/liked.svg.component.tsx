import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// export function LikedSvgComponent(props) {
//   return (
//     <Svg xmlns="http://www.w3.org/2000/svg" width={20.746} height={17.685} viewBox="0 0 20.746 17.685" {...props}>
//       <Path
//         data-name="Path 4483"
//         d="M10.373 17.685a.745.745 0 01-.4-.115C6.248 15.224-.001 10.544-.001 5.562A5.569 5.569 0 015.561 0a6.223 6.223 0 014.811 2.322A6.227 6.227 0 0115.184 0a5.569 5.569 0 015.561 5.562c0 4.982-6.249 9.662-9.973 12.008a.751.751 0 01-.399.115zM5.562 1.5A4.067 4.067 0 001.5 5.562c0 4.222 5.912 8.57 8.873 10.483 2.961-1.913 8.873-6.261 8.873-10.483A4.067 4.067 0 0015.185 1.5a4.53 4.53 0 00-4.114 2.585.748.748 0 01-.7.477.748.748 0 01-.7-.478A4.528 4.528 0 005.562 1.5z"
//         fill="#773159"
//       />
//     </Svg>
//   );
// }

export function LikedSvgComponent(props) {
  return (
    <Svg width={17} height={15} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="m8.553 14.987-.4-.252c-2.914-1.834-7.8-5.5-7.8-9.441A4.481 4.481 0 0 1 4.829.817a5.014 5.014 0 0 1 3.726 1.7 5.01 5.01 0 0 1 3.725-1.7 4.48 4.48 0 0 1 4.476 4.477c0 3.94-4.888 7.607-7.8 9.441l-.403.252ZM4.827 2.317a2.98 2.98 0 0 0-2.976 2.977c0 2.281 2.436 5.153 6.7 7.917 4.265-2.764 6.7-5.636 6.7-7.917a2.98 2.98 0 0 0-2.976-2.977 3.33 3.33 0 0 0-3.027 1.894L8.548 6l-.7-1.789a3.329 3.329 0 0 0-3.021-1.894Z"
        fill="#fff"
      />
      <Path
        d="M4.827 2.317a2.98 2.98 0 0 0-2.976 2.977c0 2.281 2.436 5.153 6.7 7.917 4.265-2.764 6.7-5.636 6.7-7.917a2.98 2.98 0 0 0-2.976-2.977 3.33 3.33 0 0 0-3.027 1.894L8.548 6l-.7-1.789a3.329 3.329 0 0 0-3.021-1.894Z"
        fill="#fff"
      />
    </Svg>
  );
}
