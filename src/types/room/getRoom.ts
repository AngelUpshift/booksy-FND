export interface IRoomGetRoomQuery {
  search?: string;
  sortBy?: "createdAt" | "updatedAt";
  page?: number;
  order?: "asc" | "desc";
}
