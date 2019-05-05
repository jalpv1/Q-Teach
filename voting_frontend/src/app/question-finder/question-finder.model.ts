export interface Question {
  id: number;
  title: string;
  createdAt: Date;
  voteYesCount: number;
  voteNoCount: number;
}
