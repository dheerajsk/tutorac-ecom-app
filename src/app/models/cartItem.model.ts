

export class CartItemModel{

  constructor(id:number, productID:number, quantity:number){
    this.id = id;
    this.productID=productID;
    this.quantity=quantity;
  }
  id: number;
  productID: number;
  quantity: number;

}
