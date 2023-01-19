

export class ProductModel{

  constructor(id:number, name:string, details:string,
    price:number, imageSrc: string){
    this.id = id;
    this.name = name;
    this.details = details;
    this.price = price;
    this.imageSrc = imageSrc;
  }
  id:number;
  name:string;
  details: string;
  price: number;
  imageSrc: string;
}
