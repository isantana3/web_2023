export interface IDefaultResponse<T> {
  data: T;
  status: number;
  currentPage?: number;
  totalPages?: number;
}

export interface IDefaultPaginated {
  page?: number;
  limit?: number;
}
