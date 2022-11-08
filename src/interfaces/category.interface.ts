import { Categories } from '../enums/categories.enum';

export interface CategoryInterface {
  id: number;
  coverUrl: string;
  label: string;
  categoryType: Categories;
  onPress?: (args: any) => void;
}
