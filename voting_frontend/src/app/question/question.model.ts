export class Question {
  id: bigint;
  title: string;
  numberVoteYes: bigint;
  numberVoteNo: bigint;


  constructor(id: bigint = null, title: string = null, numberVoteYes: bigint = null, numberVoteNo: bigint = null) {
    this.id = id;
    this.title = title;
    this.numberVoteYes = numberVoteYes;
    this.numberVoteNo = numberVoteNo;
  }

}
