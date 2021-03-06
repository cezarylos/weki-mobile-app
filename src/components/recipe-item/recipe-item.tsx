import React, { ReactElement } from 'react';
import { Image, ImageURISource, View } from 'react-native';

import BaseText from '../../components/base-text/base-text';
import { FontSizes, FontTypes } from '../../enums';
import ScalableSvg from '../scalable-svg/scalable-svg';
import { UnlikedSvgComponent } from '../svg/unliked.svg.component';
import { styles } from './recipe-item.styles';

interface RecipeItemInterface {
  url: ImageURISource;
  label: string;
  isLiked?: boolean;
  isSmall?: boolean;
}

const RecipeItem = ({ url, label, isLiked, isSmall }: RecipeItemInterface): ReactElement => (
  <View style={styles.container}>
    <View style={styles.box}>
      <View style={styles.isLikedContainer}>
        <ScalableSvg>
          <UnlikedSvgComponent />
        </ScalableSvg>
      </View>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={url} style={styles.image} />
      </View>
    </View>
    <BaseText style={styles.label} fontType={FontTypes.MUSEO_MODERNO_MEDIUM} fontSize={FontSizes.SIZE_14}>
      {label}
    </BaseText>
  </View>
);

export default RecipeItem;
