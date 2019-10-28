import {Topic} from './topic.model';

export class Product {

  constructor();

  constructor( id: number,  tid: number,  ord: number,  thumbnail: string,
               name: string,  description: string);

  constructor(public id?: number, public tid?: number, public ord?: number, public thumbnail?: string,
              public name?: string, public description?: string, public topic?: Topic) {
    this.id = !!id ? id : null;
    this.tid = !!tid ? tid : null;
    this.ord = !!ord ? ord : null;
    this.thumbnail = !!thumbnail ? thumbnail : null;
    this.name = !!name ? name : null;
    this.description =  !!description ? description : null;
    this.topic = !!topic ? topic : null;
  }
}
