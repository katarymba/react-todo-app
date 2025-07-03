export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type FilterStatus = 'all' | 'active' | 'completed';
export type SortOption = 'name' | 'status';