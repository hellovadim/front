export interface FilmsProps {
  data: Data[];
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: FilmsAttributes;
}

export interface FilmsAttributes {
  title: string;
  released: string;
  director: string;
  plot: string;
  slug: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
