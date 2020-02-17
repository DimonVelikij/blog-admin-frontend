export interface CategoryInterface {
  id: number;
  ruTitle: string;
  enTitle: string;
  children: CategoryInterface[];
}
