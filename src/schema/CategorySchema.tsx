export interface CategorySchema {
  value: string;
  label: string;
  sections?: SectionWithCategoriesSchema[]
}

export interface SectionSchema {
  value: string,
  label: string
}

export interface SectionWithCategoriesSchema extends SectionSchema {
  categories: CategorySchema[]
}