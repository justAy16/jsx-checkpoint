// imported product object to be able to access product name
import product from '../Products/Product';
//  created component that returns product name
function Name() {
  return (
    <div>{product.name}</div>
  )
}
// exported Name component to be used in the root js file
export default Name