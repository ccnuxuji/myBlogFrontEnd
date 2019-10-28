export class Step {

  constructor();

  constructor(id: number, cid: number, name: string,
              description: string, content: string);

  constructor(public id?: number, public cid?: number, public name?: string,
              public description?: string, public content?: string) {
    this.id = !!id ? id : null;
    this.cid = !!cid ? cid : null;
    this.name = !!name ? name : null;
    this.description = !!description ? description : null;
    this.content = !!content ? content : null;
  }
}
