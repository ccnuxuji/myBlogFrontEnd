export class Chapter {

  constructor();

  constructor(id: number, pid: number, ord: number, color: string,
              name: string, description: string);

  constructor(public id?: number, public pid?: number, public ord?: number, public color?: string,
              public name?: string, public description?: string) {
    this.id = !!id ? id : null;
    this.pid = !!pid ? pid : null;
    this.ord = !!ord ? ord : null;
    this.name = !!name ? name : null;
    this.color = !!color ? color : 'black';
    this.description = !!description ? description : null;
  }
}
