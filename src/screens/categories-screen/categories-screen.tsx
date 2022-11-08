import React, { ReactElement } from 'react';
import { FlatList, View } from 'react-native';

import Background from '../../components/background/background';
import RecipeItem from '../../components/recipe-item/recipe-item';
import ScalableSvg from '../../components/scalable-svg/scalable-svg';
import { Element3SvgComponent, Element4SvgComponent } from '../../components/svg';
import { RecipeInterface } from '../../interfaces/recipe.interface';
import { WithDrawerNavigationInterface } from '../../interfaces/with-navigation.interface';
import { selectCategories } from '../../store/recipes/recipes.slice';
import { useAppSelector } from '../../store/store';
import { styles } from './categories-screen.styles';
import { NavigatorScreens } from '../../enums/navigation-screens.enum';
import { CategoryInterface } from '../../interfaces/category.interface';

function CategoriesScreen({ navigation }: WithDrawerNavigationInterface): ReactElement {
  const categories = useAppSelector(selectCategories);

  const onCategoryPress = (label: string): () => void => (): void => {
    navigation.navigate(NavigatorScreens.RECIPES, { label });
  }

  const renderCategory = ({ item: category }: { item: CategoryInterface }): any => (
    <RecipeItem {...category} isCategory onPress={onCategoryPress(category.label)} />
  );

  return (
    <Background navigation={navigation}>
      <ScalableSvg top={0} left={0}>
        <Element3SvgComponent />
      </ScalableSvg>
      <ScalableSvg top={460} left={275}>
        <Element4SvgComponent />
      </ScalableSvg>
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

export default CategoriesScreen;
