export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export type FilterStatus = 'all' | 'active' | 'completed';
export type SortOption = 'name' | 'status' | 'created';