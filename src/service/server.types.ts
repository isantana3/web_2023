export interface IDefaultResponse<T> {
  data: {
    data: T;
    currentPage?: number;
    totalPages?: number;
    lastPage?: number;
  };
  status: number;
}

export interface IDefaultPaginated {
  page?: number;
  limit?: number;
}

export interface IDefaultResponseNormal<T> {
  data: T;
  status: number;
}
