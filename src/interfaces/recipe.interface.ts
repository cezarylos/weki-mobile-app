import { Categories } from '../enums/categories.enum';

export interface RecipeInterface {
  id: number;
  coverUrl: string;
  label: string;
  isLiked?: boolean;
  isSmall?: boolean;
  isRecommended?: boolean;
  isCategory?: boolean;
  onPress?: (args: any) => void;
  categoryType?: Categories;
}
