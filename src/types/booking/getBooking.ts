export interface IBookingGetBookingQuery {
  search?: string;
  sortBy?: "createdAt" | "updatedAt" | "status" | "date";
  order?: "asc" | "desc";
  page?: number;
}
