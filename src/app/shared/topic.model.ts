export class Topic {

  constructor();

  constructor(id: number, ord: number, name: string);

  constructor(public id?: number, public ord?: number, public name?: string) {
    this.id = !!id ? id : null;
    this.ord = !!ord ? ord : null;
    this.name = !!name ? name : null;
  }
}
