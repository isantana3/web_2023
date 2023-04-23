export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}
