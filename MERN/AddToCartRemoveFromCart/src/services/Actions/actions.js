export default function addToCart(data){
console.warn("action",data);
  return{
    type: 'ADD_TO_CART',
    data: data
  }
}

export function RemovefromCart(data){
  console.warn("action",data);
    return{
      type: 'REMOVE_FROM_CART',
      data: data
    } 
  }