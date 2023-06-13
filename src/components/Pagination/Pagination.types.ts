export interface IPaginationProps {
  page: IPagination;
  setPage: (page: IPagination) => void;
}

export interface IPagination {
  page: number;
  totalPages?: number;
  limit?: number;
}
