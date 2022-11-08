import React, { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import BaseText from '../../components/base-text/base-text';
import { ACTIVE_OPACITY } from '../../constants/shared';
import { FontSizes, FontTypes } from '../../enums';
import { RecipeInterface } from '../../interfaces/recipe.interface';
import { likeUnlikeRecipe } from '../../store/recipes/recipes.actions';
import { useAppDispatch } from '../../store/store';
import ScalableSvg from '../scalable-svg/scalable-svg';
import { LikedSvgComponent, UnlikedSvgComponent } from '../svg';
import { styles } from './recipe-item.styles';

function RecipeItem({ coverUrl, label, isLiked, isSmall, id, isCategory, onPress }: RecipeInterface): ReactElement {
  const dispatch = useAppDispatch();

  const onLikeUnlikePress = (): void => {
    dispatch(likeUnlikeRecipe(id));
  };

  return (
    <TouchableOpacity
      style={[styles.container, isCategory && styles.categoryContainer]}
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPress}
    >
      <View style={[styles.box, isCategory && styles.categoryBox]}>
        {!isCategory && (
          <TouchableOpacity style={styles.isLikedContainer} onPress={onLikeUnlikePress}>
            <ScalableSvg>{isLiked ? <LikedSvgComponent /> : <UnlikedSvgComponent />}</ScalableSvg>
          </TouchableOpacity>
        )}
        <View style={styles.imageContainer}>
          <SvgUri height="100%" width="100%" uri={coverUrl} style={styles.image} />
        </View>
      </View>
      <BaseText
        style={[styles.label, isCategory && styles.categoryLabel]}
        fontType={FontTypes.MUSEO_MODERNO_MEDIUM}
        fontSize={isCategory ? FontSizes.SIZE_16 : FontSizes.SIZE_14}
      >
        {label}
      </BaseText>
    </TouchableOpacity>
  );
}

export default RecipeItem;
