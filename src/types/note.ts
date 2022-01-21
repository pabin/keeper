export type Note = {
  id: number;
  title: string;
  body: string;
  isFavourite: boolean;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
};
