export class Product {

  constructor(public id: number, public tid: number, public ord: number, public thumbnail: string,
              public name: string, public description: string) {
  }

  constructor() {
    this.id = null;
    this.tid = null;
    this.ord = null;
    this.thumbnail = null;
    this.name = null;
    this.description = null;
  }
}
