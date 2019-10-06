export class Product {
  public id: number;
  public tid: number;
  public ord: number;
  public thumbnail: string;
  public name: string;
  public description: string;

  constructor(id: number, tid: number, ord: number, thumbnail: string, name: string, description: string) {
    this.id = id;
    this.tid = id;
    this.ord = ord;
    this.thumbnail = thumbnail;
    this.name = name;
    this.description = description;
  }
}
