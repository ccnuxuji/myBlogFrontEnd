export class Step {
  id: number;
  cid: number;
  name: string;
  description: string;
  content: string;

  constructor(id: number, cid: number, name: string, description: string, content: string) {
    this.id = id;
    this.cid = cid;
    this.name = name;
    this.description = description;
    this.content = content;
  }

  getId() {
    return this.id;
  }
}
