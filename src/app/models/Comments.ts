export interface Comment {
  readonly uid?: string;
  readonly authorId?: string;
  authorName: string;
  nickname: string;
  comment: string;
  rating: number;
}

export type Comments = Comment[];
