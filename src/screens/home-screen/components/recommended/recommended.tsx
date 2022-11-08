import React, { Fragment, ReactElement, useMemo } from 'react';
import { View } from 'react-native';

import { LanguageOrchestrator } from '../../../../_locales/language.orchestrator';
import BaseText from '../../../../components/base-text/base-text';
import RecipeItem from '../../../../components/recipe-item/recipe-item';
import { FontSizes, FontTypes } from '../../../../enums';
import { RecipeInterface } from '../../../../interfaces/recipe.interface';
import { selectUser } from '../../../../store/global/global.slice';
import { selectRecommendedRecipes } from '../../../../store/recipes/recipes.slice';
import { useAppSelector } from '../../../../store/store';
import { styles } from './recommended.styles';

const utcMonth = new Date().getUTCMonth();
const currentMonth = (LanguageOrchestrator.months as Record<number, string>)[utcMonth];

export default function Recommended(): ReactElement {
  const recipes = useAppSelector(selectRecommendedRecipes);
  const user = useAppSelector(selectUser);

  const likedRecipes = user?.likedRecipes || [];

  const parsedRecipes = useMemo(
    (): RecipeInterface[] =>
      recipes.map(recipe => ({
        ...recipe,
        isLiked: likedRecipes.includes(recipe.id)
      })),
    [recipes, likedRecipes]
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <BaseText style={styles.title} fontType={FontTypes.MUSEO_MODERNO_MEDIUM} fontSize={FontSizes.SIZE_18}>
          {LanguageOrchestrator.recommended.title}
        </BaseText>
        <BaseText style={styles.dot} fontType={FontTypes.MUSEO_MODERNO_MEDIUM} fontSize={FontSizes.SIZE_36}>
          •
        </BaseText>
        <BaseText style={styles.month} fontType={FontTypes.MUSEO_MODERNO_REGUALAR} fontSize={FontSizes.SIZE_18}>
          {currentMonth}
        </BaseText>
      </View>
      <View style={styles.list}>
        {parsedRecipes?.map(recipe => (
          <Fragment key={recipe.id}>
            <RecipeItem isSmall {...recipe} />
          </Fragment>
        ))}
      </View>
    </View>
  );
}
