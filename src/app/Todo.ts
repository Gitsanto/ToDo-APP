export class Todo{
  id:number;
  title:String;
  complete:boolean;

  constructor(values:Object = {}){
    Object.assign(this,values);
  }
    
}