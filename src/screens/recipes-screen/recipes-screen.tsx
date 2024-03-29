import React, { Fragment, ReactElement } from 'react';
import { FlatList, ListRenderItem, ScrollView, Text, View } from 'react-native';

import Background from '../../components/background/background';
import RecipeItem from '../../components/recipe-item/recipe-item';
import ScalableSvg from '../../components/scalable-svg/scalable-svg';
import { Element3SvgComponent, Element4SvgComponent } from '../../components/svg';
import { RecipeInterface } from '../../interfaces/recipe.interface';
import { WithDrawerNavigationInterface } from '../../interfaces/with-navigation.interface';
import { selectCategories } from '../../store/recipes/recipes.slice';
import { useAppSelector } from '../../store/store';
import { styles } from './recipes-screen.styles';
import { Categories } from '../../enums/categories.enum';

export default function RecipesScreen({ route, navigation }: WithDrawerNavigationInterface): ReactElement {
  const categories = useAppSelector(selectCategories);

  const { label } = route.params as { label: string; };

  const renderCategory = ({ item: category }: { item: RecipeInterface }): any => (
    <RecipeItem {...category} isCategory />
  );

  return (
    <Background navigation={navigation}>
      <ScalableSvg top={200} left={200}>
        <Element3SvgComponent />
      </ScalableSvg>
      <ScalableSvg top={460} left={275}>
        <Element4SvgComponent />
      </ScalableSvg>
      <Text>{label}</Text>
      <View style={styles.content}>
        <FlatList
          nestedScrollEnabled
          columnWrapperStyle={styles.columnWrapperStyle}
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </Background>
  );
}
