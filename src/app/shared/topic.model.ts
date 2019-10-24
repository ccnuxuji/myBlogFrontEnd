export class Topic {

  constructor(public id: number, public ord: number, public name: string) {}

  constructor() {
    this.id = null;
    this.name = null;
    this.ord = null;
  }
}
