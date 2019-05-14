export class AutoQuestion {
  id: bigint;
  title: string;
  numberVoteYes: bigint;
  numberVoteNo: bigint;

  constructor(id: bigint = null, title: string = null) {
    this.id = id;
    this.title = title;
  }
}
