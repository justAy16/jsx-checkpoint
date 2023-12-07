// imported product object to be able to access product description
import product from '../Products/Product';

function Description() {
  return (
    <div>{product.description}</div>
  )
}
// exported Description component to be used in the root js file
export default Description