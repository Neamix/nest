import { CategorySchema } from '@/schema/CategorySchema';
import CategoryDummyData from '@/app/dymmy/CategoryDummy.json';

const categoryData = CategoryDummyData as CategorySchema[];

export function getCategoryList() {
  return categoryData.map(category => ({
    label: category.label,
    value: category.value
  }));
}

export function getCategoryListlugs(): string[] {
  return categoryData.map(cateogry => cateogry.label);
}

export function getSortedSectionNames(): string[] {
  return categoryData
    .map(cateogry => cateogry.label)
    .sort((a, b) => a.localeCompare(b));
}

export function getAllCategoryData(): CategorySchema[] {
  return categoryData;
}
