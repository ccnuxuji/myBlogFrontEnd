export class Chapter {

  constructor(public id: number, public pid: number, public ord: number,
              public name: string, public description: string) {
  }

  constructor() {
    this.id = null;
    this.pid = null;
    this.ord = null;
    this.name = null;
    this.description = null;
  }
}
