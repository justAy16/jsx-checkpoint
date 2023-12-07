// imported product object to be able to access product price
import product from '../Products/Product';

function Price() {
  return (
    // added a funtion to add commas ',' after every thousands and ofcourse the dollar sign for aestetics 
    <div>$ {product.price.toLocaleString()}</div>
  )
}
// exported Price component to be used in the root js file
export default Price