export class Receipe{
 public Id:number=0;
 public Name:string="";
 public description:string="";
 public imagePath:string="";
 constructor(Id:number,Name:string,description:string,imagePath:string){
    this.Id=Id;
    this.Name=Name;
    this.description=description;
    this.imagePath=imagePath;
 }

}