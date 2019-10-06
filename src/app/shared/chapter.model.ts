export class Chapter {
  id: number;
  pid: number;
  ord: number;
  name: string;
  description: string;

  constructor(id: number, pid: number, ord: number, name: string, description: string) {
    this.id = id;
    this.pid = pid;
    this.ord = ord;
    this.name = name;
    this.description = description;
  }

}
