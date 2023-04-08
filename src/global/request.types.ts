export interface IDefaultResponse<T> {
  success: boolean;
  status: number;
  request: string;
  method: string;
  code: number;
  errors?: {
    code: string | null;
    log: string | null;
    message: string;
    moreInfo: string | null;
  }[];
  current_page?: number;
  first_page_url?: string | null;
  from?: number;
  last_page?: number;
  last_page_url?: string | null;
  next_page_url?: string | null;
  path?: string;
  per_page?: number;
  prev_page_url?: string | null;
  to?: number;
  total?: number;
  data: T;
}
