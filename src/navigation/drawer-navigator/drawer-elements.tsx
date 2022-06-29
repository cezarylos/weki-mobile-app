import React, { ReactElement } from 'react';

import ScalableSvg from '../../components/scalable-svg/scalable-svg';
import {
  Element1SvgComponent,
  Element2SvgComponent,
  Element3SvgComponent,
  Element4SvgComponent,
  Element5SvgComponent
} from '../../components/svg/drawer-elements';

export default function DrawerElements(): ReactElement {
  return (
    <>
      <ScalableSvg top={393} left={0}>
        <Element1SvgComponent />
      </ScalableSvg>
      <ScalableSvg top={700} left={55}>
        <Element3SvgComponent />
      </ScalableSvg>
      <ScalableSvg top={517} left={38}>
        <Element2SvgComponent />
      </ScalableSvg>
      <ScalableSvg top={730} left={4}>
        <Element4SvgComponent />
      </ScalableSvg>
      <ScalableSvg top={560} left={0}>
        <Element5SvgComponent />
      </ScalableSvg>
    </>
  );
}
