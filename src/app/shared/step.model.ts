export class Step {

  constructor(public id: number, public cid: number, public name: string,
              public description: string, public content: string) {
  }

  constructor() {
    this.id = null;
    this.cid = null;
    this.name = null;
    this.description = null;
    this.content = null;
  }
}
