import React, { ReactElement } from 'react';
import { ImageURISource, View } from 'react-native';

import RecipeItem from '../../../../components/recipe-item/recipe-item';

const konfitura = require('../../../../../assets/images/konfitura.png');

interface TipInterface {
  url: ImageURISource;
  tip: string;
}

const Recommended = (): ReactElement => {
  return (
    <View>
      <RecipeItem url={konfitura} label={'konfitura morelowa\nz tymiankiem'} />
    </View>
  );
};

export default Recommended;
