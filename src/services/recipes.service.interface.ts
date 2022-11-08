import { ImageResponseInterface } from '../interfaces/image-response.interface';
import { Categories } from '../enums/categories.enum';

export interface RecipeResponseInterface {
  id: number;
  label: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isRecommended: true;
  cover?: ImageResponseInterface;
}

export interface CategoryResponseInterface {
  id: number;
  label: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: ImageResponseInterface;
  categoryType: Categories
}
