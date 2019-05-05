export class Message {
  id: number;
  person: Person;
  message: string;
}

export class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
